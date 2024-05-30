const JSPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise is working");
    },1000)
})

JSPromise.then((value)=>console.log(value));
