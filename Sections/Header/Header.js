import "./Header.css";

import leftHeader from "../LeftHeader/LeftHeader";
import navCenterHeader from "../CenterHeader/CenterHeader";
import { linksNav } from "../../Data/Data";
import rightHeader from "../RightHeader/RightHeader";

const templateHeader = () => {
  return `
  ${leftHeader()}
  ${navCenterHeader(linksNav)}
  ${rightHeader()}
  `;
};

const changeTheme = () => {
  const themeBtn = document.querySelector("#themeMode");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
};

const Header = () => {
  document.querySelector("header").innerHTML += templateHeader();
  changeTheme();
};

export default Header;
