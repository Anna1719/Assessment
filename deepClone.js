function deepClone(obj) {
  return structuredClone(obj);
}

// Пример
const original = {
  name: "John",
  address: {
    city: "New York",
    country: "USA",
  },
  hobbies: ["videogames", "music"],
  nested: {
    more: {
      data: "Hi there!",
    },
  },
  date: new Date(),
  regexp: /abc/g,
  map: new Map([
    ["key1", "value1"],
    ["key2", "value2"],
  ]),
  set: new Set(["1", "2"]),
};

const copy = deepClone(original);
copy.address.city = "Los Angeles";
copy.hobbies.push("programming");
copy.map.set("key3", "value3");
copy.set.add("3");

console.log("--- DeepClone ---");

console.log(original.address.city); // New York
console.log(copy.address.city); // Los Angeles
console.log(original.hobbies); // ["videogames", "music"]
console.log(copy.hobbies); // ["videogames", "music", "programming"]
console.log(copy.nested.more.data); // Hi there!
console.log(copy.date !== original.date); // true (разные объекты Date)
console.log(copy.regexp !== original.regexp); // true (разные объекты RegExp)
console.log(copy.map.get("key3")); // value3
console.log(copy.set.has("3")); // true
