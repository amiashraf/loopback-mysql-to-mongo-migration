var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.votebdold;
ds.discoverAndBuildModels('election_list', {schema: 'votebd_july2015'},
    function(err, models) {
  if (err) throw err;

  models.ElectionList.find(function(err, accounts) {
    if (err) throw err;

    console.log('Found:', accounts);

    ds.disconnect();
  });
});
