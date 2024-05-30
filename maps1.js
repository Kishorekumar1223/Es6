const map = new Map([
    ["one",24],
    [48,"two"],
    [true,"three"],
    ["four",10.5]
])

console.log(map.get("one"),map.get(48),map.get(true),map.get("four"))

const set1 = new Set ([
    "One","one"
])
set1.add(24);
set1.add(24);
set1.add("two");

console.log(set1);