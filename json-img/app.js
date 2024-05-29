const photosWrapper = document.getElementById("");

let photos = [];

(async () => {
  try {
    const albums = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await albums.json();
    photos = res;
    paginateAlbum();
    displayPages();
  } catch (error) {
    console.log(error);
  }
})();

function paginateAlbum(page = 1) {
  photosWrapper.innerHTML = "";
  photos
    .slice((page - 1) * 100, page * 100)
    .forEach(
      ({ thumbnailUrl, id }) =>
        (photosWrapper.innerHTML += `<div><h1>${id}</h1> <img src="${thumbnailUrl}" /></div>`)
    );
}

function displayPages() {
  const pages = photos.length / 100;
  pagination.innerHTML = "";
  for (let i = 0; i < pages; i++) {
    pagination.innerHTML += `<li><button onclick="paginateAlbum(${i + 1})">${
      i + 1
    }</button></li>`;
  }
}
