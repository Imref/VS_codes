function setup() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    var sizeWith = 250;
    var sizeHigh = 50;
    
    var color = 'red'
    
    var horizontal = 100;
    var vertical = 75;
    
    context.fillStyle = color;
    context.fillRect(horizontal,vertical,sizeWith,sizeHigh);
    
    color = 'white'
    var horizontal = 100;
    var vertical = 125;
    
    context.fillStyle = color;
    context.fillRect(horizontal,vertical,sizeWith,sizeHigh);
    
    color = 'green'
    var horizontal = 100;
    var vertical = 175;
    
    context.fillStyle = color;
    context.fillRect(horizontal,vertical,sizeWith,sizeHigh);
}

setup();