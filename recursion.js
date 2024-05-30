function countdown(num){        //countdown(5)
    console.log(num);           //5
    if(num>1)
    countdown(num-1);           //countdown(5-1)
}

countdown(5);         //calling the function


function sum(n){
    if(n<=1)
    return n;
    else
    return n + sum(n-1);
}

console.log("sum = " +sum(5));