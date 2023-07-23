import "./Home.css";
import Hero from "../../Sections/Hero/Hero";
import { printFilters } from "../../Sections/TemplateFilters/TemplateFilters";
import { DATABOOKS } from "../../Data/Data";
import { printBooks } from "../../Sections/Filters/Filters";



const templateHome = () => {
  return `
    <div id="homeSection">
      ${Hero()}
      <div id="mainTemplate">
        <div id="mainFilters"></div>
        <div id="mainGallery"></div>
      </div>
    </div>
    `;
};

const Home = () => {
  document.querySelector("main").innerHTML = templateHome();
  printFilters();
  printBooks(DATABOOKS);
};

export default Home;