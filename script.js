var tl=gsap.timeline()
tl.to("#box1",{
    x:1000,
    rotate:360,
    duration:2,
    backgroundColor: "black",
    delay:2,
    scale:0.7,
})
tl.to("#box2",{
    x:1000,
    rotate:360,
    duration:2,
    backgroundColor: "blue",
    scale:0.7,
})
tl.to("#box3",{
    x:1000,
    rotate:360,
    duration:2,
    backgroundColor: "red",
    scale:0.7,
})