
 
const button1 = document.querySelector('.a1');
const button2 = document.querySelector('.a2');
const button3 = document.querySelector('.a3');
const popup = document.querySelector('.popup');
const close = document.querySelector('.fa-times-circle');

button1.addEventListener('click', () =>{
    popup.style.display = 'block';
});
button2.addEventListener('click', () =>{
    popup.style.display = 'block';
});
button3.addEventListener('click', () =>{
    popup.style.display = 'block';
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
});
popup.addEventListener('click', () => {
    popup.style.display = 'none';
});


document.querySelector('.popupCopy').innerHTML = "<h3>Contact OUR TEAM here: + 27 72 486 0618<br><br>Or send us an email at <a href='mailto:shellyd@saharvest.org' class='popupLink'>shellyd@saharvest.org</a></h3>";



