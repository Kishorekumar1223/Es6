let count = true
let countValue = new Promise(function(resolve,reject){
    if(count){
        resolve('<resolve> There is a count value')
    }
    else{
        resolve('<resolve> This is error value')
    }
})

console.log(countValue)