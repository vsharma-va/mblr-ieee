<!--capitalize links-->
<!--links should be intuitive that they are clickable-->
<!--reduce font size-->
<!--landing page dark mode-->
<!--padding on home page-->
<!--add nav bar on landing page-->
<!--ieee website action should show that it is an external website-->
<!--snapping scroll on cards-->
<!--our team alignment with meet the team-->
<!--left and right margin for navbar-->

<script>
    import {gsap} from "gsap/dist/gsap";
    import ScrollTrigger from "gsap/dist/ScrollTrigger";
    import {onMount} from "svelte";
    import iBackground from "$lib/assets/images/iiBackground.jpg";
    import cisBackground from "$lib/assets/images/cisBackground.png";
    import csBackground from "$lib/assets/images/csBackground.png";
    import ieeeLogo from "$lib/assets/images/ieeeLogo.png";
    import manipalLogo from "$lib/assets/images/manipalLogo.png";
    import mouseScroll from "$lib/assets/images/mouse-cursor.png";
    import {goto} from "$app/navigation";
    import Showcase from "$lib/common/Showcase.svelte";
    import Navbar from "$lib/common/Navbar.svelte";


    let hoveredChapter;
    let hoverBackgroundImageDiv;
    let ieeeHeadingText;
    let navbar;
    let ieeeTopologyColor = "0x96f0ff";

    function handleChapterHover(event) {
        if (event.target.classList.contains("ieee-main")) {
            hoveredChapter = "ieee-main";
        } else if (event.target.classList.contains("ieee-cis")) {
            hoveredChapter = "ieee-cis";
        } else if (event.target.classList.contains("ieee-cs")) {
            hoveredChapter = "ieee-cs";
        }
    }


    gsap.registerPlugin(ScrollTrigger);
    onMount(() => {
        let cloudTimeline = gsap.timeline({repeat: 1}, {});
        cloudTimeline.to('.cloud-1', {
            left: "-100%",
            duration: 145,
            delay: 1,
        });
        cloudTimeline.to('.cloud-2', {
            left: "-100%",
            duration: 190,
            delay: 1,
        }, "<")

        let onLoadTimeline = gsap.timeline({
            onComplete: () => {
                strokeTimeline.play(0);
            }
        }, {});
        onLoadTimeline.to('.center-text-top', {
            opacity: 1,
            y: "-85%",
            scale: 1.2,
            duration: 0.65,
        })
        onLoadTimeline.to('.center-text-bottom', {
            opacity: 1,
            y: "100%",
            scale: 1.2,
            duration: 0.65,
        }, "<");
        onLoadTimeline.to('.reveal-div', {
            top: "-320%",
            duration: 2,
        })
        onLoadTimeline.to('.center-text-top', {
            y: 0,
            color: "#001f24",
            scale: 1,
            delay: 0.75,
        }, "<");
        onLoadTimeline.to('.center-text-bottom', {
            y: 0,
            color: "#001f24",
            scale: 1,
        }, "<");
        onLoadTimeline.to('.center-text-containing-div', {
            height: "fit-content",
        }, "<");
        onLoadTimeline.to('.make-italic', {
            skewX: -7,
            duration: 1,
        });
        onLoadTimeline.to('.left-of-make-italic', {
            x: 15,
        })
        onLoadTimeline.play(0);

        let strokeTimeline = gsap.timeline({
            // onComplete: () => {
            //     setTimeout(() => {
            //         strokeTimeline.reverse();
            //     }, 2000)
            // },
            // onReverseComplete: () => {
            //     setTimeout(() => {
            //         strokeTimeline.play(0);
            //     }, 2000)
            // }
        })
        strokeTimeline.to('.stroke-center', {
            height: "100%",
        });
        strokeTimeline.to('.stroke-left', {
            height: "100%",
        });
        strokeTimeline.to('.stroke-right', {
            height: "100%",
        });
        strokeTimeline.pause(0);

        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.zoom-out-trigger',
                start: 'top top',
                end: 'bottom end',
                scrub: true,
                markers: false,
            },
        });
        timeline.to('.zoom-out-to-normal', {
            scale: 1,
        });
        timeline.to('.main-links', {
            opacity: 0,
        }, "<");
        timeline.to('.text-left-in', {
            left: 20,
        }, "<");
        timeline.to('.text-right-in', {
            right: 20,
        }, "<");

        let timelineAnother = gsap.timeline({
            scrollTrigger: {
                trigger: '.about-us-attraction',
                start: 'bottom top',
                end: 'bottom -130%',
                scrub: true,
                markers: false,
            }
        });
        timelineAnother.to(".navbar", {
            display: "flex",
            opacity: 1,
        });
        timelineAnother.to(".about-us-1", {
            y: -25,
            opacity: 0,
        }, "<");
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
        }, "<");
        timelineAnother.to(".about-us-3", {
            top: 27,
            opacity: 1,
        });
        timelineAnother.to(".logo-navbar-manipal", {
            opacity: 0,
        }, ">");
        timelineAnother.to(".logo-navbar-ieee", {
            opacity: 1,
        }, "<");
        // ScrollTrigger.normalizeScroll(false);
        let showcaseTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.showcase-cards-div',
                start: 'bottom top',
                end: 'bottom -500%',
                scrub: true,
                markers: false,
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
        showcaseTimeline.to('.about-us-3', {
            opacity: 0
        }, '<');

        gsap.registerPlugin(ScrollTrigger);
        let showcasePictureTimeline = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: '.showcase-pictures-div',
                    start: 'bottom center',
                    end: 'bottom -400%',
                    scrub: true,
                    markers: false,
                }
            });
        showcasePictureTimeline.to('.showcase-picture-1', {
            scale: 0.75,
            opacity: 0.75,
        });
        showcasePictureTimeline.to('.showcase-pictures-name-1', {
            opacity: 0,
            scale: 0.75,
        }, "<");
        showcasePictureTimeline.to('.showcase-picture-2', {
            scale: 1,
            opacity: 1,
            y: 0,
        }, "<");
        showcasePictureTimeline.to('.showcase-pictures-name-2', {
            opacity: 1,
            scale: 1,
            y: 0,
        }, "<");
        showcasePictureTimeline.to('.showcase-picture-2', {
            opacity: 0.75,
            scale: 0.75,
        }, ">");
        showcasePictureTimeline.to('.showcase-pictures-name-2', {
            opacity: 0,
            scale: 0.75,
        }, "<");
        showcasePictureTimeline.to('.showcase-picture-3', {
            scale: 1,
            opacity: 1,
            y: 0,
        }, "<");
        showcasePictureTimeline.to('.showcase-pictures-name-3', {
            opacity: 1,
            scale: 1,
            y: 0,
        }, "<");
    });
</script>

<!--<div class="h-screen w-full fixed bg-primary-container top-0 reveal-div z-[1] flex flex-col items-center justify-center">-->
<!--</div>-->
<div class="h-fit w-full">
    <div class="navbar absolute -top-0 opacity-0 w-full hidden z-[5]">
        <Navbar/>
    </div>
    <div class="h-[255vh] w-full sticky top-0 p-2 sm:p-0">
        <div class="h-screen w-full grid grid-cols-1 overflow-hidden sm:grid-cols-[20%_60%_20%] lg:grid-cols-[25%_50%_25%] xl:grid-cols-[30%_40%_30%] gap-y-2 grid-rows-3 zoom-out-trigger sticky top-0"
             style="transform-style: preserve-3d">
            <div class="absolute w-full h-full flex flex-col items-start justify-center -left-[100%] text-left-in">
                <p class="heading-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl -rotate-90">
                    Manipal
                </p>
            </div>
            <div class="absolute w-full h-full flex flex-col items-end justify-center -right-[100%] text-right-in pl-4">
                <p class="heading-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl rotate-90">Bangalore</p>
            </div>
            <div class="col-start-1 sm:col-start-2 row-start-1 bg-cis-primary-container scale-[3.2] zoom-out-to-normal rounded-2xl flex flex-col items-center justify-center transform-gpu group overflow-hidden"
                 style="transform-style: preserve-3d">
                <div class="heading-font text-3xl md:text-6xl lg:text-8xl text-cis-on-primary-container tracking-wide transition-all duration-300 group-hover:tracking-wider drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] z-[1] relative items-center justify-center flex flex-row"
                >
                    <span class="left-of-make-italic">I</span>
                    <span
                            class="make-italic">E</span><span>E</span><span>E</span>
                    <span class="left-of-make-italic"> </span><span>C</span><span
                        class="left-of-make-italic">I</span><span
                        class="make-italic">S</span>
                </div>
                <div class="h-full w-full absolute top-0 bg-gradient-to-br from-cis-primary-container to-cis-surface"></div>
                <div class="h-0 w-[5%] bg-gradient-to-b from-cis-primary-container to-cis-surface stroke-center absolute top-0"></div>
                <div class="h-0 w-[5%] bg-gradient-to-b from-cis-surface to-cis-primary-container stroke-left absolute left-[35%] top-0"></div>
                <div class="h-0 w-[5%] bg-gradient-to-b from-cis-surface to-cis-primary-container stroke-right absolute right-[35%] top-0"></div>
                <!--                <img src="{cisBackground}" alt="random course"-->
                <!--                     class="h-full w-full object-cover inline-block display-image rounded-2xl absolute top-0 bottom-0 z-0">-->
                <div class="h-full w-full absolute top-0 fog-background-cis"></div>
            </div>
            <div class="col-start-1 sm:col-start-2 row-start-3 bg-cs-primary-container scale-[3.2] zoom-out-to-normal rounded-2xl flex flex-col items-center justify-center transform-gpu group overflow-hidden"
                 style="transform-style: preserve-3d">
                <div class="w-fit heading-font text-3xl md:text-6xl lg:text-8xl text-cs-on-primary-container tracking-wide transition-all duration-300 group-hover:tracking-wider group-hover:drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] z-[1] relative items-center justify-center flex flex-row">
                    <span class="left-of-make-italic">I</span><span
                        class="make-italic">E</span><span>E</span><span>E</span>
                    <span class="left-of-make-italic"> </span><span class="left-of-make-italic">C</span><span
                        class="make-italic">S</span>
                </div>
                <div class="h-full w-full absolute top-0 bg-gradient-to-br from-cs-primary-container to-cs-surface"></div>
                <div class="h-0 w-[5%] bg-gradient-to-b from-cs-primary-container to-cs-surface stroke-center absolute top-0"></div>
                <div class="h-0 w-[5%] bg-gradient-to-b from-cs-surface to-cs-primary-container stroke-left absolute left-[35%] top-0"></div>
                <div class="h-0 w-[5%] bg-gradient-to-b from-cs-surface to-cs-primary-container stroke-right absolute right-[35%] top-0"></div>
                <div class="h-full w-full absolute top-0 fog-background-cs"></div>
            </div>
            <div class="bg-surface col-start-1 sm:col-start-2 row-start-2 scale-[3.2] zoom-out-to-normal rounded-2xl flex flex-col items-center justify-center transform-gpu group cursor-pointer overflow-hidden border-1 border-primary-container"
                 style="transform-style: preserve-3d">
                <div class="absolute top-0 h-screen w-full bg-primary-container reveal-div z-[2]"></div>
                <div class="w-fit h-full heading-font text-3xl md:text-6xl lg:text-8xl text-on-primary-container tracking-wide transition-all duration-300 group-hover:tracking-wider drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] z-[999] relative items-center justify-center flex flex-row center-text-containing-div"
                     bind:this={ieeeHeadingText}>
                    <span class="center-text-top -translate-y-[115%] opacity-0 scale-[1.45] left-of-make-italic">I</span><span
                        class="translate-y-[140%] center-text-bottom opacity-0 scale-[1.45] make-italic">E</span><span
                        class="center-text-top -translate-y-[115%] opacity-0 scale-[1.45]">E</span><span
                        class="translate-y-[140%] center-text-bottom opacity-0 scale-[1.45]">E</span>
                </div>
                <div class="h-[16px] w-[16px] z-[1] main-links">
                    <img src="{mouseScroll}" alt="svg of a mouse indicating scroll">
                </div>
                <div class="h-full w-full absolute top-0 bg-gradient-to-br from-primary-container to-surface"></div>
                <div class="h-0 w-[5%] bg-gradient-to-b from-primary-container to-surface stroke-center absolute top-0"></div>
                <div class="h-0 w-[5%] bg-gradient-to-b from-surface to-primary-container stroke-left absolute left-[35%] top-0"></div>
                <div class="h-0 w-[5%] bg-gradient-to-b from-surface to-primary-container stroke-right absolute right-[35%] top-0"></div>
<!--                                <img src="{iBackground}" alt="random course"-->
<!--                                     class="h-full w-full object-cover inline-block display-image rounded-2xl absolute top-0 bottom-0 z-0">-->
                <!--                <img src="{cloud1}" alt="" class="h-1/3 w-1/3 absolute top-0 cloud-1">-->
                <!--                <img src="{cloud2}" alt="" class="h-1/3 w-1/3 absolute top-12 -right-16 cloud-2">-->
                <a href="/events" class="main-links z-[1]">
                    <div class="primary-font text-on-primary-container bg-primary-container px-2 py-1 rounded-2xl text-[0.25rem] sm:text-[0.45rem] tracking-wide group-hover:tracking-wider transition-all duration-300 absolute top-4 left-[38%] sm:left-[28%] md:left-[26%] lg:left-[22%] xl:left-[14%] z-[1] hover:underline">
                        events
                    </div>
                </a>
                <a href="/about-us" class="main-links z-[1] opacity-100">
                    <div class="primary-font text-on-primary-container bg-primary-container px-2 py-1 rounded-2xl text-[0.25rem] sm:text-[0.45rem] tracking-wide group-hover:tracking-wider transition-all duration-300 absolute top-4 right-[38%] sm:right-[28%] md:right-[26%] lg:right-[22%] xl:right-[14%] z-[1] hover:underline">
                        our team
                    </div>
                </a>
                <a href="/our-team" class="main-links z-[1] opacity-100">
                    <div class="primary-font text-on-primary-container bg-primary-container px-2 py-1 rounded-2xl text-[0.25rem] sm:text-[0.45rem] tracking-wide group-hover:tracking-wider transition-all duration-300 absolute bottom-4 right-[38%] sm:right-[28%] md:right-[26%] lg:right-[22%] xl:right-[14%] z-[1] hover:underline">
                        contact us
                    </div>
                </a>
                <a href="/our-team" class="main-links z-[1] opacity-100" target="_blank">
                    <div class="primary-font text-on-primary-container bg-primary-container px-2 py-1 rounded-2xl text-[0.25rem] sm:text-[0.45rem] tracking-wide group-hover:tracking-wider transition-all duration-300 absolute bottom-4 left-[38%] sm:left-[28%] md:left-[26%] lg:left-[22%] xl:left-[14%] z-[1] hover:underline group/underline flex flex-row">
                        ieee website
                        <svg width="8" height="8" viewBox="0 0 24 24" class="pl-[2px] hidden group-hover/underline:flex"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M20 14a1 1 0 0 0-1 1v3.077c0 .459-.022.57-.082.684a.363.363 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.571-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684L4.999 5.5a.5.5 0 0 1 .5-.5l3.5.005a1 1 0 1 0 .002-2L5.501 3a2.5 2.5 0 0 0-2.502 2.5v12.577c0 .76.083 1.185.32 1.627.223.419.558.753.977.977.442.237.866.319 1.627.319h12.154c.76 0 1.185-.082 1.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1 1 0 0 0-1-1zm-2-9.055v-.291l-.39.09A10 10 0 0 1 15.36 5H14a1 1 0 1 1 0-2l5.5.003a1.5 1.5 0 0 1 1.5 1.5V10a1 1 0 1 1-2 0V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10 10 0 0 1-1.411 1.775l-5.933 5.932a1 1 0 0 1-1.414-1.414l5.944-5.944A10 10 0 0 1 18 4.945z"
                                  fill="currentColor"/>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <!--    <div class="h-[300vh] w-full sticky top-0 normalize-scroll">-->
    <!--        <div class="h-[100vh] bg-surface sticky top-0 left-0 right-0 bottom-0 scale-x-[3.2] scale-y-[3.2] grid grid-cols-1 sm:grid-cols-[20%_60%_20%] lg:grid-cols-[25%_50%_25%] xl:grid-cols-[30%_40%_30%] gap-y-2 grid-rows-3 w-full main-attraction overflow-hidden">-->
    <!--            <div class="absolute top-0 bottom-0 w-full h-full transition-all hover-background-image scale-0 opacity-0"-->
    <!--                 bind:this={hoverBackgroundImageDiv}>-->
    <!--                {#if hoveredChapter === "ieee-main"}-->
    <!--                    <img src="{iBackground}" alt="random course"-->
    <!--                         class="h-full w-full object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl absolute top-0 bottom-0 z-0">-->
    <!--                {:else if hoveredChapter === "ieee-cs"}-->
    <!--                    <img src="{csBackground}" alt="random course"-->
    <!--                         class="h-full w-full object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl absolute top-0 bottom-0 z-0">-->
    <!--                {:else if hoveredChapter === "ieee-cis"}-->
    <!--                    <img src="{cisBackground}" alt="random course"-->
    <!--                         class="h-full w-full object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl absolute top-0 bottom-0 z-0">-->
    <!--                {/if}-->
    <!--            </div>-->
    <!--            <div class="absolute -left-[100%] text-left-in h-full items-center justify-start px-10 w-full flex p-5 z-[0]">-->
    <!--                <p class="heading-font text-3xl md:text-6xl lg:text-7xl tracking-wider leading-[1.2] text-on-surface sm:-rotate-90 sm:pb-[100px] md:pb-[300px] xl:pb-[0px]">-->
    <!--                    Manipal-->
    <!--                </p>-->
    <!--            </div>-->
    <!--            &lt;!&ndash;        <div class="col-start-1 row-start-1 col-span-3 row-span-3 gradient-text blur-2xl rounded-2xl -z-[5]">&ndash;&gt;-->

    <!--            &lt;!&ndash;        </div>&ndash;&gt;-->
    <!--            <div class="absolute -right-[100%] text-right-in h-full items-center justify-end px-10 w-full flex z-[0]">-->
    <!--                <p class="heading-font text-3xl md:text-6xl lg:text-7xl tracking-wider leading-[1.2] text-on-surface sm:-rotate-90 sm:pt-[100px] md:pt-[305px] xl:pt-[0px]">-->
    <!--                    Bangalore-->
    <!--                </p>-->
    <!--            </div>-->
    <!--            &lt;!&ndash;        <div class="bg-primary-container col-start-1 row-start-1 h-full w-full relative">&ndash;&gt;-->
    <!--            &lt;!&ndash;            {#if hoveredChapter === "ieee-main"}&ndash;&gt;-->
    <!--            &lt;!&ndash;                <img src="{iBackground}" alt="random course"&ndash;&gt;-->
    <!--            &lt;!&ndash;                     class="h-full w-full object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl absolute top-0 bottom-0 z-0">&ndash;&gt;-->
    <!--            &lt;!&ndash;            {/if}&ndash;&gt;-->
    <!--            &lt;!&ndash;        </div>&ndash;&gt;-->
    <!--            <div class="col-start-1 sm:col-start-2 row-start-2 rounded-2xl bg-primary-container h-full w-full flex flex-col items-center justify-center relative group cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,31,36,1)] transition-all duration-300 overflow-hidden ieee-main"-->
    <!--                 on:mouseenter={handleChapterHover}>-->
    <!--                <p class="heading-font text-3xl md:text-6xl lg:text-8xl text-on-primary-container tracking-wide transition-all duration-300 group-hover:tracking-wider group-hover:drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] z-[1]">-->
    <!--                    IEEE-->
    <!--                </p>-->
    <!--                <div class="h-[16px] w-[16px] z-[1] main-links">-->
    <!--                    <img src="{mouseScroll}">-->
    <!--                </div>-->
    <!--                <a href="/events" class="main-links z-[1]">-->
    <!--                    <p class="primary-font text-[0.45rem] sm:text-[0.75rem] tracking-wide group-hover:tracking-wider transition-all duration-300 text-on-primary-container absolute top-4 left-[38%] sm:left-[28%] md:left-[26%] lg:left-[22%] xl:left-[14%] z-[1]">-->
    <!--                        events-->
    <!--                    </p>-->
    <!--                </a>-->
    <!--                <a href="/about-us" class="main-links z-[1] opacity-100">-->
    <!--                    <p class="primary-font text-[0.45rem] sm:text-[0.75rem] text-on-primary-container tracking-wide group-hover:tracking-wider transition-all duration-300 absolute top-4 right-[38%] sm:right-[28%] md:right-[26%] lg:right-[22%] xl:right-[14%] z-[1]">-->
    <!--                        our team-->
    <!--                    </p>-->
    <!--                </a>-->
    <!--                <a href="/our-team" class="main-links z-[1] opacity-100">-->
    <!--                    <p class="primary-font text-[0.45rem] sm:text-[0.75rem] text-on-primary-container tracking-wide group-hover:tracking-wider transition-all duration-300 absolute bottom-4 right-[38%] sm:right-[28%] md:right-[26%] lg:right-[22%] xl:right-[14%] z-[1]">-->
    <!--                        contact us-->
    <!--                    </p>-->
    <!--                </a>-->
    <!--                <a href="/our-team" class="main-links z-[1] opacity-100">-->
    <!--                    <p class="primary-font text-[0.45rem] sm:text-[0.75rem] text-on-primary-container tracking-wide group-hover:tracking-wider transition-all duration-300 absolute bottom-4 left-[38%] sm:left-[28%] md:left-[26%] lg:left-[22%] xl:left-[14%] z-[1]">-->
    <!--                        ieee website-->
    <!--                    </p>-->
    <!--                </a>-->
    <!--                <img src="{iBackground}" alt="random course"-->
    <!--                     class="h-full w-full object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl absolute top-0 bottom-0 z-0">-->
    <!--                &lt;!&ndash;            <p class="primary-font text-2xl text-on-primary-container transition-all duration-300 group-hover:tracking-wider">&ndash;&gt;-->
    <!--                &lt;!&ndash;                Manipal Banglore Branch</p>&ndash;&gt;-->
    <!--            </div>-->
    <!--            &lt;!&ndash;                        <div class="col-start-1 row-start-2 rounded-2xl bg-blue-300 h-full w-full">&ndash;&gt;-->
    <!--            &lt;!&ndash;                            <img src="{manipalBanglore}" alt="random course"&ndash;&gt;-->
    <!--            &lt;!&ndash;                                 class="h-full w-full object-cover inline-block display-image group-hover:scale-110 transition-all duration-200 ease-in-out rounded-2xl">&ndash;&gt;-->
    <!--            &lt;!&ndash;                        </div>&ndash;&gt;-->
    <!--            &lt;!&ndash;                        <div class="col-start-3 row-start-2 rounded-2xl bg-blue-300 h-full w-full">&ndash;&gt;-->
    <!--            &lt;!&ndash;                            <img src="{im1}" alt="random course"&ndash;&gt;-->
    <!--            &lt;!&ndash;                                 class="h-full w-full object-cover inline-block display-image group-hover:scale-110 transition-all duration-200 ease-in-out rounded-2xl">&ndash;&gt;-->

    <!--            <div class="relative col-start-1 sm:col-start-2 row-start-1 rounded-2xl h-full w-full bg-cis-primary-container flex flex-col items-center justify-center group cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(65,0,3,1)] transition-all duration-300 main-card overflow-hidden ieee-cis"-->
    <!--                 on:mouseenter={handleChapterHover}>-->
    <!--                <p class="heading-font text-3xl md:text-6xl lg:text-8xl bg-blend-multiply tracking-wide transition-all duration-300 group-hover:tracking-wider group-hover:drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] z-[1]">-->
    <!--                    IEEE CIS</p>-->
    <!--                <img src="{cisBackground}" alt="random course"-->
    <!--                     class="h-full w-full object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl absolute top-0 bottom-0 z-0">-->
    <!--                &lt;!&ndash;            <p class="primary-font text-2xl text-cis-on-primary-container group-hover:tracking-wider transition-all duration-300">&ndash;&gt;-->
    <!--                &lt;!&ndash;                Manipal Banglore Branch</p>&ndash;&gt;-->
    <!--            </div>-->

    <!--            <div class="relative col-start-1 sm:col-start-2 row-start-3 rounded-2xl h-full w-full bg-cs-primary-container flex flex-col items-center justify-center group cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(31,28,0,1)] transition-all duration-300 overflow-hidden ieee-cs"-->
    <!--                 on:mouseenter={handleChapterHover}>-->
    <!--                <p class="heading-font text-3xl md:text-6xl lg:text-8xl text-cs-on-primary-container tracking-wide transition-all duration-300 group-hover:tracking-wider group-hover:drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] z-[1]">-->
    <!--                    IEEE CS-->
    <!--                </p>-->
    <!--                <img src="{csBackground}" alt="random course"-->
    <!--                     class="h-full w-full object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl absolute top-0 bottom-0 z-0">-->
    <!--                &lt;!&ndash;            <p class="primary-font text-2xl text-cs-on-primary-container group-hover:tracking-wider transition-all duration-300">&ndash;&gt;-->
    <!--                &lt;!&ndash;                Manipal Banglore Branch</p>&ndash;&gt;-->
    <!--            </div>-->
    <!--        </div>-->

    <!--    </div>-->
    <div class="flex flex-col sticky top-[95px] z-[2] h-fit w-full items-center justify-center">
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
    <div class="h-[320vh] bg-on-surface sticky top-0">
        <div class="flex flex-col sticky top-[45%] sm:top-[39%] items-center justify-center h-fit w-full">
            <div class="flex flex-col items-center justify-center">
                <p class="heading-font text-sm sm:text-2xl text-gray-600">About us</p>
            </div>
            <div class="flex flex-col h-[6.375rem] sm:h-[8.575rem] lg:h-[11.875rem] overflow-hidden about-us-attraction items-center justify-start">
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
    <div class="h-[550vh] bg-on-surface sticky top-0">
        <div class="flex flex-col sticky top-[37%] items-center justify-center h-fit w-full">
            <div class="w-full h-fit relative flex flex-col items-center justify-center showcase-cards-div">
                <div class="h-[275px] w-[90%] sm:w-[75%] md:w-[63%] lg:w-[45%] xl:w-[37%] 2xl:w-[32%] relative">
                    <div class="h-full w-full absolute top-0 border-4 border-border/30 bg-on-surface rounded-2xl rotate-[9deg] items-center justify-center p-10 showcase-event-4">
                        <div class="flex flex-col w-full h-full items-start justify-around">
                            <p class="heading-font text-lg sm:text-xl text-primary-container">
                                Event Name
                            </p>
                            <p class="heading-font text-[0.95rem] sm:text-lg lg:text-xl text-surface/50">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium amet cum
                                deserunt doloribus dolorum eum harum id
                            </p>
                        </div>
                    </div>
                    <div class="h-full w-full absolute top-0 border-4 border-border/30 bg-on-surface rounded-2xl rotate-6 items-center justify-center p-10 showcase-event-3">
                        <div class="flex flex-col w-full h-full items-start justify-around">
                            <p class="heading-font text-lg sm:text-xl text-primary-container">
                                Event Name
                            </p>
                            <p class="heading-font text-[0.95rem] sm:text-lg lg:text-xl text-surface/50">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium amet cum
                                deserunt doloribus dolorum eum harum id
                            </p>
                        </div>
                    </div>
                    <div class="h-full w-full absolute top-0 border-4 border-border/30 bg-on-surface rounded-2xl rotate-3 items-center justify-center p-10 showcase-event-2">
                        <div class="flex flex-col w-full h-full items-start justify-around">
                            <p class="heading-font text-lg sm:text-xl text-primary-container">
                                Event Name
                            </p>
                            <p class="heading-font text-[0.95rem] sm:text-lg lg:text-xl text-surface/50">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium amet cum
                                deserunt doloribus dolorum eum harum id
                            </p>
                        </div>
                    </div>
                    <div class="h-full w-full absolute top-0 border-4 border-border/30 bg-on-surface rounded-2xl items-center justify-center p-10 lg:p-10 showcase-event-1">
                        <div class="flex flex-col w-full h-full items-start justify-around">
                            <p class="heading-font text-lg sm:text-xl text-primary-container">
                                Event Name
                            </p>
                            <p class="heading-font text-[0.95rem] sm:text-lg lg:text-xl text-surface/50">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium amet cum
                                deserunt doloribus dolorum eum harum id
                            </p>
                        </div>
                    </div>
                </div>
                <div class="h-[275px] w-full absolute -top-[75%] md:-top-5 -z-[1] flex flex-col items-center justify-center">
                    <p class="heading-font text-4xl sm:text-7xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-container text-center">
                        Our Flagship Events</p>
                </div>
            </div>
        </div>
    </div>

    <!--<div class="h-fit w-full sticky top-0">-->
    <!--</div>-->
</div>
<Showcase showcaseHeading="Showcase">
    <div class="w-full h-full" slot="inside-side-card">
        <div class="flex flex-col w-full h-full px-4 lg:px-10 justify-center gap-5 showcase-pictures-name-1 absolute top-0">
            <p class="heading-font text-2xl 2xl:text-3xl text-primary-container">Event Name 1</p>
            <p class="heading-font text-surface/50 text-sm 2xl:text-lg">Lorem ipsum dolor sit amet, consectetur
                adipisicing
                elit. Animi minus quia repellat sed voluptate! Ab accusamus, autem blanditiis cupiditate dicta
                dignissimos minus modi mollitia nobis optio quaerat rerum sequi velit!</p>
        </div>
        <div class="flex flex-col w-full h-full px-4 lg:px-10 justify-center gap-5 opacity-0 scale-[1.15] translate-y-10 showcase-pictures-name-2 absolute top-0">
            <p class="heading-font text-2xl text-primary-container 2xl:text-3xl">Event Name 2</p>
            <p class="heading-font text-surface/50 text-sm 2xl:text-lg">Lorem ipsum dolor sit amet, consectetur
                adipisicing
                elit. Animi minus quia repellat sed voluptate! Ab accusamus, autem blanditiis cupiditate dicta
                dignissimos minus modi mollitia nobis optio quaerat rerum sequi velit!</p>
        </div>
        <div class="flex flex-col w-full h-full px-4 lg:px-10 justify-center gap-5 opacity-0 scale-[1.15] translate-y-10 showcase-pictures-name-3 absolute top-0">
            <p class="heading-font text-2xl text-primary-container 2xl:text-3xl">Event Name 3</p>
            <p class="heading-font text-surface/50 text-sm 2xl:text-lg">Lorem ipsum dolor sit amet, consectetur
                adipisicing
                elit. Animi minus quia repellat sed voluptate! Ab accusamus, autem blanditiis cupiditate dicta
                dignissimos minus modi mollitia nobis optio quaerat rerum sequi velit!</p>
        </div>
    </div>
    <div class="w-full h-full" slot="inside-main-card">
        <img src="{cisBackground}" alt="random course"
             class="h-full w-full object-cover rounded-2xl absolute top-0 bottom-0 z-[0] showcase-picture-1">
        <img src="{csBackground}" alt="random course"
             class="h-full w-full object-cover rounded-2xl absolute top-0 bottom-0 z-[0] opacity-0 scale-[1.15] translate-y-10 showcase-picture-2">
        <img src="{iBackground}" alt="random course"
             class="h-full w-full object-cover rounded-2xl absolute top-0 bottom-0 z-[0] opacity-0 scale-[1.15] translate-y-10 showcase-picture-3">
    </div>
</Showcase>
<div class="h-[100vh] bg-on-surface flex flex-col md:flex-row items-center justify-center w-full p-5 gap-6 lg:px-32">
    <div class="w-full lg:w-1/2 h-fit flex flex-col items-center justify-center">
        <p class="heading-font w-full text-sm lg:text-lg text-surface/50 mb-3 lg:mb-5">Our Team</p>
        <p class="heading-font w-full text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-left text-primary-container leading-[1.2]">
            Meet the talents that make IEEE
        </p>
    </div>
    <div class="w-full lg:w-1/2 h-fit flex flex-col items-start justify-between gap-5">
        <p class="heading-font md:text-[0.90rem] leading-[1.7] text-surface/30">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, et nulla. Accusantium amet aperiam, at
            autem, culpa dolorum ea eos expedita illo labore magnam maxime necessitatibus perspiciatis ratione
            recusandae ut.
        </p>
        <button class="rounded-full bg-primary-container text-on-primary-container text-sm py-4 px-6 heading-font hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,31,36,1)] transition-all duration-300"
                on:click={() => {
                goto("/about-us");
            }}>
            Our Team
        </button>
    </div>
</div>

<div class="h-[75px] w-full bg-surface flex flex-row items-start justify-center">
    <div class="h-full w-fit p-5 flex">
        <p class="heading-font text-lg text-on-surface text-center">
            Project Available on <a href="https://github.com/vsharma-va/mblr-ieee" target="_blank" class="text-primary">Github</a>
        </p>
    </div>
</div>

<style>
    .image-overlay {
        background-image: linear-gradient(rgba(0, 0, 0, 0), #3d3c3c);
    }

    .image-text-cis {
        background-image: url("../lib/assets/images/cis-ab-background.webp");
        background-clip: text;
    }
</style>