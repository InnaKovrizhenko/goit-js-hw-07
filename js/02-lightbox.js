import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

function createPictures(item) {
  const el = item
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
  </a>`;
    })
    .join("");
  return el;
}

const gallery = document.querySelector(".gallery");
gallery.innerHTML = createPictures(galleryItems);

gallery.addEventListener("click", onClickPicture);

function onClickPicture(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
