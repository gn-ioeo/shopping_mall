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

    var scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);

    if(scrollTop > 600) {
        btn.classList.remove("invisible")
    }
    else{
        btn.classList.add("invisible")
    }

    if(scrollTop>200){
        navi.classList.remove("na")
    } else{
        navi.classList.add("na")
    }
})

btn.addEventListener("click", function() {
    document.documentElement.scrollTop=0;
})