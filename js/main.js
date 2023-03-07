let iconMenu = document.getElementById('OpenMenu');
let menu = document.querySelector('.menu');

iconMenu.onclick = ()=>{
    iconMenu.classList.toggle('fa-times');
    menu.classList.toggle('active')
}

let header = document.getElementById('header');

window.onscroll = function(){
    console.log(this.scrollY)
    if (this.scrollY >= 200){
        header.classList.add('active')
    }
    else{
        header.classList.remove('active')
    }
}

var swiper = new Swiper(".home-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    spaceBetwnn:0,
    centeredSlides:true,
    autoplay:{
        delay:5000,
        disableOnInteraction: false,
    },
    loop:true
  });

  //reservation 

  let closeReser = document.getElementById("closeResrv");
  let reservation = document.getElementById('reservation');
  let btnResrv = document.querySelectorAll('btnResrv')

  closeReser.onclick = () => {
    reservation.classList.remove('active');
  }
  btnResrv.forEach(btn => {
    btn.onclick = () => {
        reservation.classList.add('active')
    }
  })