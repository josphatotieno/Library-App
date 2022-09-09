const author = document.querySelector('#author');
const title = document.querySelector('#title');
const numberOfPages = document.querySelector('#number-of-pages');
const statusOfReading = document.querySelector('#read');
const btn = document.querySelector('.btn');
const bookItems = document.querySelector('.book-items')

btn.addEventListener('click', () => {
    if(author.value !== '' && title.value !== '' && numberOfPages.value !== '' && statusOfReading.value !== '') {
        addBookLibrary();
        
        clearFields();
    } else {
        console.log('No book');
    }
})

let myLibrary = [];

function addBookLibrary() {
    myLibrary.push({
        author: author.value,
        title: title.value,
        pages: numberOfPages.value,
        read: statusOfReading.value
    });

    displayBookToUI();
}

function displayBookToUI() {
    myLibrary.forEach(book => {
        
        bookItems.innerHTML += `
        <div class="book-item">
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <p>${book.pages}</p>
            <p>${book.read}</p>
        </div>
        `
    })
}

function clearFields() {
    author.value = '';
    title.value = '';
    numberOfPages.value = '';
    statusOfReading.value = '';
}

