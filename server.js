"use strict";

var kue = require('kue');

var nconf = require('nconf');
var winston = require('winston');

var logger = winston.loggers.add('server', {
    console: {
        //silent:true,
        level: 'debug',
        colorize: 'true',
        label: 'server'
    },
    file: {
        filename: 'logs/job.log',
        label: 'server',
        level: 'debug',
        json: false,
        maxsize: 10240000,
        maxFiles: 10
    }
});

nconf.file('config.json');

var jobs = kue.createQueue();


jobs.process('new job', function(job, done) {
    /* carry out all the job function here */

    logger.debug(job.created_at, job.data);

    done && done();
});

var conf = nconf.get("server")

logger.debug("port:", conf.port)

kue.app.listen(conf.port);


