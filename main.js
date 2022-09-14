const author = document.querySelector('#author');
const title = document.querySelector('#title');
const numberOfPages = document.querySelector('#number-of-pages');
const statusOfReading = document.querySelector('#read');
const btn = document.querySelector('.btn');
const bookWrapper = document.querySelector('.books-wrapper');
const deleteBtn = document.querySelector('.delete');

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
    console.log(myLibrary);
    myLibrary.forEach((book,index) => {
        if(index === myLibrary.length -1) {
            document.querySelector('tbody').innerHTML += `
                <tr>
                    <td>${book.author}</td>
                    <td>${book.title}</td>
                    <td>${book.pages}</td>
                    <td>${book.author}</td>
                    <td>${book.read}</td>
                    <td class="delete" data-index=${index}>Delete</td>
                </tr>
            `
        }
    })
}

bookWrapper.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        myLibrary.splice(e.target.dataset.index,1);
        e.target.parentElement.remove();
    }
    
})



function clearFields() {
    author.value = '';
    title.value = '';
    numberOfPages.value = '';
    statusOfReading.value = '';
}

