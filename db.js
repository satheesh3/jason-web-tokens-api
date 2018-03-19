var mongoose = require('mongoose');
var errorfunc = function(e){
    console.log("Error in connecting db.",e)
}
var successfunc = function(){
    console.log("Connected to databond");
}
var conn = mongoose.connect('mongodb://admin:12345678@ds117739.mlab.com:17739/webtokenbond'
).then(successfunc).catch(errorfunc);

module.exports=conn;