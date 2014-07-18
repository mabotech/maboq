var redis = require("redis");
var client = redis.createClient();


client.lpush('c1','test:value');     //将数据压入到list usr中
/*client.lpush('like','test1:value1');
client.lpush('dislike','test2:value2');
*/
client.publish("c1", 'new');
//client.publish("like", 'test');
//client.publish("dislike", 'test2');

console.log("done")