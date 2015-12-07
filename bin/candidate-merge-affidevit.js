var path = require('path');
var app = require(path.resolve(__dirname, '../server/server'));
//var ds = app.datasources.mongovotebdtest;
var ds = app.datasources.votebdmongo;
var oldds = app.datasources.votebdold;


//SELECT current_election_id, COUNT(id) as totalEffidevit FROM person2profile WHERE profile_type='EFFIDEVIT' GROUP BY current_election_id
/////////////////////SAMPLE DATA///////////////////////////////////
//[ { current_election_id: null, totalEffidevit: 105 },
//  { current_election_id: 1, totalEffidevit: 43 },
//  { current_election_id: 5, totalEffidevit: 986 }]


////////////////////adding profile_id as oldAffidevitId to candidate model ////////////
//oldds.connector.query("SELECT current_election_id, COUNT(id) as totalEffidevit FROM person2profile WHERE profile_type='EFFIDEVIT' GROUP BY current_election_id limit 29, 1",'',function(err,rows,fields){
//  if(err){
//    console.log(err);
//    throw err;
//  }
//  //console.log("data length: ",rows);
//
//  console.log("current_election_id: ",rows[0].current_election_id," totalEffidevit: ",rows[0].totalEffidevit);
//
//  oldds.connector.query("SELECT p.profile_id, p.person_id, p.seat_id as pSeat_id, e.seat_id as cSeat_id, e.id as candidateId FROM person2profile p, election_candidates e WHERE p.profile_type='EFFIDEVIT' AND p.person_id=e.person_id AND p.current_election_id=e.current_election_id AND p.current_election_id = "+rows[0].current_election_id,'',function(err2,rows2,fields2){
//    if(err2){
//      console.log(err2);
//      throw err2;
//    }
//    console.log("data length (Affidevits): ",rows2.length);
//    //console.log("data length (Affidevits): ",rows2);
//
//    var iter = 1;
//    rows2.forEach(function(eachRow){
//      console.log("updating candidate: ",eachRow.candidateId, " ,profileId: ",eachRow.profile_id);
//      var candidateAffidevit = {};
//      candidateAffidevit.oldAffidevitId = eachRow.profile_id;
//
//      app.models.candidate.updateAll({oldPersonId: eachRow.person_id,oldId:eachRow.candidateId}, candidateAffidevit, function(errr, info) {
//        if(err)
//          throw errr;
//
//        console.log(info, iter++);
//      });
//    })
//
//    //oldds.disconnect();
//  });
//
//});


//////////////////Some necessary query//////////////////////////////////////

//SELECT  DISTINCT p.profile_id, p.person_id, p.seat_id as pSeat_id, e.seat_id as cSeat_id, e.id as candidateId   FROM person2profile p, election_candidates e WHERE p.profile_type="EFFIDEVIT" AND p.person_id=e.person_id AND p.current_election_id=e.current_election_id AND p.current_election_id = 5


//find count affidevit against current election
//SELECT current_election_id, COUNT(id) as totalEffidevit FROM `person2profile` WHERE `profile_type`="EFFIDEVIT" GROUP BY current_election_id

//finding duplicate election candidate for same current election and person
//SELECT p.profile_id, COUNT(p.profile_id) as total FROM person2profile p, election_candidates e WHERE p.profile_type="EFFIDEVIT" AND p.person_id=e.person_id AND p.current_election_id=e.current_election_id AND p.current_election_id = 5 GROUP BY p.profile_id

//pic one which have atleast 2
//SELECT * FROM `person2profile` WHERE `profile_id`=140 AND `profile_type`= "EFFIDEVIT"

//
//SELECT * FROM `election_candidates` WHERE `person_id`=631 AND `current_election_id`=5 ORDER BY `person_id` DESC


//{ profile_id: 1124,
//  person_id: 152,
//  pSeat_id: 34,
//  cSeat_id: '34',
//  candidateId: 147 },
