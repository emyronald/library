class Library {
  static myLibrary = [];

  constructor(title, author, pageNo) {
    this.title = title;
    this.author = author;
    this.pageNo = pageNo;
    // this.isRead = isRead;
  }

  static addBookToLibrary(book) {
    this.myLibrary.push(book);
    console.log(this.myLibrary);
  }
}
// let instance = new Library();
// Library.addBookToLibrary();

class UI {
  constructor() {
    this.newBook = document.querySelector("#new-book");
    this.bookTitle = document.querySelector("#title");
    this.bookAuthor = document.querySelector("#author");
    this.bookPageNo = document.querySelector("#page-no");
    this.addBook = document.querySelector("#add-book");
    this.closeModal = document.querySelector("#close-modal");
    this.dialog = document.querySelector("dialog");
    this.cards = document.querySelector(".cards");
    this.newBook.addEventListener("click", () => {
      this.dialog.showModal();
    });
    this.addBook.addEventListener("click", () => {
      let Book = new Library(
        this.bookTitle.textContent,
        this.bookAuthor.textContent,
        this.bookPageNo.textContent
      );
      Library.addBookToLibrary(Book);
      this.createBook()
    });
    this.closeModal.addEventListener("click", () => {
      this.dialog.close();
    });
  }

  createBook() {
    Library.myLibrary.forEach((book, index) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
  <p>title: ${book.title}</p>
  <p>author: ${book.author}</p>
  <p>page number: ${book.pageNo}</p>`;
      if (index === Library.myLibrary.length - 1) this.cards.appendChild(card);
      const remove = document.createElement("button");
      remove.classList.add("remove");
      remove.textContent = "remove";
      card.appendChild(remove);
      remove.addEventListener("click", () => {
        this.cards.removeChild(card);
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

    this.bookTitle.value = "";
    this.bookAuthor.value = "";
    this.bookPageNo.value = "";
    this.dialog.close();
  }
  
}


let ui = new UI();
