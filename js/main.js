let IconMenu = document.querySelector("#openMenu");
let menu = document.querySelector(".menu");
let closeResrv = document.querySelector("#closeResrv");
let btnResrv = document.querySelectorAll(".btnresrv");
let reservation = document.querySelector("#reservation");

IconMenu.onclick = () => {
   IconMenu.classList.toggle('fa-times');
   menu.classList.toggle('active');
}

let header = document.querySelector("#header");
window.onscroll = function () {
   // console.log(this.scrollY);
   if (this.scrollY >= 200) {
      header.classList.add("addbg");
   } else {
      header.classList.remove("addbg");
   }
}
closeResrv.onclick = () => {
   reservation.classList.remove('active');
}

btnResrv.forEach(boxa => {
   boxa.onclick = () => {
      reservation.classList.add('active');
   }
});

var swiper = new Swiper(".home-slider", {
   spaceBetween: 0,
   centeredSlides: true,
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   loop: true,
});

var swiper = new Swiper(".swiper-gst-bk", {
   slidesPerView: 3,
   spaceBetween: 30,
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
   },
   loop: true,
   grabCursor: 'true',
   breakpoints: {
      0: {
         slidesPerView: 1,
      },

      650: {
         slidesPerView: 2,
      },

      950: {
         slidesPerView: 3,
      },
   }
});