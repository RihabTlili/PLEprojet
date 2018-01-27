const express = require('express')
const app = express()
const HBaseclient = require('hbase-client');
const hbase = require('hbase-rpc-client');
const request = require('request');



var client = hbase({
    zookeeperHosts: ["localhost"],
    zookeeperRoot: "/hbase",
});
var get;
get = new hbase.Get("2");
client.get('tAR',get, function(err,res) {
// console.log("ttttt"+res.cols['Fam1:col1'].value);
  return console.log(arguments);
});

/*var del;
del = new hbase.Delete("2");
client.delete("tAR" ,del, function(err, res) {
return console.log(arguments);
});
*/
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

/*var hbase = require('hbase');
var client = hbase({ options });

client.version( function( error, version ){
  console.log( version );
} );*/
