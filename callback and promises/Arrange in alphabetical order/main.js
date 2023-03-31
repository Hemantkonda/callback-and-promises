// printBookTitles function having two parameters books & callback
// books containing array object having title, author, year
// callback function to be called with the list of book title
function printBookTitles(books, callback){
    // creating new array of book titles
    const title = books.map(book => book.title);
    // sort the new array of title in alphabatical order
    title.sort();
    // call the "callback" function with sorted array of books
    callback(title);
}

// creating array of object books

const books = [
    {title:"hemant konda the hero", author:"hk", year: 2022},
    {title:"the legend", author:"legend", year:2021},
    {title:"the master of js", author:"js", year:2016},
    {title:"the man is hard like rock", author:"the Rock", year:2023}
];

function logs(order) {
    console.log("Books Title");
    // console.log(order);
    order.forEach(titles => console.log(titles));
}

printBookTitles(books, logs);
