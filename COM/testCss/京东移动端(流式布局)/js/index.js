window.onload=function(){
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      //给搜索栏添加滑动事件
      var search=document.querySelector('.search');
      window.addEventListener('scroll',function(){
        search.style.top=0+'px';
        if(window.pageYOffset==0){
          search.style.top='';
        }
      },false);
}