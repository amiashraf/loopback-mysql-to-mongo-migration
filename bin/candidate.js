var path = require('path');
var app = require(path.resolve(__dirname, '../server/server'));
//var ds = app.datasources.mongovotebdtest;
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



//// now put electionSeat objectId to candidate(electionSeatId)
//  app.models.electionSeat.find({skip:2000,limit:500},function(err, electionSeats) {
//      if (err) throw err;
//
//      console.log('Found:', electionSeats.length);
//      //console.log( electionSeats);
//    var count = electionSeats.length;
//
//      //importing to mongo
//    var spreadData = [];
//    electionSeats.forEach(function(electionSeat) {
//
//      console.log("oldElectionSeatId",electionSeat.oldId);
//      var distr = {};
//      distr.electionSeatId = electionSeat.id;
//
//      app.models.candidate.updateAll({oldElectionSeatId: electionSeat.oldId}, distr, function(errr, info) {
//        if(err){
//          console.log("error:",err);
//          throw errr;
//        }
//
//        console.log("hello",electionSeat.oldId);
//      });
//
//      //count--;
//      //if (count === 0){
//      //  console.log("disconnect korte aise;");
//      //  ds.disconnect();
//      //}
//
//    });
//
//
//    });



//// now put person objectId to candidate(personId)
//  app.models.person.find({skip:18275,limit:500},function(err, persons) {
//      if (err){
//        console.log("error to find:", err);
//        throw err;
//      }
//
//      console.log('Found:', persons.length);
//      //console.log( persons);
//    var count = persons.length;
//
//      //importing to mongo
//    var spreadData = [];
//    persons.forEach(function(person) {
//
//      console.log("oldPersonId",person.oldId);
//      var distr = {};
//      distr.personId = person.id;
//
//      app.models.candidate.updateAll({oldPersonId: person.oldId}, distr, function(errr, info) {
//        if(errr){
//          console.log("error to update:",err);
//          throw errr;
//        }
//
//        console.log("updated done oldPersonId",person.oldId);
//      });
//
//      //count--;
//      //if (count === 0){
//      //  console.log("disconnect korte aise;");
//      //  ds.disconnect();
//      //}
//
//    });
//
//
//    });


// now put politicalParty objectId to candidate(politicalPartyId)
  app.models.politicalParty.find({skip:40,limit:10},function(err, politicalParties) {
      if (err){
        console.log("error to find:", err);
        throw err;
      }

      console.log('Found:', politicalParties.length);
      //console.log( politicalParties);
    var count = politicalParties.length;

      //importing to mongo
    var spreadData = [];
    politicalParties.forEach(function(politicalParty) {

      console.log("oldPoliticalPartyId",politicalParty.oldId);
      var distr = {};
      distr.politicalPartyId = politicalParty.id;

      app.models.candidate.updateAll({oldPoliticalPartyId: politicalParty.oldId}, distr, function(errr, info) {
        if(errr){
          console.log("error to update:",err);
          throw errr;
        }

        console.log("updated done oldPoliticalPartyId",politicalParty.oldId);
      });

      //count--;
      //if (count === 0){
      //  console.log("disconnect korte aise;");
      //  ds.disconnect();
      //}

    });


    });

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
