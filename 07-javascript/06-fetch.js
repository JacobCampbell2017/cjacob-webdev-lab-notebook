const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  // Fetch data from the API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let books = data.map((book) => {
        let bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.innerHTML = `
          <h2>${book.name}</h2>
          <p>by ${book.authors}</p>
          <p>${book.released.substring(0, 4)}</p>
          <p>${book.numberOfPages}</p>
        `;
        return bookElement;
      });
      books.forEach((book) => {
        app.appendChild(book);
      });

      // one book per row
      app.style.display = "grid";
      app.style.flexWrap = "wrap";
      app.style.justifyContent = "center";
    });
  document.querySelector("#loading").remove();
};

document.addEventListener("DOMContentLoaded", () => {
  fetchData(url);
});
