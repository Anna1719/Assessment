class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = true;
  }

  // Метод для изменения доступности книги
  // Если книга недоступна, возвращает false
  borrow() {
    return this.isAvailable ? ((this.isAvailable = false), true) : false;
  }

  // Возврат книги
  return() {
    this.isAvailable = true;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  // Метод для взятия книги по ISBN
  borrowBook(isbn) {
    const book = this.books.find((b) => b.isbn === isbn);
    return book
      ? book.borrow()
        ? "Книга получена"
        : "Книга занята"
      : "Книга не найдена";
  }

  returnBook(isbn) {
    const book = this.books.find((b) => b.isbn === isbn);
    return book ? (book.return(), "Книга возвращена") : "Книга не найдена";
  }

  listAvailableBooks() {
    const availableBooks = this.books.filter((b) => b.isAvailable);
    if (availableBooks.length > 0) {
      console.log("Доступные книги:");
      availableBooks.forEach((b) => {
        console.log(`- ${b.title} (${b.author})`);
      });
    } else {
      console.log("Все книги заняты.");
    }
  }
}

const library = new Library();

// Создаем и добавляем книги
const book1 = new Book("Анна Каренина", "Л. Н. Толстой", "12345");
const book2 = new Book("Вишневый сад", "А. П. Чехов", "55555");
const book3 = new Book("Записки молодого врача", "М. А. Булгаков", "66666");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log("--- Library ---");

// Смотрим доступные книги
library.listAvailableBooks();

// Берем книгу по ISBN
library.borrowBook("66666");

// Пытаемся взять уже занятую книгу
library.borrowBook("66666");

library.listAvailableBooks();

// Возвращаем книгу
library.returnBook("66666");

// Пытаемся вернуть книгу, которая не взята
library.returnBook("55555");

library.listAvailableBooks();

// Попробуем взять все книги
library.borrowBook("12345");
library.borrowBook("55555");
library.borrowBook("66666");

library.listAvailableBooks();
