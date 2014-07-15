// etcd

Etcd = require('node-etcd');
etcd = new Etcd();
//etcd.set("keys", "value");
etcd.get("mi/tag", function(val, val2){
    
    console.log(val2.node.value)
    
    }
);