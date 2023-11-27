
  if((window.location.href.includes("destravandocodigomilhas")) && screen.width < 767){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
  }

  else if(window.location.href.includes("destravandocodigomilhas")){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
  }


  $(".itemContainer").mouseover(function(){
        $(this).children("p").css("display", "block");


  })

  $(".item").mouseout(function(){
    $(".descriptionCarousel").css("display","none");
})


    if (window.location.href.includes("sorteios")){
        var swiper = new Swiper(".swiper2", {
            pagination: {
              el: ".swiper-pagination",
            },
          });

    }

    if (window.location.href.includes("gerenciar")){
      var menu_btn = document.querySelector("#menu-btn");
      var sidebar = document.querySelector("#sidebar");
      var container = document.querySelector(".my-container");
      menu_btn.addEventListener("click", () => {
      sidebar.classList.toggle("active-nav");
      container.classList.toggle("active-cont");
});
    }