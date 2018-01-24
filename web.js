var HBase = require('node-hbase-thrift2')

var config = {
    hosts: ['host1','host2'],
    port: 9090,
    timeout:1000
};

var hbaseClient = HBase.createClient(config);
