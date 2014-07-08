

var fs = require('fs');

setInterval(

function(){
    
    
    
    //console.log("file");
    fn = "../data/"+Math.round(new Date().getTime()/1000) + ".txt";
    
    
    fs.writeFile(fn, 'Hello Node', function (err) {
  if (err) throw err;

  console.log(fn+' saved!');
});


    }


,3000)