var rect = document.querySelector("#center");
console.log(rect);
rect.addEventListener("mousemove", function(details){
    console.log(details,"g");
   var rectanglelocation = rect.getBoundingClientRect();
   var insiderectval = details.clientX - rectanglelocation.left ;
   console.log(rectanglelocation,"y");
   console.log(insiderectval);
   if(insiderectval<rectanglelocation.width/2){
    var redcolor = gsap.utils.mapRange(0, rectanglelocation.width/2, 255, 10, insiderectval);
    console.log(redcolor);
    gsap.to(rect,{
        backgroundColor:`rgb(${redcolor}, 123, 0)`,
        ease: Power4 ,

    });
   }
   else{
    var bluecolor = gsap.utils.mapRange(rectanglelocation.width/2, 0, 255, 10, insiderectval);
    gsap.to(rect,{
        backgroundColor:`rgb(90, ${bluecolor}, 50)`,
        ease: Power4 ,
        
    });
    console.log(bluecolor);
   }
})

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor: "indianred"
        
    })
})
