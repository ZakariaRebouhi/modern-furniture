const imageSlide = document.querySelectorAll(".slide")
const btnSlide = document.querySelectorAll(".slide-btn")

var mediaQuery = window.matchMedia("(max-width: 912px)")
var height 
    mediaQuery.matches?height=" height: 50vh;":height=" height: 100vh;"

//responsive Image size
mediaQuery.addEventListener("change",function(){
    // alert("media query chnaged")
    if(mediaQuery.matches) {
        imageSlide.forEach(element => {
            if(element.offsetHeigth!=0){
                element.style=" height: 50vh;"
                height = " height: 50vh;"
            }
        });
    }
    else  {
        imageSlide.forEach(element => {
            if(element.offsetHeigth=!0){
                element.style=" height: 100vh;"
                height = " height: 100vh;"

            }
        });
    }
})
//controle button
btnSlide.forEach((element,i) => {
    element.addEventListener("click",()=>{
      
        imageSlide.forEach((element,i) => {
            element.style=" height: 0;"
            btnSlide[i].style = " background-color:transparent;"
        });
        imageSlide[i].style=height
        element.style=" background-color: skyblue ;"
    }) 
});

//auto play

var index=0;
setInterval(function(){ 
    if(index>2)  index=0;
    imageSlide.forEach((element,i) => {
        element.style=" height: 0;"
        btnSlide[i].style = " background-color:transparent  ;"
    });
     imageSlide[index].style=height
    btnSlide[index].style=" background-color: skyblue ;"
   
    index=index+1;
}, 3000);