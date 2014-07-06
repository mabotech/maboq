"use strict";

var winston = require('winston');

var log = winston.loggers.get('utils');


module.exports = {
    
    
    msgParse : function(msg){
    var payload;
    
       try{    
        payload = JSON.parse(  msg.payload );
    }
    catch(err){
        log.error(err);
    }
    
    if(payload.type != undefined && payload.name != undefined && payload.params != undefined){
        
        var type = payload.type;
        
        var name = payload.name;
        
        var params = payload.params; 
        
        log.debug(type, name, params);
        
        return [type, name, params];
        
}else{
    
    return [null, null, null];
    
    }
}
    
}