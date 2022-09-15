const author = document.querySelector('#author');
const title = document.querySelector('#title');
const numberOfPages = document.querySelector('#number-of-pages');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const btn = document.querySelector('.btn');
const bookWrapper = document.querySelector('.books-wrapper');
const errorMsg = document.querySelector('.error-msg')
const deleteBtn = document.querySelector('.delete');

btn.addEventListener('click', () => {
    if(author.value !== '' && title.value !== '' && numberOfPages.value !== '' &&  yes.value !== '' && no.value !== '') {
        const checked = document.querySelector('input[name="choice"]:checked');
        addBookLibrary(checked);
        
        clearFields();
    } else {
        showErrorMessage();
    }
});

let myLibrary = [];

function addBookLibrary(checked) {
    myLibrary.push({
        author: author.value,
        title: title.value,
        pages: numberOfPages.value,
        read: checked.dataset.readState
    });

    displayBookToUI();
}

function Book(readState) {
    this.readState = readState;
}

Book.prototype.readStatus = function() {
    this.readState.classList.toggle('read');
    if(this.readState.classList.contains('read')) {
        this.readState.textContent = 'Read';
    } else {
        this.readState.textContent = 'Not read';
    }
}


function displayBookToUI() {
    myLibrary.forEach((book,index) => {
        if(index === myLibrary.length -1) {
            document.querySelector('tbody').innerHTML += `
                <tr>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.pages}</td>
                    <td class="read read-status">${book.read}</td>
                    <td class="delete" data-index=${index}>Delete</td>
                </tr>
                  `
        }
    })
};

bookWrapper.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        myLibrary.splice(e.target.dataset.index,1);
        e.target.parentElement.remove();
    } else if(e.target.classList.contains('read-status')) {
        const read = e.target;
        const bookRead = new Book(read);
        bookRead.readStatus();
    }
    
});

function showErrorMessage() {
    errorMsg.style.display = 'block';
    setTimeout(clearErrorMessage, 2000);
}

function clearErrorMessage() {
    errorMsg.remove();
}

function clearFields() {
    author.value = '';
    title.value = '';
    numberOfPages.value = '';
}
