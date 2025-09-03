let photos = ["https://i.ytimg.com/vi/1z9mbQk58B0/hq720.jpg",
  "https://cdn-img.secondsout.com/uploads/content/1749491663793993748/mike-tyson-in-his-prime.jpg","https://images-cdn.ubuy.co.in/635dead3f9cee579cd431074-buyartforless-mike-tyson-3-heavyweight.jpg"
];
let index = 0;

function showPhoto() {
  document.getElementById("photo").src = photos[index];
}

function nextPhoto() {
  index = (index + 1) % photos.length; // loop back to start
  showPhoto();
}

function prevPhoto() {
  index = (index - 1 + photos.length) % photos.length; // loop back to last
  showPhoto();
}
