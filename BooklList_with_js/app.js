class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

function UI() { }

UI.prototype.addBooksToTheList = function (book) {
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
  this.showAlert('The book has been added', 'success');
}

UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    if (window.confirm('Are you sure ?')) {
      target.parentElement.parentElement.remove();
    }
  }
}

UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

UI.prototype.showAlert = function (msg, className) {
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

//eventListener
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
    ui.addBooksToTheList(book);
    ui.clearFields();
  }

  e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function (e) {

  const ui = new UI();
  ui.deleteBook(e.target);
  //alert showing
  ui.showAlert('The book has been deleted!!!!!', 'success');

});