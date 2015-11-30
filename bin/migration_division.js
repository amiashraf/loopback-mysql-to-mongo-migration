var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.mongovotebdtest;
var oldds = app.datasources.votebdold;


//showing table structure
//oldds.discoverSchema('division_list', {schema: 'votebd_july2015'}, function(err,schema) {
//  if (err) throw err;
//
//  var json = JSON.stringify(schema, null, '  ');
//  console.log(json);
//
//  oldds.disconnect();
//});

//showing data
//oldds.discoverAndBuildModels('division_list', {schema: 'votebd_july2015'},
//  function(err, models) {
//    if (err) throw err;
//
//    models.DivisionList.find(function(err, elections) {
//      if (err) throw err;
//
//      console.log('Found:', elections);
//
//      oldds.disconnect();
//    });
//  });




//retreiving data from mysql and push to mongo
//oldds.discoverAndBuildModels('division_list', {schema: 'votebd_july2015'},
//  function(err, models) {
//    if (err) throw err;
//
//    models.DivisionList.find(function(err, elections) {
//      if (err) throw err;
//
//      console.log('Found:', elections);
//
//
//      importing to mongo
//      var count = elections.length;
//      elections.forEach(function(election) {
//        app.models.ElectionList.create(election, function(err, model) {
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

//////////////////TABLE SCHEMA//////////////////////////////////////
//division_list scheam
//      {
//        "name": "DivisionList",
//        "options": {
//        "idInjection": false,
//          "mysql": {
//          "schema": "votebd_july2015",
//            "table": "division_list"
//        }
//      },
//        "properties": {
//        "divisionId": {
//          "type": "Number",
//            "required": true,
//            "length": null,
//            "precision": 10,
//            "scale": 0,
//            "id": 1,
//            "mysql": {
//            "columnName": "division_id",
//              "dataType": "int",
//              "dataLength": null,
//              "dataPrecision": 10,
//              "dataScale": 0,
//              "nullable": "N"
//          }
//        },
//        "divisionName": {
//          "type": "String",
//            "required": true,
//            "length": 12,
//            "precision": null,
//            "scale": null,
//            "mysql": {
//            "columnName": "division_name",
//              "dataType": "varchar",
//              "dataLength": 12,
//              "dataPrecision": null,
//              "dataScale": null,
//              "nullable": "N"
//          }
//        },
//        "divisionNameBng": {
//          "type": "String",
//            "required": true,
//            "length": 60,
//            "precision": null,
//            "scale": null,
//            "mysql": {
//            "columnName": "division_name_bng",
//              "dataType": "varchar",
//              "dataLength": 60,
//              "dataPrecision": null,
//              "dataScale": null,
//              "nullable": "N"
//          }
//        },
//        "divisionInfo": {
//          "type": "String",
//            "required": true,
//            "length": 255,
//            "precision": null,
//            "scale": null,
//            "mysql": {
//            "columnName": "division_info",
//              "dataType": "varchar",
//              "dataLength": 255,
//              "dataPrecision": null,
//              "dataScale": null,
//              "nullable": "N"
//          }
//        }
//      }


/////////////////////DATA///////////////////////////////////
//[ { divisionId: 1,
//  divisionName: 'Dhaka',
//  divisionNameBng: 'ঢাকা',
//  divisionInfo: 'বাংলাদেশের রাজধানী' },
//  { divisionId: 2,
//    divisionName: 'Chittagong',
//    divisionNameBng: 'চট্টগ্রাম',
//    divisionInfo: 'বাংলাদেশের আর্ন্তজাতিক সমুদ্র বন্দর ' },
//  { divisionId: 3,
//    divisionName: 'Sylhet',
//    divisionNameBng: 'সিলেট',
//    divisionInfo: 'পাহাড়, চা বাগান সমৃদ্ধ বিভাগ ' },
//  { divisionId: 4,
//    divisionName: 'Khulna',
//    divisionNameBng: 'খুলনা ',
//    divisionInfo: 'সুন্দরবন, উপকূলীয় বণাণ্চল ' },
//  { divisionId: 5,
//    divisionName: 'Rajshahi',
//    divisionNameBng: 'রাজশাহী',
//    divisionInfo: 'উত্তরাঞ্চলের শিক্ষা নগরী ' },
//  { divisionId: 6,
//    divisionName: 'Barisal ',
//    divisionNameBng: 'বরিশাল ',
//    divisionInfo: 'হাওড়, বাওড় আর জলাশয় ' },
//  { divisionId: 7,
//    divisionName: 'Rongpur',
//    divisionNameBng: 'রংপুর',
//    divisionInfo: 'রংএটি বাংলাদেশের উত্তরাঞ্চলের ৮টি জেলা নিয়ে গঠিত। ২০১০ খ্রিষ্টাব্দের ২৫ জানুয়ারি তারিখে দেশের সপ্তম বিভাগ হিসেবে ঘোষিত হয়।' } ]
