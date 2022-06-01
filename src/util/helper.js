// Problem 2
// Module 2 : src/util/helper.js

// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Roadon, W3D1, the topic for today is Nodejs module system’
	
// 	Call all these functions in route.js inside the test-me route handler

let currentDate=new Date();

const printDate=function()
{
    let cDay = currentDate.getDate();
    console.log("The current date is : "+cDay);
}

const printMonth=function()
{
    let cMonth = currentDate.getMonth() + 1;
    console.log("The current month is : "+cMonth);
}

const getBatchInfo=function(){
    console.log("'Radon,W3D3, the topic for today is Nodejs module system");
}

module.exports.cDay=printDate;
module.exports.cMonth=printMonth;
module.exports.getBatchInfo=getBatchInfo;