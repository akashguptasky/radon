// Problem 3
// Module 3: src/validator/formatter.js
// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

// Call all these functions in route.js inside the test-me route handler



const trim =function(){
    let text="        Hello My name is Akash       ";
    console.log( text.trim());

}

const changeToLowerFunction=function()
{
    let text="THIS IS FUNCTIONUP ASSIGNMENT";
    console.log(  text=text.toLowerCase());   
}

const changeToUpperFunction=function()
{
    let text="This is functionup assignment";
    console.log(  text=text.toUpperCase());   
}
module.exports.trim=trim;
module.exports.changeToLowerFunction=changeToLowerFunction;
module.exports.changeToUpperFunction=changeToUpperFunction;