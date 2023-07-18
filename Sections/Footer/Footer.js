import "./Footer.css"

const Footer = () => {
    const footer = document.createElement("footer");

    const lnkIn = document.createElement("a");
    lnkIn.href = "https://www.linkedin.com/in/jenifferbalabuch/";
    lnkIn.target = "blank";
    const lnkInImg = document.createElement("img");
    lnkInImg.src = "LinkedInLogo.png";
    lnkInImg.alt = "LinkedIn Logo";
    lnkIn.appendChild(lnkInImg);

    const gitHub = document.createElement("a");
    gitHub.href = "https://github.com/JCBalabuch";
    gitHub.target = "blank";
    const gitHubImg = document.createElement("img");
    gitHubImg.src = "GitHubLogo.png";
    gitHubImg.alt = "Github Logo";
    gitHub.appendChild(gitHubImg);

    const paragraph = document.createElement("p");
    paragraph.textContent = "Created by Jeniffer Balabuch";

    const jcbs = document.createElement("img");
    jcbs.src = "LogoJCBS.png";
    jcbs.alt = "Personal Logo";

    footer.appendChild(lnkIn);
    footer.appendChild(gitHub);
    footer.appendChild(paragraph);
    footer.appendChild(jcbs);

    document.body.appendChild(footer);

}

export default Footer;