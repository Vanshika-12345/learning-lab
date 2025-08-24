var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");
main.addEventListener("mousemove",function(dets)
{
     gsap.to("#cursor",
        {
            x:dets.x,
            y:dets.y,
            duration:1,
        }
     )
})
imageDiv.addEventListener("mouseenter", function() {
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 3,  // scale factor
        duration: 0.3,
        ease: "power2.out",
        
    });
});

imageDiv.addEventListener("mouseleave", function() {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,  
        duration: 0.3,
        ease: "power2.out",
    });
});