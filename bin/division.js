var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.votebdmongo;
var oldds = app.datasources.votebdold;


//Step 1: Showing table structure
//oldds.discoverSchema('division_list', {schema: 'votebd_july2015'}, function(err,schema) {
//  if (err) throw err;
//
//  var json = JSON.stringify(schema, null, '  ');
//  console.log(json);
//
//  oldds.disconnect();
//});

//Step 2: Showing data
//oldds.discoverAndBuildModels('division_list', {schema: 'votebd_july2015'},
//  function(err, models) {
//    if (err) throw err;
//
//    models.DivisionList.find(function(err, divisions) {
//      if (err) throw err;
//
//      console.log('Found:', divisions);
//
//      oldds.disconnect();
//    });
//  });


////Step 3: Retreiving data from mysql and push to mongo
//oldds.discoverAndBuildModels('division_list', {schema: 'votebd_july2015'},
//  function(err, models) {
//    if (err) throw err;
//
//    models.DivisionList.find(function(err, divisions) {
//      if (err) throw err;
//
//      //console.log('Found:', divisions);
//
//
//      //importing to mongo
//      var count = divisions.length;
//      divisions.forEach(function(division) {
//
//        var divisn = {};
//        divisn.oldId = division.divisionId;
//        divisn.nameEn = division.divisionName;
//        divisn.nameBn = division.divisionNameBng;
//        divisn.info = division.divisionInfo;
//
//
//        app.models.division.create(divisn, function(err, model) {
//          if (err) throw err;
//
//          console.log('Created:', model);
//
//          count--;
//          if (count === 0)
//            ds.disconnect();
//        });
//      });
//
//
//
//      oldds.disconnect();
//    });
//  });

//////////////////TABLE SCHEMA//////////////////////////////////////
//division_list scheam
//      {
//        "name": "DivisionList",
//        "options": {
//        "idInjection": false,
//          "mysql": {
//          "schema": "votebd_july2015",
//            "table": "division_list"
//        }
//      },



/////////////////////DATA///////////////////////////////////
//[ { divisionId: 1,
//    divisionName: 'Dhaka',
//    divisionNameBng: 'ঢাকা',
//    divisionInfo: 'বাংলাদেশের রাজধানী' },
// ]
