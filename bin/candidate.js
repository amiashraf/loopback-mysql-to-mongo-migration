var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.votebdmongo;
var oldds = app.datasources.votebdold;


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


//this part is pending, now we need to do this for all old...Id
////now put division objectId to district(districtId)
//  app.models.division.find(function(err, divisions) {
//      if (err) throw err;
//
//      console.log('Found:', divisions.length);
//
//
//      //importing to mongo
//    divisions.forEach(function(division) {
//
//      //console.log(division);
//      var distr = {};
//      distr.divisionId = division.id;
//
//      app.models.district.updateAll({oldDivisionId: division.oldId}, distr, function(errr, info) {
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
//{
//  "name": "DistrictList",
//  "options": {
//  "idInjection": false,
//    "mysql": {
//    "schema": "votebd_july2015",
//      "table": "district_list"
//  }
//},

/////////////////////DATA///////////////////////////////////
//{
//  id: 1,
//  currentElectionId: '1',
//  seatId: '32',
//  wardName: null,
//  candidatePost: '11',
//  personId: '1',
//  politicalPartyId: null,
//  photo: '',
//  candidateType: 'possible',
//  resultType: 'notelected',
//  constitutionalPost: 'প্রাথী' }
