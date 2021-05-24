class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {

  addBooksToList(book) {
    const bookList = document.getElementById('book-list');
    const row = document.createElement('tr');
    //adding data to row
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class = "delete">X<a></td>
  ` ;
    bookList.appendChild(row);
  }

  showAlert(msg, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(msg));

    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      if (window.confirm('Are you sure ?')) {
        target.parentElement.parentElement.remove();
      }
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}


//Local storage class
class localStore {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
     books = [];
    }
    else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBooks(book) { 
    const books = localStore.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static displayBooks() {
    const books = localStore.getBooks();
    books.forEach(function (book) {
      const ui = new UI();
      ui.addBooksToList(book);
    });
  }

  static delete(target) {
    const books = localStore.getBooks();
    const isbn = target.parentElement.previousElementSibling.textContent;
   // console.log(isbn);
    books.forEach(function (book, index) {
      if (book.isbn == isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}



//display from local storage
document.addEventListener('DOMContentLoaded', localStore.displayBooks());



//eventListener for submit button
document.getElementById('book-form').addEventListener('submit', function (e) {

  const title = document.getElementById('title').value,
  author = document.getElementById('author').value,
  isbn = document.getElementById('isbn').value;
  //creating a book object
  const book = new Book(title, author, isbn);
  const ui = new UI();

  //validation
  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Fill all the fields correctly', 'error');
  }
  else {
    ui.addBooksToList(book);
    ui.clearFields();

    //add to local storage
    localStore.addBooks(book);

    //showing alert
    ui.showAlert('The book has been added', 'success');
  }

  e.preventDefault();
});





//eventlistener for delete button
document.getElementById('book-list').addEventListener('click', function (e) {

  const ui = new UI();
  ui.deleteBook(e.target);
  //console.log(e.target);
  //delete from local storage
  localStore.delete(e.target);
  
  //alert showing
  ui.showAlert('The book has been deleted!!!!!', 'success');

});