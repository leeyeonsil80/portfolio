const introTl = gsap.timeline();

introTl
.to(".site-header",{
    width:250,
    duration:0.8,
    ease:"power3.inOut"
})
.to("main",{
    width:"calc(100% - 250px)",
    duration:0.8,
    ease:"power3.inOut"
}, "<");