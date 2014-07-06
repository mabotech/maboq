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
/*
var pg = require('pg'); 
//or native libpq bindings
//var pg = require('pg').native

var con_string =  nconf.get("db").con_string

var client = new pg.Client(con_string);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }

});
*/

var jobs = kue.createQueue();

//js lib as config?
var action = require("./lib/jobs");


console.log(action);

for(var name in action){
    
    logger.debug(name);
    // make job process 
    jobs.process(name, action[name]);    
    
}

var actions = {"rpc":action.rpc, "callproc":action.callproc};

//jobs.process('rpc', action.rpc);
//jobs.process('callproc',action.callproc);

for(var name in actions){
  //  logger.debug("action:", name);
   // jobs.process(name, actions[name]);    
    
}

var server_conf = nconf.get("server")

logger.debug("port:", server_conf.port)

kue.app.listen(server_conf.port);


