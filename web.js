var HBase = require('node-hbase-thrift2')
var hbase = require('hbase');
var client = hbase({ options });
var Readable = require ('stream');


/*var config = {
    hosts: ['10.0.8.3'],
    port: 16010,
    timeout:10
};

var hbaseClient = HBase.createClient(config);
*/
/*var get = HBase.Get('1');
console.log("coucou");
get.add('Fam1', 'col1'); // or
console.log("Anna");
hbaseClient.get('tAR', get, function(err,data){
  console.log("je suis dans la fonction");
    if(err)
        console.log('error:', err);
    else
        console.log('get: annaChu2', data);
});
*/


//put 'tAR',1,'Fam1:col1','val1'


/*var assert = require('assert');
var hbase = require('hbase');

hbase({ host: '10.0.8.3', port: 16010 })
.table('tAR' )
.create('Fam1', function(err, success){
  this
  .row('1')
  .put('Fam1:col1', '14', function(err, success){
    this.get('Fam1', function(err, cells){
      this.exists(function(err, exists){
        assert.ok(exists);
      });
    });
  });
});*/

var rows = [];
scanner = client
.table('tAR')
.scan({
  startRow: '1',
  maxVersions: 1
});
scanner.on('readable', function(){
  while(chunk = scanner.read()){
    rows.push(chunk);
  }
});
scanner.on('error', function(err){
  console.log(err);
});
scanner.on('end', function(){
  console.log(rows);
});
console.log(config.port);
