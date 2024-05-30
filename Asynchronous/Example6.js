let promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('promise resolved',4000)
    })
})

async function Asyncfun(){
    let result = await Promise;
}