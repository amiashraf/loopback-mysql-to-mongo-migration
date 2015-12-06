var path = require('path');
var app = require(path.resolve(__dirname, '../server/server'));
//var ds = app.datasources.mongovotebdtest;
var ds = app.datasources.votebdmongo;
var oldds = app.datasources.votebdold;

//
//oldds.connector.execute("SELECT current_election_id, COUNT(id) as totalEffidevit FROM person2profile WHERE profile_type='EFFIDEVIT' GROUP BY current_election_id",'',function(data){
//  console.log("data",data);
//});

oldds.connector.query("SELECT current_election_id, COUNT(id) as totalEffidevit FROM person2profile WHERE profile_type='EFFIDEVIT' GROUP BY current_election_id limit 2 , 1",'',function(err,rows,fields){
  if(err){
    console.log(err);
    throw err;
  }
  console.log("data length: ",rows);

  console.log("current_election_id: ",rows[0].current_election_id," totalEffidevit: ",rows[0].totalEffidevit);

  oldds.connector.query("SELECT * FROM person2profile WHERE profile_type='EFFIDEVIT' AND current_election_id="+rows[0].current_election_id,'',function(err2,rows2,fields2){
    if(err2){
      console.log(err2);
      throw err2;
    }
    console.log("data length 2: ",rows.length);

    oldds.disconnect();
  });

});

////Step 1: Showing table structure
//oldds.discoverSchema('election_candidates', {schema: 'votebd_july2015'}, function(err,schema) {
//  if (err) throw err;
//
//  var json = JSON.stringify(schema, null, '  ');
//  console.log(json);
//
//  oldds.disconnect();
//});

////Step 2: Showing data
//oldds.discoverAndBuildModels('election_candidates', {schema: 'votebd_july2015'},
//  function(err, models) {
//    if (err) throw err;
//
//    models.ElectionCandidates.find({limit:4},function(err, districts) {
//      if (err) throw err;
//
//      console.log('Found:', districts);
//
//      oldds.disconnect();
//    });
//  });


////Step 3: Retreiving data from mysql and push to mongo
//oldds.discoverAndBuildModels('election_candidates', {schema: 'votebd_july2015'},
//  function(err, models) {
//    if (err) throw err;
//
//    models.ElectionCandidates.find(function(err, districts) {
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
//        distr.oldElectionSeatId = district.seatId;
//        distr.oldPersonId = district.personId;
//        distr.oldPoliticalPartyId = district.politicalPartyId;
//        distr.oldCandidatePostId = district.candidatePost;
//        distr.constitutionalPostBn = district.constitutionalPost;
//        distr.wardNameBn = district.wardName;
//        distr.resultType = district.resultType;
//        distr.candidateType = district.candidateType;
//        distr.candidatePhoto = district.photo;
//
//
//        app.models.candidate.create(distr, function(err, model) {
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


////now put currentElection objectId to candidate(currentElectionId)
//  app.models.currentElection.find({skip:30,limit:10},function(err, currentElections) {
//      if (err) throw err;
//
//      console.log('Found:', currentElections.length);
//      //console.log( currentElections);
//
//      //importing to mongo
//    currentElections.forEach(function(currentElection) {
//
//      console.log(currentElection);
//      var distr = {};
//      distr.currentElectionId = currentElection.id;
//
//      app.models.candidate.updateAll({oldCurrentElectionId: currentElection.oldId}, distr, function(errr, info) {
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
//[ { current_election_id: null, totalEffidevit: 105 },
//  { current_election_id: 1, totalEffidevit: 43 },
//  { current_election_id: 5, totalEffidevit: 986 },
//  { current_election_id: 6, totalEffidevit: 546 },
//  { current_election_id: 7, totalEffidevit: 2465 },
//  { current_election_id: 8, totalEffidevit: 2714 },
//  { current_election_id: 9, totalEffidevit: 27 },
//  { current_election_id: 10, totalEffidevit: 420 },
//  { current_election_id: 11, totalEffidevit: 1564 },
//  { current_election_id: 13, totalEffidevit: 12 },
//  { current_election_id: 14, totalEffidevit: 673 },
//  { current_election_id: 15, totalEffidevit: 473 },
//  { current_election_id: 17, totalEffidevit: 6 },
//  { current_election_id: 18, totalEffidevit: 1539 },
//  { current_election_id: 19, totalEffidevit: 11 },
//  { current_election_id: 20, totalEffidevit: 2 },
//  { current_election_id: 21, totalEffidevit: 716 },
//  { current_election_id: 22, totalEffidevit: 2896 },
//  { current_election_id: 23, totalEffidevit: 1102 },
//  { current_election_id: 24, totalEffidevit: 1174 },
//  { current_election_id: 25, totalEffidevit: 50 },
//  { current_election_id: 26, totalEffidevit: 1053 },
//  { current_election_id: 27, totalEffidevit: 5 },
//  { current_election_id: 28, totalEffidevit: 10 },
//  { current_election_id: 29, totalEffidevit: 210 },
//  { current_election_id: 31, totalEffidevit: 2 },
//  { current_election_id: 32, totalEffidevit: 36 },
//  { current_election_id: 33, totalEffidevit: 614 },
//  { current_election_id: 34, totalEffidevit: 756 },
//  { current_election_id: 35, totalEffidevit: 364 } ]

