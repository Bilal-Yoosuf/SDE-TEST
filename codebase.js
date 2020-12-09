var images = document.getElementsByTagName("img");
// let imagesArray = Array.from(images);

for (let image of images) {
  var width = image.naturalWidth;
  var height = image.naturalHeight;
  if (width >= 500 && height >= 150) {
    image.classList.add("bigImage");
  }
}

var bigImages = document.getElementsByClassName("bigImage");

function addIframe(count) {
  function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  for (i = 0; i < count; i++) {
    console.log(bigImages[i]);
    bigImages[i].setAttribute("style", "display:inline-block");
    var div = document.createElement("div");
    div.style.cssText =
      "width:inherit;height:90px;background:red;curser:pointer";
    // div.id = "divId" + i;
    // div.onmouseover = () => {
    //   div.style.cssText = "background:red";
    // };
    insertAfter(div, bigImages[i]);
  }
}
addIframe(2);
