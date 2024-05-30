const student = ["kishore","sruthi","venky"]

for(let prop of student){
    console.log(prop)
}

const string = "Wavecafe"

for(let s of string){
    // console.log(s)
    process.stdout.write(s+' ')
}

console.log()

const set = new Set([1,2,3])

for(let s1 of set){
    console.log(s1);
}

const map = new Map();
map.set('name','kishore')
map.set('age',21)

for(let [key,value] of map){
    console.log(key+' - '+value)
}