const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider-product');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let direction=-1;
slider.children[3].children[0].children[0].style="width: 200px; ";
slider.children[3].children[1].style="font-size: 1.5em; color:var(--light);";
slider.children[3].children[2].style="display: block;";
slider.children[3].children[0].style=" height: 250px;"


next.addEventListener('click', function() {
  direction = -1;

  carousel.style.justifyContent = 'center';
  slider.style.transform = 'translate(-20%)';
  
});


prev.addEventListener('click', function() {
  if (direction === -1) {
    direction = 1;
   
  }
  carousel.style.justifyContent = 'center';    
  slider.style.transform = 'translate(20%)';  
  
});






slider.addEventListener('transitionend', function() {
  
  if (event.propertyName=="transform"){
    

     // get the last element and append it to the front
  
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
    
  } else {
    slider.appendChild(slider.firstElementChild);
  

  }
  
  slider.style.transition = 'none';
  slider.style.transform = 'translate(0)';


  setTimeout(() => {
    slider.style.transition = 'all .5s';
  

    
  })


  
   

  }

slider.addEventListener('transitionstart', function() {
  if (event.propertyName=="transform"){
    for(i=0;i<slider.children.length;i++){
      slider.children[i].children[0].children[0].style="width: 150px; ";
      slider.children[i].children[1].style="font-size: 1em;  color:var(--dark); ";
      slider.children[i].children[0].style=" height: 150px;"
      slider.children[i].children[2].style="display: none;";
  }
  if(direction==-1){
      slider.children[4].children[0].children[0].style="width: 200px; ";
      slider.children[4].children[1].style="font-size: 1.5em; color:var(--light);";  
      slider.children[4].children[0].style=" height: 250px;"
      slider.children[4].children[2].style="display: block;";
    }else{
      slider.children[2].children[0].children[0].style="width: 200px; ";
      slider.children[2].children[1].style="font-size: 1.5em; color:var(--light);";  
      slider.children[2].children[0].style=" height: 250px;"
      slider.children[2].children[2].style="display: block;";
    }
  }

});
 
 

  
});
