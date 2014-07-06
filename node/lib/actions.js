"use strict";


var winston = require('winston');

var log = winston.loggers.get('action');

module.exports = {
    
    
    /*
* create job in kue
*/
 createJob : function(name, params){
    log.debug("create job ",  name, params)
    
},

sendMail : function(params){
    log.debug("send mail ", params)
}
    
    
    
    
    
    
    }