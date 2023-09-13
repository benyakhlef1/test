let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains = document.getElementById('mountains');
let mountains2 = document.getElementById('mountains2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
//let trees = document.getElementById('trees');

let nouvil = document.querySelector('.nouvil');
window.onscroll = function(){
    let value = scrollY;
    //console.log(value); كاتشوف فين نتا
    stars.style.left = value + 'px'; // the stars  are moviing cuz of absolute
    moon.style.top = value * 3 + 'px'; // the moon are getting down fast
    mountains.style.top = value * 2 + 'px';
    mountains2.style.top = value * 1.5 + 'px';
    river.style.top = value   + 'px';
    boat.style.top = value   + 'px'; 
    boat.style.left = value  * 1 + 'px'; // the boat going left
    nouvil.style.fontSize = value   + 'px'; // nouvil getting bigger
    if(scrollY >= 120 ){
        nouvil.style.fontSize = 120   + 'px'; //تحدد nuvil getting stop being bigger
        nouvil.style.position = 'fixed'; // Fixing nouvil lofo 
    }



}







