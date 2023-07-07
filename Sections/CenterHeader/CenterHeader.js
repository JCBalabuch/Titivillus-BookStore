import "./CenterHeader.css";

const navCenterHeader = (links) => {
    return `
    <nav class="centerHeader">
        <ul>
            ${links.map((link) => `
                <li>
                    <a href="${link.link}" id="${link.id}">${link.name}</a>
                </li>
            `).join("")}
        </ul>
    </nav>
    `
};

export default navCenterHeader;