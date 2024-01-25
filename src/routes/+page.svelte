<script>
    import {gsap} from "gsap/dist/gsap";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
    import {TextPlugin} from "gsap/dist/TextPlugin";
    import {onMount} from "svelte";
    import iBackground from "$lib/assets/images/iiBackground.jpg";
    import cisBackground from "$lib/assets/images/cisBackground.png";
    import csBackground from "$lib/assets/images/csBackground.png";
    import ieeeLogo from "$lib/assets/images/ieeeLogo.png";
    import manipalLogo from "$lib/assets/images/manipalLogo.png";


    let hoveredChapter;
    let hoverBackgroundImageDiv;

    function handleChapterHover(event) {
        if (event.target.classList.contains("ieee-main")) {
            hoveredChapter = "ieee-main";
        } else if (event.target.classList.contains("ieee-cis")) {
            hoveredChapter = "ieee-cis";
        } else if (event.target.classList.contains("ieee-cs")) {
            hoveredChapter = "ieee-cs";
        }
    }

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(TextPlugin);
        ScrollTrigger.refresh();

        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.main-attraction',
                start: 'top -110%',
                end: 'bottom end',
                scrub: true,
                markers: false,
            },
        });


        timeline.to('.main-attraction', {
            scaleX: 1,
            scaleY: 1,
        });
        timeline.to('.main-links', {
            left: 300,
        }, "<");
        // timeline.to('.main-bg', {
        //     backgroundColor: "#191c1d",
        // });
        timeline.to('.text-left-in', {
            left: 20,
        }, "<");
        timeline.to('.text-right-in', {
            right: 20,
        }, "<");
        // timeline.to(".about-us-1", {
        //     y: -45,
        //     opacity: 0,
        // });
        // timeline.to(".about-us-2", {
        //     y: -35,
        //     opacity: 1,
        // });
        // timeline.to(".about-us-2", {
        //     y: -75,
        //     opacity: 0,
        // }, ">");
        // timeline.to(".about-us-3", {
        //     y: -35,
        //     opacity: 1,
        // });
        // timeline.to(".about-us-3", {
        //     y: -120,
        //     opacity: 0,
        // }, ">");


        let timelineAnother = gsap.timeline({
            scrollTrigger: {
                trigger: '.about-us-attraction',
                start: 'bottom top',
                end: 'bottom -130%',
                scrub: true,
                // markers: true,
            }
        });
        timelineAnother.to(".about-us-1", {
            y: -25,
            opacity: 0,
        });
        timelineAnother.to(".about-us-2", {
            top: 27,
            opacity: 1,
        });
        timelineAnother.to(".about-us-2", {
            y: -10,
            opacity: 0,
        }, ">");
        timelineAnother.to(".logo-navbar-ieee", {
            opacity: 0,
        }, "<");
        timelineAnother.to(".logo-navbar-manipal", {
            opacity: 1,
        }, "<")
        timelineAnother.to(".about-us-3", {
            top: 27,
            opacity: 1,
        });

        // timelineAnother.to(".about-us-3", {
        //     y: -10,
        //     opacity: 0,
        // }, ">");
        let showcaseTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.showcase-cards-div',
                start: 'bottom top',
                end: 'bottom -200%',
                scrub: true,
                markers: true,
            }
        });

        showcaseTimeline.to('.showcase-event-1', {
            rotate: -30,
            y: -(window.innerHeight),
            x: -350,
            opacity: 0,
        });
        showcaseTimeline.to('.showcase-event-2', {
            rotate: -30,
            y: -(window.innerHeight),
            x: -350,
            opacity: 0,
        });
        showcaseTimeline.to('.showcase-event-3', {
            rotate: -30,
            y: -(window.innerHeight),
            x: -350,
            opacity: 0,
        });
        showcaseTimeline.to('.showcase-event-4', {
            rotate: -30,
            y: -(window.innerHeight),
            x: -350,
            opacity: 0,
        });
    })
</script>
<div class="h-fit w-full">
    <div class="h-[300vh] w-full sticky top-0">
        <div class="h-[100vh] bg-surface sticky top-0 left-0 right-0 bottom-0 scale-x-[3.2] scale-y-[3.2] grid grid-cols-1 sm:grid-cols-[20%_60%_20%] lg:grid-cols-[25%_50%_25%] xl:grid-cols-[30%_40%_30%] gap-y-2 grid-rows-3 w-full main-attraction overflow-hidden">
            <div class="absolute top-0 bottom-0 w-full h-full transition-all hover-background-image scale-0 opacity-0"
                 bind:this={hoverBackgroundImageDiv}>
                {#if hoveredChapter === "ieee-main"}
                    <img src="{iBackground}" alt="random course"
                         class="h-full w-full object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl absolute top-0 bottom-0 z-0">
                {:else if hoveredChapter === "ieee-cs"}
                    <img src="{csBackground}" alt="random course"
                         class="h-full w-full object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl absolute top-0 bottom-0 z-0">
                {:else if hoveredChapter === "ieee-cis"}
                    <img src="{cisBackground}" alt="random course"
                         class="h-full w-full object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl absolute top-0 bottom-0 z-0">
                {/if}
            </div>
            <div class="absolute -left-[100%] text-left-in h-full items-center justify-start px-10 w-full flex p-5 z-[0]">
                <p class="heading-font text-3xl md:text-6xl lg:text-7xl tracking-wider leading-[1.2] text-on-surface sm:-rotate-90 sm:pb-[100px] md:pb-[300px] xl:pb-[0px]">
                    Manipal
                </p>
            </div>
            <!--        <div class="col-start-1 row-start-1 col-span-3 row-span-3 gradient-text blur-2xl rounded-2xl -z-[5]">-->

            <!--        </div>-->
            <div class="absolute -right-[100%] text-right-in h-full items-center justify-end px-10 w-full flex z-[0]">
                <p class="heading-font text-3xl md:text-6xl lg:text-7xl tracking-wider leading-[1.2] text-on-surface sm:-rotate-90 sm:pt-[100px] md:pt-[305px] xl:pt-[0px]">
                    Bangalore
                </p>
            </div>
            <!--        <div class="bg-primary-container col-start-1 row-start-1 h-full w-full relative">-->
            <!--            {#if hoveredChapter === "ieee-main"}-->
            <!--                <img src="{iBackground}" alt="random course"-->
            <!--                     class="h-full w-full object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl absolute top-0 bottom-0 z-0">-->
            <!--            {/if}-->
            <!--        </div>-->
            <div class="col-start-1 sm:col-start-2 row-start-2 rounded-2xl bg-primary-container h-full w-full flex flex-col items-center justify-center relative group cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,31,36,1)] transition-all duration-300 overflow-hidden ieee-main"
                 on:mouseenter={handleChapterHover}>
                <p class="heading-font text-3xl md:text-6xl lg:text-8xl text-on-primary-container tracking-wide transition-all duration-300 group-hover:tracking-wider group-hover:drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] z-[1]">
                    IEEE
                </p>
                <a href="/our-team" class="main-links">
                    <p class="primary-font text-[0.45rem] sm:text-[0.75rem] tracking-wide group-hover:tracking-wider transition-all duration-300 text-on-primary-container absolute top-4 left-[38%] sm:left-[28%] md:left-[26%] lg:left-[22%] xl:left-[14%] z-[1]">
                        events
                    </p>
                </a>
                <a href="/our-team" class="main-links">
                    <p class="primary-font text-[0.45rem] sm:text-[0.75rem] text-on-primary-container tracking-wide group-hover:tracking-wider transition-all duration-300 absolute top-4 right-[38%] sm:right-[28%] md:right-[26%] lg:right-[22%] xl:right-[14%] z-[1]">
                        our team
                    </p>
                </a>
                <a href="/our-team" class="main-links">
                    <p class="primary-font text-[0.45rem] sm:text-[0.75rem] text-on-primary-container tracking-wide group-hover:tracking-wider transition-all duration-300 absolute bottom-4 right-[38%] sm:right-[28%] md:right-[26%] lg:right-[22%] xl:right-[14%] z-[1]">
                        contact us
                    </p>
                </a>
                <a href="/our-team" class="main-links">
                    <p class="primary-font text-[0.45rem] sm:text-[0.75rem] text-on-primary-container tracking-wide group-hover:tracking-wider transition-all duration-300 absolute bottom-4 left-[38%] sm:left-[28%] md:left-[26%] lg:left-[22%] xl:left-[14%] z-[1]">
                        ieee website
                    </p>
                </a>
                <img src="{iBackground}" alt="random course"
                     class="h-full w-full object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl absolute top-0 bottom-0 z-0">
                <!--            <p class="primary-font text-2xl text-on-primary-container transition-all duration-300 group-hover:tracking-wider">-->
                <!--                Manipal Banglore Branch</p>-->
            </div>
            <!--                        <div class="col-start-1 row-start-2 rounded-2xl bg-blue-300 h-full w-full">-->
            <!--                            <img src="{manipalBanglore}" alt="random course"-->
            <!--                                 class="h-full w-full object-cover inline-block display-image group-hover:scale-110 transition-all duration-200 ease-in-out rounded-2xl">-->
            <!--                        </div>-->
            <!--                        <div class="col-start-3 row-start-2 rounded-2xl bg-blue-300 h-full w-full">-->
            <!--                            <img src="{im1}" alt="random course"-->
            <!--                                 class="h-full w-full object-cover inline-block display-image group-hover:scale-110 transition-all duration-200 ease-in-out rounded-2xl">-->

            <div class="relative col-start-1 sm:col-start-2 row-start-1 rounded-2xl h-full w-full bg-cis-primary-container flex flex-col items-center justify-center group cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(65,0,3,1)] transition-all duration-300 main-card overflow-hidden ieee-cis"
                 on:mouseenter={handleChapterHover}>
                <p class="heading-font text-3xl md:text-6xl lg:text-8xl bg-blend-multiply tracking-wide transition-all duration-300 group-hover:tracking-wider group-hover:drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] z-[1]">
                    IEEE CIS</p>
                <img src="{cisBackground}" alt="random course"
                     class="h-full w-full object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl absolute top-0 bottom-0 z-0">
                <!--            <p class="primary-font text-2xl text-cis-on-primary-container group-hover:tracking-wider transition-all duration-300">-->
                <!--                Manipal Banglore Branch</p>-->
            </div>

            <div class="relative col-start-1 sm:col-start-2 row-start-3 rounded-2xl h-full w-full bg-cs-primary-container flex flex-col items-center justify-center group cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(31,28,0,1)] transition-all duration-300 overflow-hidden ieee-cs"
                 on:mouseenter={handleChapterHover}>
                <p class="heading-font text-3xl md:text-6xl lg:text-8xl text-cs-on-primary-container tracking-wide transition-all duration-300 group-hover:tracking-wider group-hover:drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] z-[1]">
                    IEEE CS
                </p>
                <img src="{csBackground}" alt="random course"
                     class="h-full w-full object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl absolute top-0 bottom-0 z-0">
                <!--            <p class="primary-font text-2xl text-cs-on-primary-container group-hover:tracking-wider transition-all duration-300">-->
                <!--                Manipal Banglore Branch</p>-->
            </div>
        </div>

    </div>
    <div class="flex flex-col sticky top-[25px] z-[2] h-fit w-full items-center justify-center">
        <div class="h-[75px] w-fit rounded-2xl isolate bg-white/10 shadow-lg flex flex-row items-center justify-between px-2">
            <div class="h-full p-4 relative">
                <img src="{ieeeLogo}" alt="ieee logo" class="h-full logo-navbar-ieee">
                <img src="{manipalLogo}" alt="ieee logo"
                     class="h-full absolute top-0 left-0 px-3 py-3 logo-navbar-manipal opacity-0">
            </div>
            <!--            <p class="heading-font text-lg text-surface">Our Team</p>-->
            <!--            <p class="heading-font text-lg text-surface">Events</p>-->
            <!--            <p class="heading-font text-lg text-surface">IEEE Website</p>-->
            <!--            <p class="heading-font text-lg text-surface">Contact Us</p>-->
        </div>
    </div>
    <div class="h-[300vh] bg-on-surface sticky top-0">
        <div class="flex flex-col sticky top-[45%] items-center justify-center h-fit w-full">
            <div class="flex flex-col items-center justify-center">
                <p class="heading-font text-sm sm:text-2xl text-gray-600">About us</p>
            </div>
            <div class="flex flex-col h-[6.375rem] overflow-hidden about-us-attraction items-center justify-start">
                <p class="heading-font tracking-wide text-center text-4xl sm:text-7xl lg:text-8xl text-primary-container about-us-1">
                    IEEE Student Branch
                </p>
                <p class="heading-font tracking-wide text-center text-4xl sm:text-7xl lg:text-8xl text-primary-container absolute top-[100%] opacity-0 about-us-2">
                    at
                </p>
                <p class="heading-font tracking-wide text-center text-4xl sm:text-7xl lg:text-8xl text-primary-container absolute top-[100%] opacity-0 about-us-3">
                    Manipal Bangalore
                </p>
                <!--                <p class="heading-font tracking-wide text-center text-8xl text-primary-container about-us-4">Placeholder</p>-->
            </div>
        </div>
    </div>
    <div class="h-[315vh] bg-on-surface sticky top-0">
        <div class="flex flex-col sticky top-[40%] items-center justify-center h-fit w-full">
            <div class="w-full h-fit relative flex flex-col items-center justify-center showcase-cards-div">
                <div class="h-[275px] w-[32%] relative">
                    <div class="h-full w-full absolute top-0 border-4 border-border/30 bg-on-surface rounded-2xl rotate-9 items-center justify-center p-10 showcase-event-4">
                        <div class="flex flex-col w-full h-full items-start justify-between">
                            <p class="heading-font text-xl text-primary-container">
                                Event Name
                            </p>
                            <p class="heading-font text-xl text-surface/50">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium amet cum
                                deserunt doloribus dolorum eum harum id
                            </p>
                        </div>
                    </div>
                    <div class="h-full w-full absolute top-0 border-4 border-border/30 bg-on-surface rounded-2xl rotate-6 items-center justify-center p-10 showcase-event-3">
                        <div class="flex flex-col w-full h-full items-start justify-between">
                            <p class="heading-font text-xl text-primary-container">
                                Event Name
                            </p>
                            <p class="heading-font text-xl text-surface/50">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium amet cum
                                deserunt doloribus dolorum eum harum id
                            </p>
                        </div>
                    </div>
                    <div class="h-full w-full absolute top-0 border-4 border-border/30 bg-on-surface rounded-2xl rotate-3 items-center justify-center p-10 showcase-event-2">
                        <div class="flex flex-col w-full h-full items-start justify-between">
                            <p class="heading-font text-xl text-primary-container">
                                Event Name
                            </p>
                            <p class="heading-font text-xl text-surface/50">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium amet cum
                                deserunt doloribus dolorum eum harum id
                            </p>
                        </div>
                    </div>
                    <div class="h-full w-full absolute top-0 border-4 border-border/30 bg-on-surface rounded-2xl items-center justify-center p-10 showcase-event-1">
                        <div class="flex flex-col w-full h-full items-start justify-between">
                            <p class="heading-font text-xl text-primary-container">
                                Event Name
                            </p>
                            <p class="heading-font text-xl text-surface/50">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium amet cum
                                deserunt doloribus dolorum eum harum id
                            </p>
                        </div>
                    </div>
                </div>
                <div class="h-[275px] w-full absolute top-0 -z-[1] flex flex-col items-center justify-center">
                    <p class="heading-font text-8xl text-primary-container text-center">Our Flagship Events</p>
                </div>
            </div>
        </div>
    </div>

    <!--<div class="h-fit w-full sticky top-0">-->
    <!--</div>-->
</div>
<div class="h-[100vh] bg-on-surface flex flex-row items-center justify-center px-32">
    <div class="w-1/2 h-full flex flex-col items-start justify-center">
        <p class="heading-font text-lg text-surface/30 mb-5">Our Team</p>
        <p class="heading-font text-5xl font-bold text-left text-primary-container leading-[1.2]">
            Meet the talents that make IEEE
        </p>
    </div>
    <div class="w-1/2 h-full flex flex-col items-start justify-center gap-5">
        <p class="heading-font text-surface/30">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, et nulla. Accusantium amet aperiam, at
            autem, culpa dolorum ea eos expedita illo labore magnam maxime necessitatibus perspiciatis ratione
            recusandae ut.
        </p>
        <button class="rounded-full bg-primary-container text-on-primary-container text-sm py-4 px-6 heading-font hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,31,36,1)] transition-all duration-300">
            Our Team
        </button>
    </div>
</div>

<div class="h-[75px] w-full bg-surface flex flex-row items-start justify-center">
    <div class="h-full w-fit p-5 flex">
        <p class="heading-font text-xl text-on-surface">
            Code Available on <a href="https://github.com/vsharma-va" target="_blank" class="text-primary">Github</a>
        </p>
    </div>
</div>

<style>
    .svg-windmill {
        height: max(2.9375rem, min(10.86084vw + .32949rem, 15.5625rem));
        width: max(2.9375rem, min(10.86084vw + .32949rem, 15.5625rem));
    }
</style>