import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

function createPictures(items) {
  const el = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`;
    })
    .join("");

  return el;
}
const newPictures = createPictures(galleryItems);
const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", newPictures);

gallery.addEventListener("click", onClickPicture);

function onClickPicture(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;
  const instance = basicLightbox.create(`
    <img src= "${e.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  gallery.addEventListener("keydown", onEscClick);

  function onEscClick(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
