var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.votebdmongo;
var oldds = app.datasources.votebdold;


////Step 1: Showing table structure
//oldds.discoverSchema('election_seat_list', {schema: 'votebd_july2015'}, function(err,schema) {
//  if (err) throw err;
//
//  var json = JSON.stringify(schema, null, '  ');
//  console.log(json);
//
//  oldds.disconnect();
//});


//Step 2: Showing data
//oldds.discoverAndBuildModels('election_seat_list', {schema: 'votebd_july2015'},
//  function(err, models) {
//    if (err) throw err;
//
//    models.ElectionSeatList.find({limit:5},function(err, districts) {
//      if (err) throw err;
//
//      console.log('Found:', districts);
//
//      oldds.disconnect();
//    });
//  });


////Step 3: Retreiving data from mysql and push to mongo
//oldds.discoverAndBuildModels('election_seat_list', {schema: 'votebd_july2015'},
//  function(err, models) {
//    if (err) throw err;
//
//    models.ElectionSeatList.find(function(err, districts) {
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
//        distr.oldDivisionId = district.divisionId;
//        distr.oldDistrictId = district.districtId;
//        distr.seatNumberBn = district.seatNumber;
//        distr.seatNameEn = district.seatNameEng;
//        distr.seatNameBn = district.seatNameBng;
//        distr.enlistedAreaBn = district.enlistedArea;
//        distr.totalPeople = district.totalPeople;
//        distr.totalVoterMale = district.totalVoterMale;
//        distr.totalVoterFemale = district.totalVoterFemale;
//        distr.seatInfoBn = district.seatInfo;
//
//
//        app.models.electionSeat.create(distr, function(err, model) {
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


/////////////////////////////////////mapping old id to new object reference id/////////////////////////////////

////now put currentElection objectId to electionSeat(currentElectionId)
//  app.models.currentElection.find({skip:30,limit:5},function(err, currentElections) {
//      if (err) throw err;
//
//      console.log('Found:', currentElections.length);
//      //console.log('Found:', currentElections);
//
//
//      //importing to mongo
//    currentElections.forEach(function(currentElection) {
//
//      console.log(currentElection.oldId);
//      var distr = {};
//      distr.currentElectionId = currentElection.id;
//
//      app.models.electionSeat.updateAll({oldCurrentElectionId: currentElection.oldId}, distr, function(errr, info) {
//        if(errr)
//          throw errr;
//
//        console.log(info);
//      });
//
//    });
//
//      //ds.disconnect();
//    });

////now put division objectId to electionSeat(divisionId)
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
//      app.models.electionSeat.updateAll({oldDivisionId: division.oldId}, distr, function(errr, info) {
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

////now put district objectId to electionSeat(districtId)
//  app.models.district.find(function(err, districts) {
//      if (err) throw err;
//
//      console.log('Found:', districts.length);
//
//
//      //importing to mongo
//    districts.forEach(function(district) {
//
//      console.log(district);
//      var distr = {};
//      distr.districtId = district.id;
//
//      app.models.electionSeat.updateAll({oldDistrictId: district.districtCode}, distr, function(errr, info) {
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
//{ id: 10,
//  currentElectionId: 1,
//  seatNumber: '০০২',
//  seatNameEng: 'Panchagar-2',
//  seatNameBng: 'পঞ্চগড়-২',
//  enlistedArea: '',
//  divisionId: 5,
//  districtId: 5000,
//  totalPeople: 0,
//  totalVoterMale: 0,
//  totalVoterFemale: '',
//  seatInfo: '' }
