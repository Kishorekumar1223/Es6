class Item{
    static count = 0;
    static increment(){
        Item.count++;
        console.log(Item.count);
    }
}

console.log(Item.count)
Item.increment();