var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.votebdmongo;
var oldds = app.datasources.votebdold;


//Step 1: Showing table structure
//oldds.discoverSchema('election_posts', {schema: 'votebd_july2015'}, function(err,schema) {
//  if (err) throw err;
//
//  var json = JSON.stringify(schema, null, '  ');
//  console.log(json);
//
//  oldds.disconnect();
//});

////Step 2: Showing data
//oldds.discoverAndBuildModels('election_posts', {schema: 'votebd_july2015'},
//  function(err, models) {
//    if (err) throw err;
//
//    models.ElectionPosts.find(function(err, districts) {
//      if (err) throw err;
//
//      console.log('Found:', districts);
//
//      oldds.disconnect();
//    });
//  });


////Step 3: Retreiving data from mysql and push to mongo
//oldds.discoverAndBuildModels('election_posts', {schema: 'votebd_july2015'},
//  function(err, models) {
//    if (err) throw err;
//
//    models.ElectionPosts.find(function(err, districts) {
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
//        distr.oldCurrentElectionId = district.currentElectionId;
//        distr.postNameEn = district.postNameEng;
//        distr.postNameBn = district.postNameBng;
//        distr.postDescResponsibilityBn = district.postDescResponsibility;
//
//
//        app.models.candidatePost.create(distr, function(err, model) {
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


////now put currentElection objectId to district(districtId)
//  app.models.currentElection.find(function(err, currentElections) {
//      if (err) throw err;
//
//      console.log('Found:', currentElections.length);
//
//
//      //importing to mongo
//    currentElections.forEach(function(currentElection) {
//
//      //console.log(currentElection);
//      var distr = {};
//      distr.currentElectionId = currentElection.id;
//
//      app.models.candidatePost.updateAll({oldCurrentElectionId: currentElection.oldId}, distr, function(errr, info) {
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

//////////////////TABLE SCHEMA//////////////////////////////////////


/////////////////////DATA///////////////////////////////////
//{ id: 394,
//  currentElectionId: 33,
//  postNameBng: '২৮ নং ওয়ার্ড কাউন্সিলর',
//  postNameEng: '',
//  postDescResponsibility: '' }
