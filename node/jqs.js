// implement your job functions.
var myJobs = {
  add: function(a, b, callback) { callback(a + b); },
  succeed: function(arg, callback) { callback(); },
  fail: function(arg, callback) { callback(new Error('fail')); }
}

// setup a worker
var worker = require('coffee-resque').connect({
  host: "localhost",
  port: 6379
}).worker('*', myJobs)

// some global event listeners
//
// Triggered every time the Worker polls.
worker.on('poll', function(worker, queue) {
     console.log("pool:",Math.round(new Date().getTime()/1000))
    console.log("poll")
    
    })

// Triggered before a Job is attempted.
worker.on('job', function(worker, queue, job) {
     console.log("job:",Math.round(new Date().getTime()/1000))
    console.log("job")
    })

// Triggered every time a Job errors.
worker.on('error', function(err, worker, queue, job) {
    
    console.log("error")
    
    })

// Triggered on every successful Job run.
worker.on('success', function(worker, queue, job, result) {
     console.log("success:",Math.round(new Date().getTime()/1000))
    console.log("success")
    
    })

worker.start()