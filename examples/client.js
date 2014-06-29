"use strict";


var kue = require('kue');
var uuid = require('uuid');
var jobs = kue.createQueue();

// client instance id
var ciid = uuid.v4();
/*
*
*/
function newJob(name) {
    //
    name = name || 'Default_Name';
    // queue name: callproc
    var job = jobs.create('callproc', {
        title:"new job",
        name: name,
        uuid:ciid,
        client:"example",
        method:"mt_query_time",
        params:  JSON.stringify({"p1":"a","p2":"b"})
    });
    //
    job
        .on('complete', function() {
            job.log("job id: %s, uuid:%s",  job.id, ciid);
            console.log(ciid);
            console.log('Job', job.id, 'with name', job.data.name, 'is done');
            /*
            job.remove(function(){
                console.log("removed");
                })
            */
        })
        .on('failed', function() {
            console.log(ciid, ',Job', job.id, 'with name', job.data.name, 'has failed');
        });
    //    
    job.save();
};

/*
*
*/

setInterval(function() {
    try{
        newJob('TimeQuery');
   }
    catch(err){
        console.log("error", err);
    }
    
}, 3000);
