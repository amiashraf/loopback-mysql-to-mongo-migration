var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.mongovotebdtest;
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
