//....Rest parameter
function sum1(...data){
    let sum =0;
    for(let i of data){
        sum += i;
    }
    console.log("Sum ="+sum);
}

sum1(12,4);
sum1(1,2,3);
sum1(1,2,3,4);
sum1(1,2,3,4,5);

//spread operator
let arr =[1,2,3,-1,'one',10.5];
console.log(...arr);
console.log(Math.max(...arr));