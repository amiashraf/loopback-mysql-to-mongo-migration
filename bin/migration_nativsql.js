var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.mongovotebdtest;
var oldds = app.datasources.votebdold;

//var as = oldds.executeSql("select * from election_list");
//var as = oldds.executeSQL("select * from election_list")

oldds.connector.execute("select * from election_list","",[],function(err,data){
  console.log(data);
});

//console.log(as);


//distinct native query
//module.exports = function(Job) {
//  Job.distinctLocations = function(byId, cb){
//    var ds = Job.dataSource;
//    var sql = "SELECT DISTINCT location FROM Job";  //here you write your sql query.
//    ds.connector.execute(sql, byId, function(err, jobs) {
//      if (err) console.error(err);
//      cb(err, jobs);
//    });
//  };
//  Job.remoteMethod(
//    'distinctLocations',
//    {
//      http: {verb: 'get'},
//      description: "Get distinct locations for the jobs.",
//      returns: {arg: 'locations', type: 'object', root: true}
//    }
//  );
//};


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

//
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
//