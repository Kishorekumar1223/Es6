function greet(name,callBack){
    console.log('hello world '+name);
    callBack();
}

function callMe(){
    console.log("callback function working");
}

greet('kishore',callMe);