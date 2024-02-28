// the purpose of this task is to create functions to manage your library.
//library will be represented an array of book object each book with title , author and read status properties.  

let library= [];

//the function addBook takes pera meter title and author it will create a newBook object and push the object into the library 
const addBook =(title,author)=>{

    let newBook ={
        title : title,
        author: author,
        readStatus: false
    }

    library.push(newBook);
}

addBook('Feluda', 'Somoresh Mojumder');

// to check the library's books
//console.log(library);

// this function will check if the book is read or not

const markAsRead = (title) =>{
    const bookRead = library.find(bookRead => bookRead.title === title);

    if (bookRead) {
        bookRead.readStatus = true;
        console.log('Book is found as read');
    } 
    else console.log('Book is not read yet');
}
//markAsRead('Feluda');
//console.log(library);

// remove book from the library

const removeBook =(title)=>{

    const bookIndex = library.findIndex(book => book.title === title);

    if (bookIndex !== -1) {
        library.splice(bookIndex, 1);
        console.log('Book is removed from the library');
    } else {
        console.log('Book is not found in the library');
    }

}

//removeBook('Feluda');
//console.log(library);

// this function will cheak unread book and display unread book

const listUnread = () => {
    
  const unReadBooks=library.filter(book => !book.readStatus)
   unReadBooks.forEach(book => console.log(book.title));
}


// this function will check the book by its author name
const findBooksByAuthor = (author) => {

    
    const booksAuthor = library.filter(book => book.author === author);

    if (booksAuthor.length === 0) {
        console.log('no book is found by the author name');
    } else {
        console.log('Book is found');
    }
}
//findBooksByAuthor('Somoresh Mojumder');
//console.log(library);


//this function will check if the book is exist in the library or not
const bookExists = (title) => {
    if (library.some(book => book.title === title)) {
        console.log('Book is in the library');
    } else {
        console.log('Book is not in the library');
    }
}
bookExists('Feluda');
console.log(library);