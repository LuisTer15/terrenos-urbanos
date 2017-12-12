var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

$(document).ready(function(){
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  $('div#home_demo').css("height", h);
});