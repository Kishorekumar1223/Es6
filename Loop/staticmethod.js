class Person{
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name;
    }
    static anonymous(gender){
        let name = gender == "male" ?"yes":"no"
        console.log(name)
    }
}

Person.anonymous('male');   //static methods

const obj = new Person("Maggie")
console.log(obj.getName())