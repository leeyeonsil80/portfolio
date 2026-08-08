// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  // gsap code here! 


const mq = window.matchMedia('(min-width: 769px)');

function initNavLineHover() {
  document.querySelectorAll('.nav-link').forEach(link => {
    const line = link.querySelector('.nav-line');

    link.addEventListener('mouseenter', link._onEnter = () => {
      gsap.to(line, {
        scaleX: 1,
        transformOrigin: 'left center',
        duration: 0.4,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    });

    link.addEventListener('mouseleave', link._onLeave = () => {
      gsap.to(line, {
        scaleX: 0,
        transformOrigin: 'right center',
        duration: 0.35,
        ease: 'power2.in',
        overwrite: 'auto'
      });
    });
  });
}

function removeNavLineHover() {
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link._onEnter) link.removeEventListener('mouseenter', link._onEnter);
    if (link._onLeave) link.removeEventListener('mouseleave', link._onLeave);

    // 라인 상태 초기화 (혹시 켜진 채로 넘어갔을 경우 대비)
    const line = link.querySelector('.nav-line');
    gsap.set(line, { scaleX: 0 });
  });
}

function handleBreakpoint(e) {
  if (e.matches) {
    initNavLineHover();   // 769px 이상: 이벤트 등록
  } else {
    removeNavLineHover();  // 768px 이하: 이벤트 제거
  }
}

handleBreakpoint(mq);        // 최초 실행 시 현재 상태 반영
mq.addEventListener('change', handleBreakpoint); // 리사이즈로 브레이크포인트 넘나들 때 대응


  // 브레이크 포인트
  const mm = gsap.matchMedia();
    // PC (769px 이상): 
    mm.add("(min-width: 769px)", () => {



    });
  mm.add("(min-width: 1080px)", () => {
    const introTl = gsap.timeline();

            
    });
    // 모바일 (768px 이하): 
    mm.add("(max-width: 768px)", () => {



    });


});