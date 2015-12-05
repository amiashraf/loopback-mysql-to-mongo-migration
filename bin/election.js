var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.votebdmongo;
var oldds = app.datasources.votebdold;


////Step 1: Showing table structure
//oldds.discoverSchema('election_list', {schema: 'votebd_july2015'}, function(err,schema) {
//  if (err) throw err;
//
//  var json = JSON.stringify(schema, null, '  ');
//  console.log(json);
//
//  oldds.disconnect();
//});

////Step 2: Showing data
//oldds.discoverAndBuildModels('election_list', {schema: 'votebd_july2015'},
//  function(err, models) {
//    if (err) throw err;
//
//    models.ElectionList.find(function(err, elections) {
//      if (err) throw err;
//
//      console.log('Found:', elections);
//
//      oldds.disconnect();
//    });
//  });


////Step 3: Retreiving data from mysql and push to mongo
//oldds.discoverAndBuildModels('election_list', {schema: 'votebd_july2015'},
//  function(err, models) {
//    if (err) throw err;
//
//    models.ElectionList.find(function(err, elections) {
//      if (err) throw err;
//
//      console.log('Found:', elections);
//
//
//      //importing to mongo
//      var count = elections.length;
//      elections.forEach(function(election) {
//
//        var divisn = {};
//        divisn.oldId = election.id;
//        divisn.nameEn = election.electionNameEng;
//        divisn.nameBn = election.electionNameBng;
//        divisn.detail = election.electionDetails;
//        divisn.history = election.electionHistory;
//        divisn.electionType = election.electionType;
//
//
//        app.models.election.create(divisn, function(err, model) {
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


/////////////////////////////schema////////////////////////
//{
//  "name": "ElectionList",
//  "options": {
//  "idInjection": false,
//    "mysql": {
//    "schema": "votebd_july2015",
//      "table": "election_list"
//  }


//////////////////////////////////data//////////////////
//

//  { id: 2,
//    electionNameEng: 'By-Election',
//    electionNameBng: 'উপনির্বাচন ',
//    electionDetails: 'উপনির্বাচন(By-Election)',
//    electionHistory: '',
//    electionType: 'BY-ELECTION' },
