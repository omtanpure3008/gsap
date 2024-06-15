// gsap.from(".firstbox", {
//     x: 600,
//     // y: 100,
//     duration: 1,
//     yoyo: true,
// })

// gsap.from(".secondbox", {
//     x: 600,
//     // y: 100,
//     duration: 1,
//     delay: .5,
//     yoyo: true,
// })

// gsap.from(".thirdbox", {
//     scale: 0,
//     // y: 100,
//     duration: 2,
//     yoyo: true,
// })


// gsap.from(".thirdbox", {
//     scale: 0,
//     duration: 2,
//     scrollTrigger: {
//         trigger: ".thirdbox",
//         scroller: "body",
//         markers: "true",
//         start: "10px 60%",
//         end: "20px 40%",
//         scrub: true,
//     }
// })

let tl = gsap.timeline();


// tl.from(".box", {
//     y: -100,
//     opacity: 0,
//     duration: 2,
//     stagger: 1,
//     scrollTrigger: {
//         trigger: ".box",
//         scroller: "body",
//         markers: "true",
//         start: "10px 50%",
//         end: "20px 30%",
//         scrub: 3,
//     }
// })

// tl.to(".lower-card", {
//     backgroundColor: "green",
//     duration: 2,
//     delay: 1,
// })


tl.to(".f", {
    x: 800,
    duration: 2,
    delay: 1
})
tl.to(".s", {
    x: 800,
    duration: 2,
    delay: 1
})
tl.to(".t", {
    x: 800,
    duration: 2,
    delay: 1
})