

var schedule = require('node-schedule');
var moment = require('moment');


// add
// remove
// start
// cancel / stop

console.log("start", moment().format());

var j = schedule.scheduleJob('* * * * *', function(){
    //print msg each minute [xx:00].
    console.log(moment().format(), 'The answer to life, the universe, and everything!');
});

console.log(j);

setInterval(function() {
j.cancel();
    console.log("canceled")
}, 130000);

// run every second
　　var rule = new schedule.RecurrenceRule();

　　var times = [];

　　for(var i=1; i<60; i++){

　　　　times.push(i);

　　}

　　rule.second = times;

　　var c=0;
　　var sj= schedule.scheduleJob(rule, function(){
     　　 c++;
      　　console.log(c);
　　});

 