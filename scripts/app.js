let facebook = document.getElementById('logoLINK');
let twitter = document.getElementById('logoLINK2');

console.log(facebook);

facebook.addEventListener('click',function(e){
    window.open('https://www.facebook.com/bunthaispices/', '_blank');
});

twitter.addEventListener('click',function(e){
    window.open('https://twitter.com/ThaiSpicesLodi', '_blank');
});
