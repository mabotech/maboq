"use strict";

var pg = require('pg');
var con_string = "postgres://mabotech:mabouser@localhost:6432/maboss";
var client = new pg.Client(con_string);

client.connect();

client.query('LISTEN job');

client.query('LISTEN q');

/*
NOTIFY job, 'xyz';

NOTIFY q, 'queue';
*/
client.on('notification', function(msg) {
    console.log('msg:', msg);
    /*
    
msg: { name: 'notification',
  length: 16,
  processId: 25188,
  channel: 'job',
  payload: 'xyz' }
msg: { name: 'notification',
  length: 16,
  processId: 25188,
  channel: 'q',
  payload: 'queue' }
    
    */
});