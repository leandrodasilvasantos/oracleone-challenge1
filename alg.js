var str = document.querySelector("#boxMain");
var hide = document.getElementById('boxScreen');
var newStringENC = '';
var newStringDESENC = '';

function encript(newStringENC) {
  newStringENC = str.value;
	newStringENC = newStringENC.toLowerCase();
  newStringENC = newStringENC.replaceAll(/e/gi, "enter").replaceAll(/i/gi, "imes").
  replaceAll(/a/gi, "ai").replaceAll(/o/gi, "ober").replaceAll(/u/gi, "ufat");
  console.log(newStringENC);
  document.getElementById('boxScreen').value = newStringENC;
  hide.style.backgroundImage = 'none';
	return newStringENC;
}
function desencript(newStringENC) {
  newStringDESENC = str.value;
	newStringDESENC = newStringDESENC.toLowerCase();
  newStringDESENC = newStringDESENC.replaceAll("enter", "e").replaceAll("imes", "i").
  replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
  console.log(newStringDESENC);
  document.getElementById('boxScreen').value = newStringDESENC;
  hide.style.backgroundImage = 'none';
	return newStringDESENC;
}
function copyText() {
  var content = document.getElementById('boxScreen').value;
  navigator.clipboard.writeText(content);
}
function hideIcon() {
  hide.style.backgroundImage = '';
  hide.style.backgroundUrl = '';
}



