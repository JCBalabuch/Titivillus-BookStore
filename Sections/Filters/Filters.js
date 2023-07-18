import "./Filters.css";
import { DATABOOKS } from "../../Data/Data";
import {
  printGallery,
  templateGalleryBooks,
} from "../GalleryCards/GalleryCards";

let FILTEREDBOOKS = [];

export const searchByEditorial = (e) => {
  if (!FILTEREDBOOKS.some((book) => book.editorial === e.target.value)) {
    FILTEREDBOOKS = [
      ...FILTEREDBOOKS,
      ...DATABOOKS.filter((book) => book.editorial === e.target.value),
    ];
    // printGallery(FILTEREDBOOKS);
    console.log(FILTEREDBOOKS);
  } else {
    FILTEREDBOOKS = FILTEREDBOOKS.filter(
      (book) => book.editorial !== e.target.value
    );
    // printGallery(FILTEREDBOOKS);
    console.log(FILTEREDBOOKS);
  }

  console.log(FILTEREDBOOKS);

  // let filterEditorial = [];

  // if (FILTEREDBOOKS.length) {
  //   filterEditorial = FILTEREDBOOKS.filter(
  //     (book) => book.editorial === e.target.value
  //   );
  // } else {
  //   filterEditorial = DATABOOKS.filter(
  //     (book) => book.editorial === e.target.value
  //   );
  // }

  // FILTEREDBOOKS = filterEditorial;

  // console.log(FILTEREDBOOKS);

  // if (filterEditorial === "") {
  //   return `
  //   <h2>No se ha encontrado el libro que buscas<h2>
  //   `;
  // } else {
  //   templateGalleryBooks(FILTEREDBOOKS)
  // }

  // templateGalleryBooks(FILTEREDBOOKS);
};

console.log(`fuera del filtro` + FILTEREDBOOKS);

export const searchByAuthorTitle = (e) => {
  if (
    !FILTEREDBOOKS.some(
      (book) =>
        book.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        book.author.toLowerCase().includes(e.target.value.toLowerCase())
    )
  ) {
    FILTEREDBOOKS = [
      ...FILTEREDBOOKS,
      ...DATABOOKS.filter(
        (book) =>
          book.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          book.author.toLowerCase().includes(e.target.value.toLowerCase())
      ),
    ];
    // printGallery(FILTEREDBOOKS);
    console.log(FILTEREDBOOKS);
  } else {
    FILTEREDBOOKS = FILTEREDBOOKS.filter(
      (book) =>
        book.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        book.author.toLowerCase().includes(e.target.value.toLowerCase())
    );
    // printGallery(FILTEREDBOOKS);
    console.log(FILTEREDBOOKS);
  }

  console.log(FILTEREDBOOKS);

  // let filterAuthorTitle = [];

  // if (FILTEREDBOOKS.length) {
  //   filterAuthorTitle = FILTEREDBOOKS.filter(
  //     (book) =>
  //       book.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
  //       book.author.toLowerCase().includes(e.target.value.toLowerCase())
  //   );
  // } else {
  //   filterAuthorTitle = DATABOOKS.filter(
  //     (book) =>
  //       book.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
  //       book.author.toLowerCase().includes(e.target.value.toLowerCase())
  //   );
  // }

  // printGallery(FILTEREDBOOKS);

  // console.log(FILTEREDBOOKS);
};

export const searchByPrice = (e) => {
  if (!FILTEREDBOOKS.some((book) => book.price <= e.target.value)) {
    FILTEREDBOOKS = [
      ...FILTEREDBOOKS,
      ...DATABOOKS.filter((book) => book.price <= e.target.value),
    ];
    // printGallery(FILTEREDBOOKS);
    console.log(FILTEREDBOOKS);
  }
  // else {
  //   FILTEREDBOOKS = FILTEREDBOOKS.filter(
  //     (book) => book.price <= e.target.value
  //   );
  //   printGallery(FILTEREDBOOKS);
  //   console.log(FILTEREDBOOKS)
  // }

  // printGallery(FILTEREDBOOKS)
  // console.log(FILTEREDBOOKS);

  // let filterPrice = [];

  // if (FILTEREDBOOKS.length) {
  //   filterPrice = FILTEREDBOOKS.filter((book) => book.price <= e.target.value);
  // } else {
  //   filterPrice = DATABOOKS.filter((book) => book.price <= e.target.value);
  // }

  // printGallery(FILTEREDBOOKS);
  // console.log(FILTEREDBOOKS);
};

// export const filterBooks = () => {
//   const filter = document.querySelector("#searchAll");
//   filter.addEventListener("click", () => {
//     searchByEditorial();
//     searchByAuthorTitle();
//     searchByPrice();
//     printGallery(FILTEREDBOOKS);
//   });
// };

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
  });

  FILTEREDBOOKS = [];
  printGallery(DATABOOKS);
};
