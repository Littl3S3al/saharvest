
 
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


document.querySelector('.popupCopy').innerHTML = "<h3>Contact Alan on his private number: +27826511313<br><br>Or send him an email at <a href='mailto:alan@saharvest.org' class='popupLink'>alan@saharvest.org</a></h3>";



