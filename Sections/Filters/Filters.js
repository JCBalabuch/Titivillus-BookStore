import "./Filters.css";
import { DATABOOKS } from "../../Data/Data";
import { templateGalleryBooks } from "../GalleryCards/GalleryCards";

export let FILTEREDBOOKS = [];

console.log(FILTEREDBOOKS);

export const printBooks = (books) => {
  const galleryBooks = document.querySelector("#mainGallery");
  galleryBooks.innerHTML = "";

  if (books.length === 0) {
    const notFound = document.createElement("h2");
    notFound.textContent = "No se ha encontrado el libro que buscas";
    notFound.className = "notFound";
    galleryBooks.append(notFound);

    templateGalleryBooks(DATABOOKS)
  } else {
    templateGalleryBooks(books)

    console.log(FILTEREDBOOKS);
  }
};

export const searchByEditorial = (event) => {
  if (!FILTEREDBOOKS.some((book) => book.editorial === event.target.value)) {
    FILTEREDBOOKS = [
      ...FILTEREDBOOKS,
      ...DATABOOKS.filter((book) => book.editorial === event.target.value),
    ];
    console.log(FILTEREDBOOKS);
  } else {
    FILTEREDBOOKS = FILTEREDBOOKS.filter(
      (book) => book.editorial !== event.target.value
    );
    console.log(FILTEREDBOOKS);
  }
  console.log(FILTEREDBOOKS);
  printBooks(FILTEREDBOOKS);
};

export const searchByAuthorTitle = (event) => {

  if (
    !FILTEREDBOOKS.some(
      (book) =>
        book.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        book.author.toLowerCase().includes(event.target.value.toLowerCase())
    )
  ) {
    FILTEREDBOOKS = [
      ...FILTEREDBOOKS,
      ...DATABOOKS.filter(
        (book) =>
          book.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
          book.author.toLowerCase().includes(event.target.value.toLowerCase())
      ),
    ];
    console.log(FILTEREDBOOKS);
  } else {
    FILTEREDBOOKS = FILTEREDBOOKS.filter(
      (book) =>
        book.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        book.author.toLowerCase().includes(event.target.value.toLowerCase())
    );
    console.log(FILTEREDBOOKS);
  }
  printBooks(FILTEREDBOOKS);
};

export const searchByPrice = (event) => {
  if (!FILTEREDBOOKS.some((book) => book.price <= event.target.value)) {
    FILTEREDBOOKS = [
      ...FILTEREDBOOKS,
      ...DATABOOKS.filter((book) => book.price <= event.target.value),
    ];
    console.log(FILTEREDBOOKS);
  } else {
    FILTEREDBOOKS = FILTEREDBOOKS.filter(
      (book) => book.price <= event.target.value
    );
    console.log(FILTEREDBOOKS);
  }
  printBooks(FILTEREDBOOKS);
};

export const filterCleaner = () => {
  const cleanFilters = document.querySelector("#clearFilters");
  cleanFilters.addEventListener("click", () => {
    const editorial$$ = document.getElementById("editorialSelect");
    const filterByAutorTitle$$ = document.getElementById(
      "searchByTitleOrAuthor"
    );
    const filterByPrice$$ = document.getElementById("searchByPrice");

    editorial$$.value = "";
    filterByAutorTitle$$.value = "";
    filterByPrice$$.value = "";

    FILTEREDBOOKS = [];
    printBooks(DATABOOKS);

    console.log(cleanFilters);
    console.log(editorial$$.value);
    console.log(filterByAutorTitle$$.value);
    console.log(filterByPrice$$.value);
    console.log(FILTEREDBOOKS);

  });
};
