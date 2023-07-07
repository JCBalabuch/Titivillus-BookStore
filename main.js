import "./style.css";

import Header from "./Sections/Header/Header";
import Home from "./Pages/Home/Home";
import BookClub from "./Pages/BookClub/BookClub";
import About from "./Pages/About/About";
import Footer from "./Sections/Footer/Footer";

Header();
Home();
Footer();

document.querySelector("#homeLink").onclick = Home;
document.querySelector("#bookClubLink").onclick = BookClub;
document.querySelector("#aboutLink").onclick = About;