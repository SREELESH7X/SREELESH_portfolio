for (var i = 1; i <= 19; i++) {

  document.getElementById("img_area").innerHTML += '<img src="img/' + i + '.jpg" onclick = "show(' + i + ')" > ';
}

function show(s) {
  document.getElementById("frame").style.display = "block";
  document.getElementById("pic").src = "img/" + s + ".jpg";


}

function hide() {
  document.getElementById("frame").style.display = "none";
}
