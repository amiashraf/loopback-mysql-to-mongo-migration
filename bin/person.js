var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.votebdmongo;
var oldds = app.datasources.votebdold;


//Step 1: Showing table structure
//oldds.discoverSchema('persons', {schema: 'votebd_july2015'}, function(err,schema) {
//  if (err) throw err;
//
//  var json = JSON.stringify(schema, null, '  ');
//  console.log(json);
//
//  oldds.disconnect();
//});

////Step 2: Showing data
//oldds.discoverAndBuildModels('persons', {schema: 'votebd_july2015'},
//  function(err, models) {
//    if (err) throw err;
//
//    models.Persons.find(function(err, elections) {
//      if (err) throw err;
//
//      console.log('Found:', elections);
//
//      oldds.disconnect();
//    });
//  });


////Step 3: Retreiving data from mysql and push to mongo
//oldds.discoverAndBuildModels('persons', {schema: 'votebd_july2015'},
//  function(err, models) {
//    if (err) throw err;
//
//    models.Persons.find({limit:1000, skip:20000},function(err, elections) {
//      if (err) throw err;
//
//      //console.log('Found:', elections);
//
//
//      //importing to mongo
//      var count = elections.length;
//      elections.forEach(function(election) {
//
//        var divisn = {};
//        divisn.oldId = election.id;
//        divisn.oldPoliticalPartyId = election.politicalPartyId;
//        divisn.personNameEn = election.personNameEng;
//        divisn.personNameBn = election.personNameBng;
//        divisn.fatherNameEn = election.fatherNameEng;
//        divisn.fatherNameBn = election.fatherNameBng;
//        divisn.genderBn = election.personGender;
//        divisn.NID = election.voteridNumber;
//
//
//        app.models.person.create(divisn, function(err, model) {
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


//////////////////////////////////data//////////////////
//{ id: 20445,
//  personNameBng: 'আনজুমান আরা বেগম',
//  personGender: 'পুরুষ',
//  personNameEng: 'Anjuman Ara Begum',
//  fatherNameBng: 'খন্দকার আব্দুর রব',
//  fatherNameEng: 'Khandakar Abdur Rob',
//  politicalPartyId: 0,
//  voteridNumber: '0' }
