function manipulateString(letters, callback){
    let manipulatedStr = letters.toUpperCase();
    callback(`The manipulated string is: ${manipulatedStr}`);
}

function logString(str) {
    console.log(str);
}
manipulateString("hello world!",logString);




