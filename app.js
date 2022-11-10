let slide = document.querySelectorAll('.slide');
var current = 0;

function cls(){
    for(let i = 0; i < slide.length; i++){
        slide[i].style.display = 'none';
    }
}
function next(){
    cls();
    if(current === slide.length-1) current = -1;
    current++;
    slide[current].style.display = 'block';
    slide[current].opacity.display = '0.4';
}
function start(){
    cls();
    slide[current].style.display = 'block';
}
start();
