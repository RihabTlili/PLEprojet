const express = require('express')
const app = express()
const HBaseclient = require('hbase-client');
const hbase = require('hbase');
const request = require('request');
/*const client = HBase.create({
  zookeeperHosts: [
    '10.0.8.3:16010' // only local zookeeper
  ],
  zookeeperRoot: '/hbase-0.94.16',
});*/

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var client = HBaseclient({
   zookeeperHosts: ['beetlejuice:16010'],
   zookeeperRoot: '/hbase',
   rootRegionZKPath: '/meta-region-server',
   rpcTimeout: 30000,
   pingTimeout: 30000,
   callTimeout: 5000
 });
/*var assert = require('assert');
var hbase = require('hbase');

hbase({ host: '10.0.8.3', port: 16010 })
.table('my_table' )
.create('my_column_family', function(err, success){
  this
  .row('my_row')
  .put('my_column_family:my_column', 'my value', function(err, success){
    this.get('my_column_family', function(err, cells){
      this.exists(function(err, exists){
        assert.ok(exists);
      });
    });
  });
});

/*client.putRow('testRihab', 'rowkey1', {'f1:name': 'foo name', 'f1:age': '18'}, function (err) {
  console.log(err);
});
client .getRow ( ' testRihab ' , ' rowkey1 ' , [ ' f1: nom ' , ' f1: age ' ] , function (err , row) {
  console.log ( row ) ;
} ) ; */
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
