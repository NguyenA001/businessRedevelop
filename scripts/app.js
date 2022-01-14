let facebook = document.getElementById('logoLINK');
let twitter = document.getElementById('logoLINK2');
let searchBar = document.getElementById('search');
let item = document.getElementsByClassName('item');



facebook.addEventListener('click',function(e){
    window.open('https://www.facebook.com/bunthaispices/', '_blank');
});

twitter.addEventListener('click',function(e){
    window.open('https://twitter.com/ThaiSpicesLodi', '_blank');
});


// function findWord(text){
//     document.querySelector("#output").textContent="String found? " + Window.findWord(text);
// }



console.log(item);
searchBar.addEventListener("keyup", function(e){
    if(item.value == searchBar.value){
        
    }
});
