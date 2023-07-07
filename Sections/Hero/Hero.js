import "./Hero.css";
import { slogan } from "../../Data/Data";

const Hero = () => {
  return `
    <div class="hero">
        <div class="imgHero">
            <img src="./assets/TitivillusBI.jpg"/>
        </div>
        <div class="contentHero">
            <h1><span>Titivillus</span> BookStore</h1>
            <h3>${slogan}</h3>
        </div>
    </div>
    `;
};

export default Hero;