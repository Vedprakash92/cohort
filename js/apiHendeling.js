const API_URL = 'https://api.freeapi.app/api/v1/public/books?page=1&limit=100';

//Fethch book data from API

const fetchBooks = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching books:', error);
    }
}

async function handleApiCall () {
    const books = await fetchBooks();
    const bookList = books.data;
    //console.log(bookList);

    // filter books for sales
    const saleBooksList = bookList.data.filter((book) => book.saleInfo.saleability === "FOR_SALE" );
    const notForSaleBooksList = bookList.data.filter((book) => book.saleInfo.saleability !== "FOR_SALE" );
    //console.log(saleBooksList);
    //console.log(saleBooksList, 'saleBooksList');
    //console.log(notForSaleBooksList, 'notForSaleBooksList');

    // sort books by title
    const sortedBooks = bookList.data.sort((a, b) => a.volumeInfo.title.localeCompare(b.volumeInfo.title));

   sortedBooks.forEach((book) => {
    console.log(book.volumeInfo.title);
   })
    console.log(sortedBooks, 'sortedBooks');
}

const arr = [];
arr.push("Ved")
console.log(typeof arr);

