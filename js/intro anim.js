svg=document.querySelectorAll(".intro-slider  svg path")
animDel= 0;
svg.forEach((element ,i) => {
    animDel+=0.2
console.log(svg)
element.style.strokeDasharray = element.getTotalLength();
element.style.strokeDashoffset = element.getTotalLength();
element.style.animationDelay = animDel+"s";
console.log('leteler '+ i+' is '+element.getTotalLength()+ ' animDel= '+animDel)

});
