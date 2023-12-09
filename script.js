function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });
}







// Shery.mouseFollower({
//     //Parameters are optional.
//     skew: true,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: .2,
//     width: "10px",
// });
// Shery.makeMagnet(".magnet" /* Element to target.*/, {
//     //Parameters are optional.
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
// });

// kursor
// new kursor({
//     type: 2
// })

menu = document.querySelector(".menu");
menu.onclick = function () {
    navBar = document.querySelector(".nav2");
    navBar.classList.toggle("active");
}

// var crsr = document.querySelector(".cursor");
// var main = document.querySelector("main");

// main.addEventListener("mousemove", function (dets) {
//     crsr.style.left = dets.x + "px"
//     crsr.style.top = dets.y + "px"
// })

function cursorEffect() {
    var cursor = document.querySelector(".cursor")
    var pg1 = document.querySelector("main")

    pg1.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })

    })

    pg1.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
        })

    })


    pg1.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0,
        })

    })
}
cursorEffect();

var crsr = document.querySelector(".cursor");
// var hover = document.querySelector(".magnet");

// hover.addEventListener("mouseenter", function () {
//     gsap.to(".cursor", {
//         scale: 5,
//     })
// })
// hover.addEventListener("mouseleave", function () {
//     gsap.to(".cursor", {
//         scale: 1,
//     })
// })






var tl = gsap.timeline();
tl
    .from("header .nav1, .container .nav2, .nav3", {
        y: -30,
        stagger: .2,
        duration: .5,
        ease: Power2,

    })

    .from(".hero .para1", {
        scale: .8,
        opacity: 0,
        stagger: .2,
        duration: .5,
        ease: Power4,
    })

    .from(".hero .image1 img", {
        scale: .8,
        y: -30,
        opacity: 0,
        stagger: .2,
        duration: .5,
        ease: Power4,
    })

    .from(".socialicons", {
        scale: 1.3,
        opacity: 0,
        stagger: .2,
        duration: .5,
        ease: Power4,
    })





var tl2 = gsap.timeline();
tl2
    .from(".section2 .title2, .para2, .vid2", {
        y: 300,
        opacity: 0,
        ease: Power4,
        stagger: .3,
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            start: "top 70%",
            end: "bottom 130%",
            scrub: 2,
        }
    })






var tl3 = gsap.timeline();
tl3
    .to(".page3 .section3 .container3 .heading h1", {
        y: "0%",
        ease: Power4,
        duration: .5,
        scrollTrigger: {
            trigger: ".container3",
            scroller: "body",
            start: "top 100%",
            end: "bottom 150%",
            scrub: 3,
        }

    })









var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     duration:2000,
    //     disableOnInteraction: true,
    //   },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var crsrh3 = document.querySelector("#crsrh3")
var swiperdiv = document.querySelector(".swiperdiv")
swiperdiv.addEventListener("mouseenter", function () {
    crsrh3.style.display = "block"
    crsr.style.mixBlendMode = "normal"
    crsr.style.backgroundColor = "#000"
    gsap.to(".cursor", {
        scale: 5,
    })
})
swiperdiv.addEventListener("mouseleave", function () {
    crsrh3.style.display = "none"
    crsr.style.mixBlendMode = "difference"
    crsr.style.backgroundColor = "#fff"
    gsap.to(".cursor", {
        scale: 1,
    })
})



