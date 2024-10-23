function debounce(func, delay) {
  let timer;
  return function (...args) {
    // Если функция вызывается снова, сбрасываем таймер
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Пример использования
const debouncedFunction = debounce(() => {
  console.log("Вызвана функция с задержкой");
}, 5000);

// Тест debounce
console.log("--- Debounce Start ---");
debouncedFunction(); // Запланирует выполнение через 2 секунды
debouncedFunction(); // Сбросит таймер и запланирует выполнение снова