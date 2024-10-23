function chunkArray(array, size) {
  const result = [];

  // Проверяем, что размер подмассивов - положительное число
  if (size < 0) return "Size cannot be negative";
  else {
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
}

console.log("--- ChunkArray ---");
// Пример
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 10)); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], -2)); // Size cannot be negative
