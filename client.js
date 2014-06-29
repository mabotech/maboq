"use strict";


var kue = require('kue');

var jobs = kue.createQueue();

function newJob(name) {
    name = name || 'Default_Name';
    var job = jobs.create('new job', {
        name: name,
        id: 101
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
    newJob('Send_Email');
}, 5000);
