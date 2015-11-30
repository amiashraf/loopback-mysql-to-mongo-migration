var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.mongovotebdtest;
var oldds = app.datasources.votebdold;


oldds.discoverAndBuildModels('Account', {schema: 'votebd_july2015'},
  function(err, models) {
    if (err) throw err;

    models.Account.find(function(err, accounts) {
      if (err) throw err;

      console.log('Found:', accounts);

      ds.disconnect();
    });
  });

ds.automigrate('Donor', function(err) {
  if (err) throw err;

  var accounts = [
    {
      name: 'kamela'
    },
    {
      name: 'tamela'
    },
    {
      name: 'pamela'
    }
  ];
  var count = accounts.length;
  accounts.forEach(function(account) {
    app.models.Donor.create(account, function(err, model) {
      if (err) throw err;

      console.log('Created:', model);

      count--;
      if (count === 0)
        ds.disconnect();
    });
  });

});
