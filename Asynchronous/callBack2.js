function greet(name,callBack){
    console.log('Hello world');
    callBack(name);
}

function sayName(name){
    console.log('hello '+name);
}

setTimeout(greet,2000,'john',sayName)
// sayName('kishore')