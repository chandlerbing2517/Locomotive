var tl=gsap.timeline();
tl.from("#navbar h3",{
    delay:0.5,
    y:-50,
    opacity:0,
    duration:1,
    stagger:0.3
})
tl.from("#main h1",{
    x:-500,
    opacity:0,
    stagger:0.5,
    duration:2,
})
tl.from("img",{
    x:100,
    opacity:0,
    rotate:45,
    stagger:0.5,
    duration:2,
})
