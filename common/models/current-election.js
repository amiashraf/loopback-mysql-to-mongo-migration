var Promise = require('bluebird');
module.exports = function(CurrentElection) {
  CurrentElection.getCurrentElectionsWithEelection = function(cb) {
    //var currentDate = new Date();
    //var currentHour = currentDate.getHours();
    //var OPEN_HOUR = 6;
    //var CLOSE_HOUR = 20;
    //console.log('Current hour is ' + currentHour);
    //var response;
    //if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
    //  response = 'We are open for business.';
    //} else {
    //  response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
    //}
    //cb(null, response);
    var response = [];
    CurrentElection.find({include:'election'}, function(err, currentElections) {
      response = currentElections;
      console.log(response);
      //currentElections.forEach(currentEllecton);
      //var promises = [];
      //for(var currentElection in currentElections){
      //  //promises.push(CurrentElection.election(currentElection));
      //  CurrentElection.election(console.log);
      //}

      cb(null, response);
    });
      //.election(function(err, election){
      //console.log(election);
    //});

    //Promise.all(promises).then(function (datas) {
    //  log('Creating fake data done!');
    //  log(datas);
    //}).catch();

    //var response = CurrentElection.find({
    //  filter: {
    //    order: 'created DESC',
    //    include: [
    //      'electionCandidatePosts'
    //    ]
    //  }
    //});


  };
  CurrentElection.remoteMethod(
    'getCurrentElectionsWithEelection',
    {
      http: {path: '/getCurrentElectionsWithEelection', verb: 'get'},
      returns: {arg: 'data', type: 'Array'}
    }
  );
};
