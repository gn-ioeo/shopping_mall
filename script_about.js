

var th = document.getElementsByClassName('th');
var main2 = document.getElementById('main2')

console.log(th);



for (var i = 0; i<th.length; i++) {
  th[i].addEventListener("click", function(e) {
    main2.src = e.target.src;
  })  
}

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