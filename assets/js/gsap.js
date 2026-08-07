// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    // gsap code here! 
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1080px)", () => {
    const introTl = gsap.timeline();

            
    });
    // 모바일 (768px 이하): 
    mm.add("(max-width: 768px)", () => {



    });


});