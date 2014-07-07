"use strict";

/*
* watch file
*/

// https://github.com/mikeal/watch

var watch = require('watch');

watch.createMonitor('./data', function(monitor) {
    //monitor.files['/home/mikeal/.zshrc'] // Stat object for my zshrc.
    monitor.on("created", function(f, stat) {
        // Handle new files
        //action
        console.log("new", f, stat);
    })
    monitor.on("changed", function(f, curr, prev) {
        // Handle file changes
        //action
        console.log("change", f, curr, prev);
    })
    monitor.on("removed", function(f, stat) {
        // Handle removed files
        //action
        console.log("remove", f, stat);
    })
    // monitor.stop(); // Stop watching
})
