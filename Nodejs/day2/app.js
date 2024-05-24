const weather = require("./weather.js")
const getIpInfo = require("./assignment.js")
// const yargs = require('yargs')
//     .option('loc', {
//         alias:'1',
//         demand:true,
//         type: 'string',
//         description:"You have to provide a location!!!"
//     })
//     .help('help').argv;


// weather(yargs.loc,function (currentWeather) {
//     console.log(currentWeather);
// })

getIpInfo((res)=>{
    console.log(res);
});