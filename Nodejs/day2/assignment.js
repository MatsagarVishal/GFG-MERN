const request = require('request');


const getData=function(Callbacks){
    const api="https://ipinfo.io/json?token=2b547906b56a16";
    request({
        url:api,
        json:true
    },function(err,response,body){
        if(err){
            Callbacks(err);
        }else{
            Callbacks(body);
        }
    })
}

module.exports=getData;