var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

console.log(h);

$(document).ready(function(){
  $('div#home').css("height", h - 72);
});