const Person = {
    name:"Kishore",
    age:21,
    gender:"Male"
}

for(var prop in Person){
    console.log(prop+" : "+Person[prop]);
}