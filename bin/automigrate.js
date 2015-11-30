var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.mongovotebdtest;
var oldds = app.datasources.votebdold;


oldds.discoverAndBuildModels('election_list', {schema: 'votebd_july2015'},
  function(err, models) {
    if (err) throw err;

    models.ElectionList.find(function(err, elections) {
      if (err) throw err;

      console.log('Found:', elections);


      var count = elections.length;
      elections.forEach(function(election) {
        app.models.Donor.create(election, function(err, model) {
          if (err) throw err;

          console.log('Created:', model);

          count--;
          if (count === 0)
            ds.disconnect();
        });
      });



      oldds.disconnect();
    });
  });



//ds.automigrate('Donor', function(err) {
//  if (err) throw err;
//
//  var elections = [
//    {
//      name: 'kamela'
//    },
//    {
//      name: 'tamela'
//    },
//    {
//      name: 'pamela'
//    }
//  ];
//  var count = elections.length;
//  elections.forEach(function(election) {
//    app.models.Donor.create(election, function(err, model) {
//      if (err) throw err;
//
//      console.log('Created:', model);
//
//      count--;
//      if (count === 0)
//        ds.disconnect();
//    });
//  });
//
//});


//{ id: 17,
//  electionNameEng: 'Dhaka City Corp (North)',
//  electionNameBng: 'ঢাকা সিটি করপোরেশন (দক্ষিণ)',
//  electionDetails: 'সিটি করপোরেশন নির্বাচন',
//  electionHistory: 'পূর্বে ঢাকা একটি সিটিতেই বিভক্ত ছিল',
//  electionType: 'CITY-CORP' },
