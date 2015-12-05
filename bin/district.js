var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.votebdmongo;
var oldds = app.datasources.votebdold;


////Step 1: Showing table structure
//oldds.discoverSchema('district_list', {schema: 'votebd_july2015'}, function(err,schema) {
//  if (err) throw err;
//
//  var json = JSON.stringify(schema, null, '  ');
//  console.log(json);
//
//  oldds.disconnect();
//});

////Step 2: Showing data
//oldds.discoverAndBuildModels('district_list', {schema: 'votebd_july2015'},
//  function(err, models) {
//    if (err) throw err;
//
//    models.DistrictList.find(function(err, districts) {
//      if (err) throw err;
//
//      console.log('Found:', districts);
//
//      oldds.disconnect();
//    });
//  });


////Step 3: Retreiving data from mysql and push to mongo
//oldds.discoverAndBuildModels('district_list', {schema: 'votebd_july2015'},
//  function(err, models) {
//    if (err) throw err;
//
//    models.DistrictList.find(function(err, districts) {
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
//        distr.oldId = district.slNo;
//        distr.nameEn = district.districtName;
//        distr.nameBn = district.districtNameBng;
//        distr.infoBn = district.districtInfo;
//        distr.oldDivisionId = district.divisionId;
//        distr.districtCode = district.districtCode;
//
//
//        app.models.district.create(distr, function(err, model) {
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
//  "properties": {
//  "slNo": {
//    "type": "Number",
//      "required": true,
//      "length": null,
//      "precision": 10,
//      "scale": 0,
//      "id": 1,
//      "mysql": {
//      "columnName": "SL_NO",
//        "dataType": "int",
//        "dataLength": null,
//        "dataPrecision": 10,
//        "dataScale": 0,
//        "nullable": "N"
//    }
//  },
//  "districtCode": {
//    "type": "String",
//      "required": true,
//      "length": 12,
//      "precision": null,
//      "scale": null,
//      "mysql": {
//      "columnName": "DISTRICT_CODE",
//        "dataType": "varchar",
//        "dataLength": 12,
//        "dataPrecision": null,
//        "dataScale": null,
//        "nullable": "N"
//    }
//  },
//  "divisionId": {
//    "type": "String",
//      "required": true,
//      "length": 4,
//      "precision": null,
//      "scale": null,
//      "mysql": {
//      "columnName": "DIVISION_ID",
//        "dataType": "varchar",
//        "dataLength": 4,
//        "dataPrecision": null,
//        "dataScale": null,
//        "nullable": "N"
//    }
//  },
//  "districtName": {
//    "type": "String",
//      "required": true,
//      "length": 30,
//      "precision": null,
//      "scale": null,
//      "mysql": {
//      "columnName": "DISTRICT_NAME",
//        "dataType": "varchar",
//        "dataLength": 30,
//        "dataPrecision": null,
//        "dataScale": null,
//        "nullable": "N"
//    }
//  },
//  "totalPeople": {
//    "type": "Number",
//      "required": true,
//      "length": null,
//      "precision": 10,
//      "scale": 0,
//      "mysql": {
//      "columnName": "TOTAL_PEOPLE",
//        "dataType": "int",
//        "dataLength": null,
//        "dataPrecision": 10,
//        "dataScale": 0,
//        "nullable": "N"
//    }
//  },
//  "totalVoterMale": {
//    "type": "Number",
//      "required": true,
//      "length": null,
//      "precision": 10,
//      "scale": 0,
//      "mysql": {
//      "columnName": "TOTAL_VOTER_MALE",
//        "dataType": "int",
//        "dataLength": null,
//        "dataPrecision": 10,
//        "dataScale": 0,
//        "nullable": "N"
//    }
//  },
//  "totalVoterFemale": {
//    "type": "Number",
//      "required": true,
//      "length": null,
//      "precision": 10,
//      "scale": 0,
//      "mysql": {
//      "columnName": "TOTAL_VOTER_FEMALE",
//        "dataType": "int",
//        "dataLength": null,
//        "dataPrecision": 10,
//        "dataScale": 0,
//        "nullable": "N"
//    }
//  },
//  "districtNameBng": {
//    "type": "String",
//      "required": true,
//      "length": 255,
//      "precision": null,
//      "scale": null,
//      "mysql": {
//      "columnName": "DISTRICT_NAME_BNG",
//        "dataType": "varchar",
//        "dataLength": 255,
//        "dataPrecision": null,
//        "dataScale": null,
//        "nullable": "N"
//    }
//  },
//  "districtInfo": {
//    "type": "String",
//      "required": true,
//      "length": 4294967295,
//      "precision": null,
//      "scale": null,
//      "mysql": {
//      "columnName": "DISTRICT_INFO",
//        "dataType": "longtext",
//        "dataLength": 4294967295,
//        "dataPrecision": null,
//        "dataScale": null,
//        "nullable": "N"
//    }
//  }
//}
//}
//




/////////////////////DATA///////////////////////////////////
//[ { slNo: 1,
//  districtCode: '5000',
//  divisionId: '7',
//  districtName: 'Panchagarh',
//  totalPeople: 0,
//  totalVoterMale: 0,
//  totalVoterFemale: 0,
//  districtNameBng: 'পঞ্চগড়',
//  districtInfo: 'পঞ্চগড় জেলার উত্তরে ভারতের পশ্চিমবঙ্গ, দক্ষিণে ঠাকুরগাঁও ও দিনাজপুর জেলা, পূর্বে নীলফামারী জেলা এবং পশ্চিমে ভারতের পশ্চিমবঙ্গ অবস্থিত।' },
//  { slNo: 2,
//    districtCode: '5100',
//    divisionId: '7',
//    districtName: 'Thakurgaon',
//    totalPeople: 0,
//    totalVoterMale: 0,
//    totalVoterFemale: 0,
//    districtNameBng: 'ঠাকুরগাঁও',
//    districtInfo: 'ঠাকুরগাঁও জেলার উত্তরে পঞ্চগড় জেলা, দক্ষিণে দিনাজপুর জেলা ও ভারতের পশ্চিমবঙ্গ, পূর্বে দিনাজপুর জেলা এবং পশ্চিমে ভারতের পশ্চিমবঙ্গ অবস্থিত।' },
//  { slNo: 3,
//    districtCode: '2500',
//    divisionId: '7',
//    districtName: 'Dinajpur',
//    totalPeople: 0,
//    totalVoterMale: 0,
//    totalVoterFemale: 0,
//    districtNameBng: 'দিনাজপুর',
//    districtInfo: '-' }
//  ]
