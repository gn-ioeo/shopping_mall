var thumbnails = document.getElementsByClassName('thumbnail');
var caption = document.getElementById('caption');
var main = document.getElementById('main');
var thisIndex = 0;

var previousIndex = 0;

setInterval(navigate, 3000);


function navigate() {
  thisIndex++;

  if (thisIndex === thumbnails.length) {
    thisIndex = 0;
  }

  if (thisIndex === thumbnails.length) {
    thisIndex = 0;
  }

  


  main.src = thumbnails[thisIndex].src;
  

  thumbnails[thisIndex].classList.add("active");
  thumbnails[previousIndex].classList.remove("active");

  previousIndex = thisIndex;


}







// 2
var btn=document.getElementById("btn");
var navi = document.getElementById("navi")

window.addEventListener("scroll", function(){
    //문서 탑과 뷰포트 사이의 거리
    var scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);

    if(scrollTop > 600) {
        //탑버튼을 나타나게한다
        btn.classList.remove("invisible")
    }
    else{
        //탑버튼을 사라지게
        btn.classList.add("invisible")
    }

    if(scrollTop>200){
        navi.classList.remove("na")
    } else{
        navi.classList.add("na")
    }
})

//탑버튼을 클릭했을 때
btn.addEventListener("click", function() {
    document.documentElement.scrollTop=0;
})


//slide
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  ﻿  slidesPerView: 1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



  //다시보지않기
  var closeBtn2 = document.getElementById('close-btn2');
  var blockBtn = document.getElementById('block-btn');
  var promotion = document.getElementById('promotion');
  var promotion2 = document.getElementById('promotion2');
  var closeBtn3 = document.getElementById('close-btn3');
  var blockBtn2 = document.getElementById('block-btn2');



  // 처음 페이지가 로드되었을 때
  if (localStorage.getItem("blockedAt")) {
    promotion.classList.add("hidden");
  }

  // 닫기 버튼을 클릭했을 때
  closeBtn2.addEventListener("click", function () {
    promotion.classList.add("hidden");
  })

  // 블락 버튼을 클릭했을 때
  blockBtn.addEventListener("click", function () {
    promotion.classList.add("hidden");
    localStorage.setItem("blockedAt", new Date().toLocaleString());
  })



  if (localStorage.getItem("blockedAt")) {
    promotion2.classList.add("hidden");
  }

  // 닫기 버튼을 클릭했을 때
  closeBtn3.addEventListener("click", function () {
    promotion2.classList.add("hidden");
  })

  // 블락 버튼을 클릭했을 때
  blockBtn2.addEventListener("click", function () {
    promotion2.classList.add("hidden");
    localStorage.setItem("blockedAt", new Date().toLocaleString());
  })







