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


function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i])
    }
}






// TESTS

habits = new Book('Atomic Habits', 'James Clear', 292, true)
richDad = new Book('Rich Dad Poor Dad', 'Robert T.', 180, true)
console.log(habits.info())

displayBooks()