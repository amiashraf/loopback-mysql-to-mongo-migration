var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.votebdmongo;
var oldds = app.datasources.votebdold;


//Step 1: Showing table structure
//oldds.discoverSchema('current_elections', {schema: 'votebd_july2015'}, function(err,schema) {
//  if (err) throw err;
//
//  var json = JSON.stringify(schema, null, '  ');
//  console.log(json);
//
//  oldds.disconnect();
//});

//Step 2: Showing data
//oldds.discoverAndBuildModels('current_elections', {schema: 'votebd_july2015'},
//  function(err, models) {
//    if (err) throw err;
//
//    models.CurrentElections.find(function(err, districts) {
//      if (err) throw err;
//
//      console.log('Found:', districts);
//
//      oldds.disconnect();
//    });
//  });


////Step 3: Retreiving data from mysql and push to mongo
//oldds.discoverAndBuildModels('current_elections', {schema: 'votebd_july2015'},
//  function(err, models) {
//    if (err) throw err;
//
//    models.CurrentElections.find(function(err, districts) {
//      if (err) throw err;
//
//      //console.log('Found:', districts);
//
//
//      //importing to mongo
//      var count = districts.length;
//      districts.forEach(function(district) {
//
//        var distr = {};
//        distr.oldId = district.id;
//        distr.oldElectionId = district.electionId;
//        distr.electionDescBn = district.electionDesc;
//        distr.electionDate = district.electionDate;
//        distr.displayType = district.displayType;
//        distr.electionDateTimestamp = district.electionDate.getTime();
//
//
//        app.models.currentElection.create(distr, function(err, model) {
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


////now put election objectId to currentElection(electionId)
//  app.models.election.find(function(err, elections) {
//      if (err) throw err;
//
//      console.log('Found:', elections.length);
//
//
//      //importing to mongo
//    elections.forEach(function(election) {
//
//      //console.log(election);
//      var distr = {};
//      distr.electionId = election.id;
//
//      app.models.currentElection.updateAll({oldElectionId: election.oldId}, distr, function(errr, info) {
//        if(err)
//          throw errr;
//
//        console.log(info);
//      });
//
//    });
//
//      ds.disconnect();
//    });



/////////////////////DATA///////////////////////////////////
//{ id: 2,
//  electionId: 2,
//  electionDesc: 'NULL',
//  electionDate: Mon Mar 12 2007 06:00:00 GMT+0600 (BDT),
//  displayType: 'private' }
