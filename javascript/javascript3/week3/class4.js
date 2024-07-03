class Book {
  constructor(title, author, isbn, isBorrowed) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isBorrowed = isBorrowed;
  }

  borrow() {
    if (this.isBorrowed) {
      console.log("This book is already borrowed");
      return;
    }
    this.isBorrowed = true;
  }
  returnBook() {
    this.isBorrowed = false;
  }
}

const TheLostBook = new Book(
  "The Lost Book",
  "J.K.Rowling",
  "1234567890",
  false
);

// console.log(TheLostBook);
// TheLostBook.borrow();
// console.log(TheLostBook);
// -------------------------------

class Member {
  constructor(name, memberId) {
    this.name = name;
    this.memberId = memberId;
    this.borrowedBooks = [];
  }

  borrowBook(book) {
    if (!book.isBorrowed) {
      this.borrowedBooks.push(book);
      book.borrow();
    }
  }

  returnBook(book, author, memberId, borrowed) {
    if (book.isBorrowed) {
      const newBook = new Book(book, author, memberId, borrowed);
      const borrowed = (this.borrowedBooks = this.borrowedBooks.filter(
        (book) => book.name !== book.name
      ));
      newBook.returnBook();
    } else {
      console.log("the book is not ours");
    }
  }
}

const member1 = new Member("Pepe", 123456789);
member1.borrowBook("The little mermaid", "HC Andersen", 2342342324, false);
console.log(member1);
// member1.returnBook("The little mermaid", "HC Andersen", 2342342324, true);
// console.log(member1);
