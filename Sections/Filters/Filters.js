import { DATABOOKS } from "../../Data/Data";
import { templateGalleryBooks } from "../GalleryCards/GalleryCards";
import "./Filters.css";

let FILTEREDBOOKS = [];

const templateFilters = () => {
  return `
  <div id="filters-section" class="filters-section">
    <div id="filters" class="filters"><div>
    <button id="clearFilters" class="clearFilters">Limpiar Filtros</button>
  </div>
  `;
};

const searchByEditorial = (e) => {
  let filterEditorial = [];

  if (FILTEREDBOOKS.length) {
    filterEditorial = FILTEREDBOOKS.filter(
      (book) => book.editorial === e.target.value
    );
  } else {
    filterEditorial = DATABOOKS.filter(
      (book) => book.editorial === e.target.value
    );
  }

  if (filterEditorial === "") {
    return `
    <h2>No se ha encontrado el libro que buscas<h2>
    `;
  } else {
    FILTEREDBOOKS = filterEditorial;
  }

  templateGalleryBooks(FILTEREDBOOKS);

  console.log(FILTEREDBOOKS);
};


const editorialFilter = () => {
  const filterSection = document.querySelector("#filters");
  const editorials = [];

  for (const book of DATABOOKS) {
    if (!editorials.includes(book.editorial)) {
      editorials.push(book.editorial);
    }
  }

  const divEditorial$$ = document.createElement("div");
  divEditorial$$.id = "searchByEditorial";
  divEditorial$$.classList = "searchByEditorial";

  const tituloEditorial$$ = document.createElement("h4");
  tituloEditorial$$.textContent = "Filtrar por Editoriales";
  divEditorial$$.appendChild(tituloEditorial$$);

  const editorial$$ = document.createElement("select");
  editorial$$.id = "editorialSelect";
  divEditorial$$.appendChild(editorial$$);

  for (const editorial of editorials) {
    const edOptions$$ = document.createElement("option");
    edOptions$$.id = "editorialOption";
    edOptions$$.text = editorial;

    editorial$$.append(edOptions$$);
  }
  divEditorial$$.append(editorial$$);

  editorial$$.addEventListener("change", searchByEditorial);

  filterSection.appendChild(divEditorial$$);
};

const searchByAuthorTitle = (e) => {
  let filterAuthorTitle = [];

  if (FILTEREDBOOKS.length) {
    filterAuthorTitle = FILTEREDBOOKS.filter(
      (book) =>
        book.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        book.author.toLowerCase().includes(e.target.value.toLowerCase())
    );
  } else {
    filterAuthorTitle = DATABOOKS.filter(
      (book) =>
        book.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        book.author.toLowerCase().includes(e.target.value.toLowerCase())
    );
  }

  if (filterAuthorTitle === "") {
    return `
    <h2>No se ha encontrado el libro que buscas<h2>
    `;
  } else {
    FILTEREDBOOKS = filterAuthorTitle;
  }

  templateGalleryBooks(FILTEREDBOOKS);

  console.log(FILTEREDBOOKS);
};

const authorOrTitleFilter = () => {
  const filterSection = document.querySelector("#filters");

  const divAuthorTitleFilter$$ = document.createElement("div");
  divAuthorTitleFilter$$.id = "authorTitleFilter";
  divAuthorTitleFilter$$.classList = "authorTitleFilter";

  const byAutorTitle$$ = document.createElement("h4");
  byAutorTitle$$.textContent = "Filtrar por Autor o Título";
  divAuthorTitleFilter$$.appendChild(byAutorTitle$$);

  const filterByAutorTitle$$ = document.createElement("input");
  filterByAutorTitle$$.type = "text";
  filterByAutorTitle$$.id = "searchByTitleOrAuthor";
  filterByAutorTitle$$.classList = "searchByTitleOrAuthor";
  divAuthorTitleFilter$$.appendChild(filterByAutorTitle$$);

  filterByAutorTitle$$.addEventListener("input", searchByAuthorTitle);

  filterSection.appendChild(divAuthorTitleFilter$$);
};

const searchByPrice = (e) => {
  let filterPrice = [];

  if (FILTEREDBOOKS.length) {
    filterPrice = FILTEREDBOOKS.filter((book) => book.price <= e.target.value);
  } else {
    filterPrice = DATABOOKS.filter((book) => book.price <= e.target.value);
  }

  if (filterPrice === "") {
    return `
    <h2>No se ha encontrado el libro que buscas<h2>
    `;
  } else {
    FILTEREDBOOKS = filterPrice;
  }

  templateGalleryBooks(FILTEREDBOOKS);
  console.log(FILTEREDBOOKS);
};

const priceFilter = () => {
  const filterSection = document.querySelector("#filters");

  const divPrice$$ = document.createElement("div");
  divPrice$$.id = "priceFilter";
  divPrice$$.classList = "priceFilter";

  const byPriceTitle$$ = document.createElement("h4");
  byPriceTitle$$.textContent = "Filtrar por Precio";
  divPrice$$.appendChild(byPriceTitle$$);

  const filterByPrice$$ = document.createElement("input");
  filterByPrice$$.type = "number";
  filterByPrice$$.id = "searchByPrice";
  filterByPrice$$.classList = "searchByPrice";
  divPrice$$.appendChild(filterByPrice$$);

  filterByPrice$$.addEventListener("input", searchByPrice);

  filterSection.appendChild(divPrice$$);
};

// const searchByPrice = (e) => {
//   const filterPrice = DATABOOKS.filter((book) => book.price <= e.target.value);

//   if (e.target.value === "") {
//     templateGalleryBooks(DATABOOKS);
//   } else {
//     templateGalleryBooks(filterPrice);
//   }
//   templateGalleryBooks(filterPrice)

//   console.log(filterPrice);
// };



console.log(FILTEREDBOOKS);

const filterCleaner = () => {
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
  templateGalleryBooks(DATABOOKS);
};

export const printFilters = () => {
  document.querySelector("#mainFilters").innerHTML += templateFilters();
  editorialFilter();
  authorOrTitleFilter();
  priceFilter();
  filterCleaner();
};
