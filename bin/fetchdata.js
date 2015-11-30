var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.votebdtest;
//console.log(ds);
ds.discoverSchema('Donor', {schema: 'votebdtest'}, function(err,schema) {
  if (err) throw err;

  var json = JSON.stringify(schema, null, '  ');
  console.log(json);

  ds.disconnect();
});
