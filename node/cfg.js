

Etcd = require('node-etcd');
etcd = new Etcd();
etcd.set("key", "value");
etcd.get("key", console.log);