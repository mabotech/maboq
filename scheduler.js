

var schedule = require('node-schedule');
var moment = require('moment');

var j = schedule.scheduleJob('* * * * *', function(){
    //print msg each minute [xx:00].
    console.log(moment().format(), 'The answer to life, the universe, and everything!');
});

