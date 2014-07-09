var resque = require('coffee-resque').connect({
  host: "localhost",
  port: 6379
});
resque.enqueue('math', 'add', [1,2], function(err, remainingJobs) {
    
    console.log(Math.round(new Date().getTime()/1000))
  console.log('New job queued. Remaining jobs in queue: ' + remainingJobs);
});