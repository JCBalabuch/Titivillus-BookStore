import "./Home.css";
import Hero from "../../Sections/Hero/Hero";
import { templateGalleryBooks } from "../../Sections/GalleryCards/GalleryCards";
import { printFilters } from "../../Sections/Filters/Filters";
import { DATABOOKS } from "../../Data/Data";


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
  templateGalleryBooks(DATABOOKS);
};


export default Home;
