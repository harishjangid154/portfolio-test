const tl = gsap.timeline( { defaults: { ease: "power1.out"}});

tl.to(".text",{y: "0%",duration: 1, stagger : 0.5});
tl.to(".slider",{x: "0%", duration: 1.5,delay: 1});
tl.to(".slider",{x: "-100%", duration: 1});
tl.to(".intro__slide",{x: "-100%", duration: 1},"-=1");


