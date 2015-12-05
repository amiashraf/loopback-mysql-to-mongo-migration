var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
//var ds = app.datasources.mongovotebdtest;
var ds = app.datasources.votebdmongo;
var oldds = app.datasources.votebdold;


//Step 1: Showing table structure
//oldds.discoverSchema('political_party', {schema: 'votebd_july2015'}, function(err,schema) {
//  if (err) throw err;
//
//  var json = JSON.stringify(schema, null, '  ');
//  console.log(json);
//
//  oldds.disconnect();
//});

////Step 2: Showing data
//oldds.discoverAndBuildModels('political_party', {schema: 'votebd_july2015'},
//  function(err, models) {
//    if (err) throw err;
//
//    models.PoliticalParty.find(function(err, divisions) {
//      if (err) throw err;
//
//      console.log('Found:', divisions);
//
//      oldds.disconnect();
//    });
//  });


//Step 3: Retreiving data from mysql and push to mongo
oldds.discoverAndBuildModels('political_party', {schema: 'votebd_july2015'},
  function(err, models) {
    if (err) throw err;

    models.PoliticalParty.find(function(err, politicalParties) {
      if (err) throw err;

      //console.log('Found:', politicalParties);


      //importing to mongo
      var count = politicalParties.length;
      politicalParties.forEach(function(politicalParty) {

        var divisn = {};
        divisn.oldId = politicalParty.partyId;
        divisn.partyNameEn = politicalParty.partyFullName;
        divisn.partyNameBn = politicalParty.partyFullNameBng;
        divisn.estDate = politicalParty.estDate;
        divisn.chairpersonNameBn = politicalParty.chairpersonName;
        divisn.gsNameBn = politicalParty.gsName;
        divisn.partyConstitutionBn = politicalParty.partyConstitution;


        app.models.politicalParty.create(divisn, function(err, model) {
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

//////////////////TABLE SCHEMA//////////////////////////////////////



/////////////////////DATA///////////////////////////////////
//{ partyId: 1,
//  partyFullName: 'Bangladesg Awami Leage',
//  partyFullNameBng: 'বাংলাদেশ আওয়ামী লীগ',
//  estDate: Mon Nov 03 2008 06:00:00 GMT+0600 (BDT),
//  chairpersonName: 'শেখ হাসিনা',
//  gsName: 'সৈয়দ আশরাফুল ইসলাম',
//  partyConstitution: '                        ' },
