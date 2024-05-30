function task(message){
    let n = 10000000
    while(n>0){
        n--;
    }
    console.log(message)
}

console.log('Start Script')
setTimeout(async()=>{
    task('Downloding a file')
},100000)
console.log('done')