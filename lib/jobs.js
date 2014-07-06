"use strict";

var nconf = require('nconf');
var winston = require('winston');

var moment = require('moment');

var logger = winston.loggers.get('jobs');

nconf.file('config.json');

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

module.exports = {
    
    
    rpc:function(job, done){
    console.log("rpc");
    done && done();
}, 

callproc: function(job, done) {
    /* carry out all the job function here */
    
    var sql = 'SELECT NOW() AS "now"';
    
    client.query(sql, function(err, result) {
        if(err) {
          return console.error('error running query', err);
        }
    var val = result.rows[0].now;
    job.result = val;
    
    var msg = "job id: " + job.id + ', ' + val;
    
    console.log(msg);
    //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
  //  client.end();
  });

 var t = moment( parseInt(job.created_at)).format();
  
logger.debug(t, job.data);
  
//  logger.debug(job.created_at);
 //logger.debug( typeof(parseInt(job.created_at)));

    done && done();
}
    
    
}