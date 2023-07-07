import "./GalleryCards.css";
import { DATABOOKS } from "../../Data/Data";

export const templateGalleryBooks = (books) => {
  const galleryBooks = document.querySelector("#mainGallery");

  galleryBooks.innerHTML = "";

  const gallery = document.createElement("div");
  gallery.classList.add("gallery");

  const ulGallery = document.createElement("ul");
  ulGallery.classList.add("ulGallery");

  for (const book of DATABOOKS) {
    const li = document.createElement("li");

    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");

    const bookImg = document.createElement("div");
    bookImg.classList.add("bookImg");
    const img = document.createElement("img");
    img.src = book.cover;
    img.alt = book.title + " cover";
    bookImg.append(img);
    bookCard.append(bookImg);

    const title = document.createElement("h3");
    title.textContent = book.title;
    bookCard.append(title);

    const author = document.createElement("h4");
    author.textContent = book.author;
    bookCard.append(author);

    const editorial = document.createElement("p");
    editorial.textContent = book.editorial;
    bookCard.append(editorial);

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = book.price + "€";
    bookCard.append(price);

    li.append(bookCard);

    ulGallery.append(li);
  }

  gallery.append(ulGallery);

  document.body.append(gallery);
  galleryBooks.append(gallery);

};
