const myLibrary = [];

function Book(title, author, pageNo) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pageNo = pageNo;
}

function addBookToLibrary(title, author, pageNo) {
  let thisBook = new Book(title, author, pageNo);
  myLibrary.push(thisBook);
  console.log(myLibrary);
}

const newBook = document.querySelector("#new-book");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPageNo = document.querySelector("#page-no");
const addBook = document.querySelector("#add-book");
const closeModal = document.querySelector("#close-modal");
const dialog = document.querySelector("dialog");
const cards = document.querySelector(".cards");

newBook.addEventListener("click", () => {
  dialog.showModal();
});

addBook.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary(bookTitle.value, bookAuthor.value, bookPageNo.value);
  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
  <p>title: ${book.title}</p>
  <p>author: ${book.author}</p>
  <p>page number: ${book.pageNo}</p>`;
    if (index === myLibrary.length - 1) cards.appendChild(card);
    const remove = document.createElement("button");
    remove.classList.add("remove");
    remove.textContent = "remove";
    card.appendChild(remove);
    remove.addEventListener("click", () => {
      cards.removeChild(card);
    });
    const haveRead = document.createElement("button");
    haveRead.classList.add("have-read");
    haveRead.textContent = "No";
    card.appendChild(haveRead);
    haveRead.addEventListener("click", () => {
      if (haveRead.textContent === "No") {
        haveRead.textContent = "Yes";
      } else {
        haveRead.textContent = "No";
      }
    });
  });

  bookTitle.value = "";
  bookAuthor.value = "";
  bookPageNo.value = "";
  dialog.close();
});

closeModal.addEventListener("click", () => {
  dialog.close();
});
