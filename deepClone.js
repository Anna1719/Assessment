// WeakMap используется для хранения уже клонированных объектов
// Чтобы избежать бесконечных циклов при клонировании, тк объекты могул ссылаться друг на друга

function deepClone(obj, cache = new WeakMap()) {
  // Если obj - это примитив или null, возвращаем его
  if (obj === null || typeof obj !== "object") return obj;

  // Проверяем, был ли объект уже клонирован
  // Возвращаем, если да
  if (cache.has(obj)) return cache.get(obj);

  // Создаем новый объект или массив
  let clone;

  if (Array.isArray(obj)) {
    clone = []; // массив
  } else if (obj instanceof Map) {
    clone = new Map(); // Map
    obj.forEach((value, key) => {
      clone.set(deepClone(key, cache), deepClone(value, cache)); // Рекурсия для ключей и значений
    });
    return clone;
  } else if (obj instanceof Set) {
    clone = new Set(); // Set
    obj.forEach((value) => {
      clone.add(deepClone(value, cache)); // Рекурсия для значений
    });
    return clone;
  } else if (obj instanceof Date) {
    return new Date(obj); // Date
  } else if (obj instanceof RegExp) {
    return new RegExp(obj); // RegExp
  } else {
    clone = {}; // объект
  }

  // Сохраняем клонированный объект в кэше
  cache.set(obj, clone);

  for (const key of Reflect.ownKeys(obj)) {
    clone[deepClone(key, cache)] = deepClone(obj[key], cache); // Рекурсия для вложенных объектов
  }

  return clone;
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

// Вышенаписанная функция не универсальна, тк для некоторых случаев
// (WeakMap, WeakSet, или пользовательские типы) может потребоваться доп логика
// Можно использовать structuredClone для большинства типов и структур данных, однако, есть исключения и в этом случае:
// Error и DOM узлы вызовут ошибку, возникнет проблема с клонированием прототипов и функций.
