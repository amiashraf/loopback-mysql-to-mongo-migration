var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.mongovotebdtest;
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

//Step 2: Showing data
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
//        divisn.id = election.electionId;
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
//},
//  "properties": {
//  "id": {
//    "type": "Number",
//      "required": true,
//      "length": null,
//      "precision": 10,
//      "scale": 0,
//      "id": 1,
//      "mysql": {
//      "columnName": "id",
//        "dataType": "int",
//        "dataLength": null,
//        "dataPrecision": 10,
//        "dataScale": 0,
//        "nullable": "N"
//    }
//  },
//  "electionNameEng": {
//    "type": "String",
//      "required": true,
//      "length": 255,
//      "precision": null,
//      "scale": null,
//      "mysql": {
//      "columnName": "election_name_eng",
//        "dataType": "varchar",
//        "dataLength": 255,
//        "dataPrecision": null,
//        "dataScale": null,
//        "nullable": "N"
//    }
//  },
//  "electionNameBng": {
//    "type": "String",
//      "required": true,
//      "length": 255,
//      "precision": null,
//      "scale": null,
//      "mysql": {
//      "columnName": "election_name_bng",
//        "dataType": "varchar",
//        "dataLength": 255,
//        "dataPrecision": null,
//        "dataScale": null,
//        "nullable": "N"
//    }
//  },
//  "electionDetails": {
//    "type": "String",
//      "required": true,
//      "length": 65535,
//      "precision": null,
//      "scale": null,
//      "mysql": {
//      "columnName": "election_details",
//        "dataType": "text",
//        "dataLength": 65535,
//        "dataPrecision": null,
//        "dataScale": null,
//        "nullable": "N"
//    }
//  },
//  "electionHistory": {
//    "type": "String",
//      "required": true,
//      "length": 65535,
//      "precision": null,
//      "scale": null,
//      "mysql": {
//      "columnName": "election_history",
//        "dataType": "text",
//        "dataLength": 65535,
//        "dataPrecision": null,
//        "dataScale": null,
//        "nullable": "N"
//    }
//  },
//  "electionType": {
//    "type": "String",
//      "required": true,
//      "length": 16,
//      "precision": null,
//      "scale": null,
//      "mysql": {
//      "columnName": "election_type",
//        "dataType": "enum",
//        "dataLength": 16,
//        "dataPrecision": null,
//        "dataScale": null,
//        "nullable": "N"
//    }
//  }
//}
//}


//////////////////////////////////data//////////////////
//
//[ { id: 1,
//  electionNameEng: 'Members of parliament election',
//  electionNameBng: 'জাতীয় সংসদ নির্বাচন',
//  electionDetails: 'জাতীয় সংসদ নির্বাচন(National members of parliament election)',
//  electionHistory: '',
//  electionType: 'MP' },
//  { id: 2,
//    electionNameEng: 'By-Election',
//    electionNameBng: 'উপনির্বাচন ',
//    electionDetails: 'উপনির্বাচন(By-Election)',
//    electionHistory: '',
//    electionType: 'BY-ELECTION' },
//  { id: 3,
//    electionNameEng: 'City Corporation Election',
//    electionNameBng: 'সিটি কর্পোরেশন নির্বাচন ',
//    electionDetails: 'সিটি কর্পোরেশন নির্বাচন ',
//    electionHistory: 'সিটি কর্পোরেশন নির্বাচন ',
//    electionType: 'CITY-CORP' },
//  { id: 4,
//    electionNameEng: 'Pourashava Election',
//    electionNameBng: 'পৌরসভা নির্বাচন',
//    electionDetails: 'পৌরসভা নির্বাচন',
//    electionHistory: 'পৌরসভা নির্বাচন',
//    electionType: 'UNION' },
//  { id: 5,
//    electionNameEng: 'Upazila Election',
//    electionNameBng: 'উপজেলা পরিষদ নির্বাচন',
//    electionDetails: 'উপজেলা নির্বাচন',
//    electionHistory: 'উপজেলা নির্বাচন',
//    electionType: 'UPAZILLA' },
//  { id: 6,
//    electionNameEng: 'By Election (Ninth Parliament )',
//    electionNameBng: 'উপনির্বাচন (নবম জাতীয় সংসদ)',
//    electionDetails: 'উপনির্বাচন (নবম জাতীয় সংসদ)',
//    electionHistory: 'উপনির্বাচন (নবম জাতীয় সংসদ)',
//    electionType: 'MP' },
//  { id: 7,
//    electionNameEng: 'Upazila 1st phase',
//    electionNameBng: 'উপজেলা পরিষদ নির্বাচন ১ম পর্ব ২০১৪',
//    electionDetails: 'উপজেলা পরিষদ',
//    electionHistory: 'উপজেলা পরিষদ',
//    electionType: 'UPAZILLA' },
//  { id: 8,
//    electionNameEng: 'Upazila 2nd phase',
//    electionNameBng: 'উপজেলা পরিষদ নির্বাচন ২য় পর্ব ২০১৪',
//    electionDetails: 'উপজেলা পরিষদ',
//    electionHistory: 'উপজেলা পরিষদ',
//    electionType: 'UPAZILLA' },
//  { id: 9,
//    electionNameEng: 'Upazila 3rd phase',
//    electionNameBng: 'উপজেলা পরিষদ নির্বাচন ৩য় পর্ব',
//    electionDetails: 'উপজেলা পরিষদ',
//    electionHistory: 'উপজেলা পরিষদ',
//    electionType: 'UPAZILLA' },
//  { id: 10,
//    electionNameEng: 'Upazila Election 4th Phase',
//    electionNameBng: 'উপজেলা পরিষদ নির্বাচন ৪র্থ পর্ব',
//    electionDetails: 'উপজেলা নির্বাচন',
//    electionHistory: 'ইতিহাস',
//    electionType: 'UPAZILLA' },
//  { id: 11,
//    electionNameEng: 'Reserved Seat',
//    electionNameBng: 'সংরক্ষিত নারী আসন',
//    electionDetails: 'নারী আসন',
//    electionHistory: 'নারী আসন',
//    electionType: 'MP' },
//  { id: 12,
//    electionNameEng: 'Upazila Election 5th Phase',
//    electionNameBng: 'উপজেলা পরিষদ নির্বাচন ৫ম পর্ব',
//    electionDetails: 'Here is the election of 5th phase Upazila election',
//    electionHistory: 'Here is the election of 5th phase Upazila election',
//    electionType: 'UPAZILLA' },
//  { id: 13,
//    electionNameEng: 'U[azila Election 6th Phase',
//    electionNameBng: 'উপজেলা পরিষদ নির্বাচন ৬ষ্ঠ পর্ব',
//    electionDetails: 'upazila',
//    electionHistory: 'ইতিহাস',
//    electionType: 'UPAZILLA' },
//  { id: 14,
//    electionNameEng: 'Pospond Election',
//    electionNameBng: 'স্থগিত নির্বাচন',
//    electionDetails: 'যেকোন কারণে পরবর্তীতে অনুষ্ঠিত নির্বাচন',
//    electionHistory: 'যেকোন কারণে পরবর্তীতে অনুষ্ঠিত নির্বাচন',
//    electionType: 'UPAZILLA' },
//  { id: 15,
//    electionNameEng: 'Upazila Election 7th Phase',
//    electionNameBng: 'উপজেলা পরিষদ নির্বাচন ৭ম পর্ব',
//    electionDetails: 'সপ্তম',
//    electionHistory: 'নির্বাচন',
//    electionType: 'UPAZILLA' },
//  { id: 16,
//    electionNameEng: 'Dhaka City Corp (North)',
//    electionNameBng: 'ঢাকা সিটি করপোরেশন (উত্তর)',
//    electionDetails: '২টি সিটি নির্বাচনে বিভক্ত',
//    electionHistory: 'পূর্বে ঢাকা একটি সিটিতেই বিভক্ত ছিল',
//    electionType: 'CITY-CORP' },
//  { id: 17,
//    electionNameEng: 'Dhaka City Corp (North)',
//    electionNameBng: 'ঢাকা সিটি করপোরেশন (দক্ষিণ)',
//    electionDetails: 'সিটি করপোরেশন নির্বাচন',
//    electionHistory: 'পূর্বে ঢাকা একটি সিটিতেই বিভক্ত ছিল',
//    electionType: 'CITY-CORP' },
//  { id: 18,
//    electionNameEng: 'Chittagong City Corp (North)',
//    electionNameBng: 'চট্টগ্রাম সিটি করপোরেশন',
//    electionDetails: 'পূর্বে ঢাকা একটি সিটিতেই বিভক্ত ছিল',
//    electionHistory: 'পূর্বে ঢাকা একটি সিটিতেই বিভক্ত ছিল',
//    electionType: 'CITY-CORP' } ]
