console.log("Hello World");
document.write("This is some document");
console.warn("Mention some warning");
var n = 45;
var obj = {
        name: "name comes here",
        cool: "I am cool"

    }
    /*
this is multiline comment format
    */
var arrObj = [1, 2, 3, 4, 5, 6]
var age = 4;
if (age > 10) {
    console.log("You can drink water.")
} else {
    console.log("You are a small kiddo.")
}

// ways to define a variable
var name = "Akshay";
let name1 = "another Name";
const name2 = "Another Name here";

var ourname = "Freecodecamp";
var myNameIs = "Name is :" + ourname;
ourname += myNameIs;
console.log(ourname.length);
console.log("First letter of our Name is : " + ourname[0]);

function wordBlock(myName, hisName, Another, justName) {
    var result = myName + " " + hisName + " " + Another + " " + justName;
    return result;
}

function checkEquality(num1, num2) {
    if (num1 === num2) {
        return true;
    } else {
        return false;
    }
}
console.log(checkEquality(10, "10"));