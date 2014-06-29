"use strict";


var kue = require('kue');

var jobs = kue.createQueue();

function newJob(name) {
    name = name || 'Default_Name';
    // queue name: callproc
    var job = jobs.create('callproc', {
        name: name,
        method:"mt_query_time",
        params:  JSON.stringify({"p1":"a","p2":"b"})
    });
    job
        .on('complete', function() {
            console.log('Job', job.id, 'with name', job.data.name, 'is    done');
        })
        .on('failed', function() {
            console.log('Job', job.id, 'with name', job.data.name, 'has  failed');
        });
    job.save();
};


setInterval(function() {
    newJob('TimeQuery');
}, 5000);
