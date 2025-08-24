// gsap.from("h1",
//     {
//         opacity:0,
//         duration:2,
//         y:30,
//         delay:1,
//         stagger:1
//     }
// )
gsap.to("#box",{
    x:1200,
    duration:1,
    delay:2,
    rotate: 360,
    repeat:-1,
    yoyo:true
})