


function get_timestamp(){
    
    return new Date().getTime();
    
    }
    

//
setInterval(
    
    function(){
        
        var vt = get_timestamp();
        console.log(vt)
        
        }, 
    1000  //interval
);