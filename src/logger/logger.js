// Problem 1
// Module1 : src/logger/logger.js containing the following exported function

// - welcome() -> prints ‘Welcome to my application. I am <name> and a part of FunctionUp Thorium cohort.’



// Call welcome in route.js inside the test-me handler



const endpoint = "https://www.functionup.org"
const batch = "radon"

const log = function() {
    console.log('I am inside the log function')
}
const welcome=function(){
    console.log('Welcome to my application. I am Akash Gupta and a part of FunctionUp Thorium cohort')
}

module.exports.endpoint = endpoint
module.exports.batch = batch
module.exports.log = log
module.exports.welcome=welcome