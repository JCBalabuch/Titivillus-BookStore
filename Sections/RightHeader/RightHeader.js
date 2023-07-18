import "./RightHeader.css";

const rightHeader = () => {
  return `
  <div class = "rightHeader">
    <button id = "signIn">Sign in</button>
    <button id = "logIn">Log in</button>
    <button>
        <img src="CestaCompraTTV.png" alt="Shopping Cart">
    </button>
    <button id = "themeMode">
        <img id="img-mode" src="day.png" alt="Clear mode">
    </button>
  </div>
  `;
};

export default rightHeader;
