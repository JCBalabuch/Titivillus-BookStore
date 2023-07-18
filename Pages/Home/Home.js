import "./Home.css";
import Hero from "../../Sections/Hero/Hero";
import { DATABOOKS } from "../../Data/Data";
import { printFilters } from "../../Sections/TemplateFilters/TemplateFilters";
import { printGallery } from "../../Sections/GalleryCards/GalleryCards";



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
  printGallery(DATABOOKS);
};


export default Home;
