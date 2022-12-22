/*Name this external file gallery.js*/

function upDate(previewPic) {
  ele = document.getElementById("image");
  ele.style.backgroundImage =
    "url( ' " + previewPic.getAttribute("src") + " ' )";
  ele.innerHTML = previewPic.getAttribute("alt");
}

function unDo() {
  ele = document.getElementById("image");
  ele.style.backgroundImage = "url('')";
  ele.innerHTML = "Hover over an image below to display here.";
}
