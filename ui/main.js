var button = document.getElementById('counter');
var counter = 2;
button.onClick = function() {
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter;
  };
console.log('Loaded!');

var img = document.getElementById('imageico');
var marginLeft=0;
function moveRight()
{
    marginLeft = marginLeft + 5;
    img.style.marginLeft= marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);
};
