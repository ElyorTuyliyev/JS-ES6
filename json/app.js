var posts = document.getElementById("posts");
var comments = document.getElementById("comments");
var albums = document.getElementById("albums");
var photos = document.getElementById("photos");
var todos = document.getElementById("todos");
var users = document.getElementById("users");
function postsRun() {
  (async () => {
    var resPosts = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
    comments.innerHTML = "";
    comments.innerHTML = "";
    albums.innerHTML = "";
    photos.innerHTML = "";
    users.innerHTML = "";
    for (let i = 0; i < resPosts.length; i++) {
      posts.innerHTML += `<p class="posts__title"><b> title :  </b>  ${resPosts[i].title} <br> <b>body : </b> ${resPosts[i].body}</p>`;
    }
  })();
}

function commentsRun() {
  (async () => {
    var resComments = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    )
      .then((response) => response.json())
      .then((json) => {
        return json;
      });

    posts.innerHTML = "";
    albums.innerHTML = "";
    photos.innerHTML = "";
    todos.innerHTML = "";
    users.innerHTML = "";
    for (let i = 0; i < resComments.length; i++) {
      comments.innerHTML += `<p class="posts__title"> <b> name :  </b>  ${resComments[i].name} <br><b> email :  </b>  ${resComments[i].email} <br> <b>body : </b> ${resComments[i].body}</p>`;
    }
  })();
}
function albumsRun() {
  (async () => {
    var resAlbums = await fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => {
        return json;
      });

    posts.innerHTML = "";
    comments.innerHTML = "";
    photos.innerHTML = "";
    todos.innerHTML = "";
    users.innerHTML = "";
    for (let i = 0; i < resAlbums.length; i++) {
      albums.innerHTML += `<p class="posts__title"> <b> title :  </b>  ${resAlbums[i].title} </p>`;
    }
  })();
}

function photosRun() {
  (async () => {
    var resPhotos = await fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
    for (let i = 0; i < 100; i++) {
      posts.innerHTML = "";
      comments.innerHTML = "";
      albums.innerHTML = "";
      users.innerHTML = "";
      users.innerHTML = "";
      photos.innerHTML += ` <img src="${resPhotos[i].thumbnailUrl}" alt="">`;
    }
  })();
}

function todosRun() {
  (async () => {
    var resTodos = await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        return json;
      });

    posts.innerHTML = "";
    comments.innerHTML = "";
    albums.innerHTML = "";
    photos.innerHTML = "";
    users.innerHTML = "";
    for (let i = 0; i < resTodos.length; i++) {
      todos.innerHTML += `<p class="posts__title"> <b> title :  </b>  ${resTodos[i].title} <br> <b> completed :  </b>  ${resTodos[i].completed} </p>`;
    }
  })();
}
function usersRun() {
  (async () => {
    var resUsers = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        return json;
      });

    posts.innerHTML = "";
    comments.innerHTML = "";
    albums.innerHTML = "";
    photos.innerHTML = "";
    todos.innerHTML = "";
    for (let i = 0; i < resUsers.length; i++) {
      users.innerHTML += `<p class="users__wrapper"> <b> Name :  </b>  
      ${resUsers[i].name} <br>  <b> Username :  </b>  ${resUsers[i].username} 
      <br> <b> Email :  </b>  ${resUsers[i].email}
      <br> <b> Address :  </b>  <br>
      <b> street :  </b>  ${resUsers[i].address.street} <br>
      <b> suite :  </b>  ${resUsers[i].address.suite} <br>
      <b> city :  </b>  ${resUsers[i].address.city} <br>
      <b> zipcode :  </b>  ${resUsers[i].address.zipcode} <br>
       <b> geo : <br>
      <b> lat :  </b>  ${resUsers[i].address.geo.lat} <br>
      <b> lng :  </b>  ${resUsers[i].address.geo.lng} <br>
      <b> phone :  </b>  ${resUsers[i].phone} <br>
      <b> website :  </b>  ${resUsers[i].website} <br>
      <b> company : <br>
      <b>  name :  </b>  ${resUsers[i].company.name} <br>
      <b>  catchPhrase :  </b>  ${resUsers[i].company.catchPhrase} <br>
      <b>  bs :  </b>  ${resUsers[i].company.bs} <br>
      </p>`;
    }
  })();
}
