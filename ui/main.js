var button = document.getElementById('counter');
button.onClick = function() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if( request.readyState === XMLHttpRequest.DONE) {
        if (request.state === 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter;
        }
    }
    
  };
 request.open('GET','http://souravagarwal54321.imad.hasura-app.io/counter');
 request.send(null);
 
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
