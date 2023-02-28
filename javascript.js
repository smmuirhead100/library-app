let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read;
    myLibrary.push(title);

    this.info = function() {
        return title + ', ' + author + ', ' + pages + ' pages, has read:' + read
    }
}

function addBookToLibrary() {
}

// Display Books Function
const bookDisplay = document.querySelector('.books');
function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        div = document.createElement('div')
        div.textContent = myLibrary[i];
        bookDisplay.appendChild(div);
    }
}

const displayBooksBtn = document.querySelector('#displayBooks');
displayBooksBtn.addEventListener('click', () => {displayBooks()}, {once : true})

// Add new book function 

function displayNewBookForm() {
    var  newBook = document.querySelector(".newBook");
    if (newBook.style.display === "none") {
      newBook.style.display = "grid";
    } else {
      newBook.style.display = "none";
    }
  }

const newBookBtn = document.querySelector('#newBook');
newBookBtn.addEventListener('click', () => {displayNewBookForm()})

// Change back after submitting

const newBookSubmit = document.querySelector('#newBookSubmit');
newBookSubmit.addEventListener('click', () => {displayNewBookForm})


// TESTS

habits = new Book('Atomic Habits', 'James Clear', 292, true)
richDad = new Book('Rich Dad Poor Dad', 'Robert T.', 180, true)
console.log(habits.info())
