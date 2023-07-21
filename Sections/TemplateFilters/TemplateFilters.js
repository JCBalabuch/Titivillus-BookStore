import "./TemplateFilters.css";
import { DATABOOKS } from "../../Data/Data";
import { searchByAuthorTitle, searchByEditorial, searchByPrice } from "../Filters/Filters";


const templateFilters = () => {
  return `
    <div id="filters-section" class="filters-section">
      <div id="filters" class="filters"></div>
      <button id="searchAll" class="searchAll">Buscar</button>
      <button id="clearFilters" class="clearFilters">Limpiar Filtros</button>
    </div>
    `;
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

export const printFilters = () => {
    document.querySelector("#mainFilters").innerHTML = templateFilters();
    editorialFilter();
    authorOrTitleFilter();
    priceFilter();
    // filterBooks();
    // filterCleaner();
  };