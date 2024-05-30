let count = true 

let countValue = new Promise(function(resolve,reject){
    resolve('Promise resolved')
})

countValue
.then(function successvalue(result){
    console.log(result)
})

.then(function successvalue(){
    console.log('Multiple then we can use')
})