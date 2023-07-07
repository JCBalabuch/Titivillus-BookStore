import "./BookClub.css";

import { invitationBookClub } from "../../Data/Data";

const TemplateBookClub = () => {
    return `
        <div class = "bookClub">
            <img src="./assets/TitivillusBI.jpg" alt="Logo Titivillus BookStore">
            <h2>Book Club</h2>
            <p>${invitationBookClub}</p>
            <button>📚 Únete 📚</button>
        </div>
    `
};

const BookClub = () => {
    document.querySelector("main").innerHTML = TemplateBookClub();
}

export default BookClub; 