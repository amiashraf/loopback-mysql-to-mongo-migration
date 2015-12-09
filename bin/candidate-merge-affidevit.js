var path = require('path');
var PHPUnserialize = require('php-unserialize');
var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.votebdmongo;
var oldds = app.datasources.votebdold;



function IsNumeric(input)
{
  return (input - 0) == input && (''+input).trim().length > 0;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////MERGIN PROFILE ID AS OLDAFFIDAVITID////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//SELECT current_election_id, COUNT(profile_id) FROM person2profile WHERE profile_type='EFFIDEVIT' and publish<>'deleted' group by current_election_id
/////////////////////SAMPLE DATA///////////////////////////////////
//[ { current_election_id: null, totalEffidevit: 105 },
//  { current_election_id: 1, totalEffidevit: 43 },
//  { current_election_id: 5, totalEffidevit: 986 }]




  ////oldds.connector.query("SELECT p.profile_id, p.person_id, p.seat_id as pSeat_id, e.seat_id as cSeat_id, e.id as candidateId FROM person2profile p, election_candidates e WHERE p.profile_type='EFFIDEVIT' AND p.person_id=e.person_id AND p.current_election_id=e.current_election_id AND p.current_election_id = "+rows[0].current_election_id,'',function(err2,rows2,fields2){
  //oldds.connector.query("SELECT * FROM person2profile WHERE profile_type='EFFIDEVIT' AND publish<>'deleted' AND current_election_id = 35",'',function(err2,rows2,fields2){
  //  if(err2){
  //    console.log(err2);
  //    throw err2;
  //  }
  //  console.log("data length (Affidevits): ",rows2.length);
  //  //console.log("data length (Affidevits): ",rows2);
  //
  //  var iter = 1;
  //  rows2.forEach(function(eachRow){
  //    console.log("updating personId:",eachRow.person_id, "profileId: ",eachRow.profile_id);
  //    var candidateAffidevit = {};
  //    candidateAffidevit.oldAffidevitId = eachRow.profile_id;
  //    candidateAffidevit.publishStatusAF = eachRow.publish;
  //
  //    var searchCriterion={oldPersonId: eachRow.person_id,oldCurrentElectionId:eachRow.current_election_id};
  //    console.log(searchCriterion);
  //    app.models.candidate.updateAll(searchCriterion, candidateAffidevit, function(errr, info) {
  //      if(errr)
  //        throw errr;
  //
  //      console.log(info, iter++);
  //    });
  //  });
  //
  //  //oldds.disconnect();
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
//var ds = app.datasources.mongovotebdtest;


/////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////MERGE AFFIDEVIT /////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//oldds.connector.query("SELECT * FROM effidevit limit 20000, 1000",'',function(err,rows,fields) {
////oldds.connector.query("SELECT * FROM effidevit where id=199 and person_id=708",'',function(err,rows,fields) {
//  if(err){
//    console.log(err);
//    throw err;
//  }
//
//  console.log(rows.length);
//  //console.log(rows);
//
//  var iter=1;
//  if(rows.length){
//    rows.forEach(function(eachRow){
//
//      console.log("updating person: ",eachRow.person_id, " ,oldAffidavitId: ",eachRow.id);
//      var candidateAffidevit = {};
//      candidateAffidevit.candidateNameBnAF = eachRow.candidate_name;
//      candidateAffidevit.fatherHusbandNameBnAF = eachRow.father_husband_name;
//      candidateAffidevit.motherNameBnAF = eachRow.mother_name;
//      candidateAffidevit.addressBnAF = eachRow.address;
//      candidateAffidevit.seatInfoBnAF = eachRow.seat_info;
//      candidateAffidevit.oldCandidatePostBnAF = eachRow.candidate_post;
//      candidateAffidevit.highestDegreeBnAF = eachRow.highest_degree;
//      candidateAffidevit.degreeTypeBnAF = eachRow.criminal_court_status;
//      candidateAffidevit.candidateProfessionBusinessBnAF = eachRow.candidate_profession_business;
//      candidateAffidevit.professionTypeBnAF = eachRow.profession_type;
//
//      candidateAffidevit.pastCriminalCourtStatusBnAF = eachRow.past_criminal_court_status;
//      if(eachRow.past_criminal_court_status  == "হ্যাঁ")
//        candidateAffidevit.pastCriminalCourtStatusAF = 1; //check ans save 0/1
//      else
//        candidateAffidevit.pastCriminalCourtStatusAF = 0; //check ans save 0/1
//
//      candidateAffidevit.criminalCourtStatusBnAF = eachRow.criminal_court_status;
//      if(eachRow.criminal_court_status  == "হ্যাঁ")
//        candidateAffidevit.criminalCourtStatusAF = 1; //check ans save 0/1
//      else
//        candidateAffidevit.criminalCourtStatusAF = 0; //check ans save 0/1
//
//      candidateAffidevit.liabilitiesDetailsBnAF = eachRow.liabilities_details;
//      candidateAffidevit.liabilitiesAmountAF = eachRow.liabilities_amount;
//
//      if(eachRow.is_past_mp)
//        candidateAffidevit.isPastMpAF = 1; //check and save 0/1
//      else
//        candidateAffidevit.isPastMpAF = 0; //check and save 0/1
//
//      if(eachRow.commitment_before_mp)
//      candidateAffidevit.commitmentBeforeMpAF = PHPUnserialize.unserialize(eachRow.commitment_before_mp); //need to save as array
//
//      if(eachRow.achievement_while_mp)
//      candidateAffidevit.achievementWhileMpAF = PHPUnserialize.unserialize(eachRow.achievement_while_mp); //need to save as array
//
//      if(eachRow.no_loans)
//        candidateAffidevit.noLoansAF = 1; //check and save as 0/1
//      else
//        candidateAffidevit.noLoansAF = 0; //check and save as 0/1
//
//      if(eachRow.submit_date && (new Date(eachRow.submit_date)!="Invalid Date")){
//          candidateAffidevit.submitDateAF =  eachRow.submit_date;
//          candidateAffidevit.submitDateTimestampAF = eachRow.submit_date.getTime(); //save as timestamp
//      }
//
//
//      candidateAffidevit.identifierNameBnAF = eachRow.identifier_name;
//      candidateAffidevit.identifierAddressBnAF = eachRow.identifier_address;
//      candidateAffidevit.ageAtSubmissionDateAF = eachRow.age_at_submission_date;
//      candidateAffidevit.signatureNotariPublicAF = eachRow.signature_notari_public;
//
//      if(eachRow.last_date && (new Date(eachRow.last_date)!="Invalid Date")){
//        candidateAffidevit.lastDateAF = eachRow.last_date;
//      }
//
//      if(eachRow.date && (new Date(eachRow.date)!="Invalid Date")){
//        candidateAffidevit.dateAF = eachRow.date;
//      }
//
//      if(eachRow.updated_at  && (new Date(eachRow.updated_at)!="Invalid Date")){
//        candidateAffidevit.createdAF = eachRow.updated_at;
//        candidateAffidevit.modifiedAF = eachRow.updated_at;
//      }
//
//      candidateAffidevit.createdByBnAF = eachRow.updated_by;
//      candidateAffidevit.modifiedByBnAF = eachRow.updated_by;
//
//      //console.log(candidateAffidevit);
//
//      app.models.candidate.updateAll({oldAffidevitId: eachRow.id}, candidateAffidevit, function(errr, info) {
//        if(errr)
//          throw errr;
//
//        console.log(info, iter++);
//      });
//
//    })
//  }
//
//
//  //oldds.disconnect();
//});


//SELECT current_election_id, publish, COUNT(id) as totalEffidevit FROM person2profile WHERE profile_type='EFFIDEVIT' GROUP BY current_election_id, publish



/////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////MERGE AFFIDEVIT COURT SECTIION //////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//oldds.connector.query("SELECT profile_id, COUNT(id) as cnt FROM effidevit_court_section group by profile_id limit 6450, 150",'',function(err,rows,fields) {
//  if(err){
//    console.log(err);
//    throw err;
//  }
//
//  console.log(rows.length);
//  //console.log(rows);
//
//  var iter=1;
//  if(rows.length){
//    rows.forEach(function(eachRow){
//      console.log("working with profile_id: ",eachRow.profile_id," length: ",eachRow.cnt);
//      oldds.connector.query("SELECT * FROM effidevit_court_section where profile_id="+eachRow.profile_id,'',function(err22,rows2,fields) {
//
//        if(err22){
//          console.log("-------------------",err22);
//          throw err22;
//        }
//
//        var profilesLen = rows2.length;
//
//
//        if(profilesLen){
//          var present = [];
//          var past = [];
//          for(var i=0;i<profilesLen;i++){
//            var lawCourt = {whichLaw:rows2[i].which_law, whichCourt:rows2[i].which_court, courtFileNo:rows2[i].court_file_no, currentStatusResult:rows2[i].current_status_result};
//            if(rows2[i].status == "present"){
//              present.push(lawCourt);
//            }
//            if(rows2[i].status == "past"){
//              past.push(lawCourt);
//            }
//          }
//
//          var candidateAffidevit={};
//          candidateAffidevit.lawPresentCountAF = present.length;
//          if(candidateAffidevit.lawPresentCountAF) {
//            candidateAffidevit.lawPresentAF = present;
//          }
//          candidateAffidevit.lawPastCountAF = past.length;
//          if(candidateAffidevit.lawPastCountAF )
//            candidateAffidevit.lawPastAF = past;
//          //console.log(candidateAffidevit);
//
//
//          app.models.candidate.updateAll({oldAffidevitId: eachRow.profile_id}, candidateAffidevit, function(errr, info) {
//            if(errr)
//              throw errr;
//
//            console.log(info, iter++);
//          });
//        }
//      });
//    })
//  }
//
//
//  //oldds.disconnect();
//});

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////MERGE AFFIDEVIT Loan section //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//oldds.connector.query("SELECT profile_id, COUNT(id) as cnt FROM `effidevit_loans_section` group by profile_id limit 2950, 150",'',function(err,rows,fields) {
//  if(err){
//    console.log(err);
//    throw err;
//  }
//
//  console.log(rows.length);
//  //console.log(rows);
//
//  var iter=1;
//  if(rows.length){
//    rows.forEach(function(eachRow){
//      console.log("working with profile_id: ",eachRow.profile_id," length: ",eachRow.cnt);
//      oldds.connector.query("SELECT * FROM `effidevit_loans_section` where profile_id="+eachRow.profile_id,'',function(err22,rows2,fields) {
//
//        if(err22){
//          console.log("-------------------",err22);
//          throw err22;
//        }
//
//        var profilesLen = rows2.length;
//
//
//        if(profilesLen){
//          var loanAF = [];
//          var totalLoan=0;
//          for(var i=0;i<profilesLen;i++){
//            loanAF.push({loanType:rows2[i].loan_type, bankOrganization:rows2[i].bank_organization, loanAmount:rows2[i].loan_amount, debitedLoanAmount:rows2[i].debited_loan_amount, extendedLastDate:rows2[i].extended_last_date});
//            if(IsNumeric(rows2[i].loan_amount))
//              totalLoan+= Number(rows2[i].loan_amount);
//          }
//
//          var candidateAffidevit={};
//          candidateAffidevit.totalLoanAF = totalLoan;
//          candidateAffidevit.loanAF = loanAF;
//
//          //console.log(candidateAffidevit);
//
//          app.models.candidate.updateAll({oldAffidevitId: eachRow.profile_id}, candidateAffidevit, function(errr, info) {
//            if(errr)
//              throw errr;
//
//            console.log(info, iter++);
//          });
//        }
//      });
//    })
//  }
//
//
//  //oldds.disconnect();
//});


/////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////MERGE AFFIDEVIT income section //////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

oldds.connector.query("SELECT profile_id, COUNT(id) as cnt FROM `effidevit_loans_section` group by profile_id limit 2950, 150",'',function(err,rows,fields) {
  if(err){
    console.log(err);
    throw err;
  }

  console.log(rows.length);
  //console.log(rows);

  var iter=1;
  if(rows.length){
    rows.forEach(function(eachRow){
      console.log("working with profile_id: ",eachRow.profile_id," length: ",eachRow.cnt);
      oldds.connector.query("SELECT * FROM `effidevit_loans_section` where profile_id="+eachRow.profile_id,'',function(err22,rows2,fields) {

        if(err22){
          console.log("-------------------",err22);
          throw err22;
        }

        var profilesLen = rows2.length;


        if(profilesLen){
          var loanAF = [];
          var totalLoan=0;
          for(var i=0;i<profilesLen;i++){
            loanAF.push({loanType:rows2[i].loan_type, bankOrganization:rows2[i].bank_organization, loanAmount:rows2[i].loan_amount, debitedLoanAmount:rows2[i].debited_loan_amount, extendedLastDate:rows2[i].extended_last_date});
            if(IsNumeric(rows2[i].loan_amount))
              totalLoan+= Number(rows2[i].loan_amount);
          }

          var candidateAffidevit={};
          candidateAffidevit.totalLoanAF = totalLoan;
          candidateAffidevit.loanAF = loanAF;

          //console.log(candidateAffidevit);

          app.models.candidate.updateAll({oldAffidevitId: eachRow.profile_id}, candidateAffidevit, function(errr, info) {
            if(errr)
              throw errr;

            console.log(info, iter++);
          });
        }
      });
    })
  }


  //oldds.disconnect();
});





//{ lawPresentAF:
//  [ { whichLaw: '১৬৮/৪০৯/১০৯ দঃ বিঃ এবং ১৯৪৭ সালের দুর্নীতি প্রতিরোধ আইঃ ৫(২) ধারা',
//    whichCourt: 'খুলনা বিভাগীয় স্পেশাল দায়রা জজ আদালত',
//    courtFileNo: 'স্পেশাল-১৬/০৪',
//    currentStatusResult: 'বিচারাধীন' },
//    { whichLaw: '১৬৮/৪০৯/১০৯ দঃ বিঃ এবং ১৯৪৭ সালের দুর্নীতি প্রতিরোধ আইঃ ৫(২) ধারা',
//      whichCourt: 'খুলনা বিভাগীয় স্পেশাল দায়রা জজ আদালত',
//      courtFileNo: 'স্পেশাল-১৫/০৪',
//      currentStatusResult: 'বিচারাধীন' },
//    { whichLaw: '১৬৮/৪০৯/১০৯ দঃ বিঃ এবং ১৯৪৭ সালের দুর্নীতি প্রতিরোধ আইঃ ৫(২) ধারা',
//      whichCourt: 'খুলনা বিভাগীয় স্পেশাল দায়রা জজ আদালত',
//      courtFileNo: 'স্পেশাল-১৪/০৪',
//      currentStatusResult: 'বিচারাধীন' } ],
//    lawPastAF:
//  [ { whichLaw: '৩০২/৩৪ দঃ বিঃ',
//    whichCourt: 'সাবেক নালিশী আদালত ক \'অঞ্চল\' খুলনা',
//    courtFileNo: 'রূপসার থানার মামলা নং-২২ জি আর ১১/০২',
//    currentStatusResult: '' },
//    { whichLaw: '৩০২/১২০(খ)/৩৪ দঃ বিঃ',
//      whichCourt: 'সাবেক নালিশী আদালত ‌\'খ\' অঞ্চল, খুলনা',
//      courtFileNo: 'বটিয়াঘাটা থানার মামলা নং-১৫ জি আর ৬০/০২',
//      currentStatusResult: '' },
//    { whichLaw: '৩০২/৩৪ দঃ বিঃ',
//      whichCourt: 'মুখ্য মহানগর হাকিম আদালত, খুলনা',
//      courtFileNo: 'খুলনা থানার মামলা নং-৩৪ জি আর -৩৫/০২',
//      currentStatusResult: '' } ] }
