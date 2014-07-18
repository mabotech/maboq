var redis = require("redis");
//var fs = require("fs");

var client1 = redis.createClient();
var client2 = redis.createClient();

var len = 0;
client1.on("message", function (channel, message) {
	
    
    getValue(channel);

	
    	console.log("::"+channel + ": " + message);
    /*
	fs.appendFile("./log.txt",message+'\n',function(e){ //将数据追加到日志文件中
    		if(e) throw e;
    	});
	*/
});

//var myDate = new Date();  //获取当前时间
//console.log(myDate);

client1.subscribe("c1");
//client1.subscribe("like");
//client1.subscribe("dislike");

function getValue(channel)
{
	client2.llen(channel,function(err,reply){ //回调函数形式获取结果，可以使用redis.print来查看结果
		console.log(reply);
		var client = redis.createClient();
		for(var i=0;i<reply;i++)
		{
			var v = client.rpop(channel,function(err,reply){
                if(reply == null){
                   // break;
                    return;
                    }
				console.log("v:" + reply);
			});
		}
	});
}
