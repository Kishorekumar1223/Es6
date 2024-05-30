function filter(numbers,callBack){
    let result =[]
    for(const number of numbers){
        if(callBack(number)){
            result.push(number)
        }
    }
    return result;
}


let numbers = [10,2,4,23,12,75,96,90]
let OddNumbers = filter(numbers,(number)=>{
    return number%2
})

console.log(OddNumbers);