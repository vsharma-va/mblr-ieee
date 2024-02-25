<script>
    import cisBackground from "$lib/assets/images/cis-group.webp";
    import {gsap} from "gsap/dist/gsap";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
    import {onMount} from "svelte";
    import Showcase from "$lib/common/Showcase.svelte";
    import csBackground from "$lib/assets/images/cs-group.webp";
    import iBackground from "$lib/assets/images/ieee-group.webp";
    import Navbar from "$lib/common/Navbar.svelte";

    gsap.registerPlugin(ScrollTrigger);
    onMount(() => {
        let photoZoomInTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.zoom-scroll',
                start: 'bottom top',
                end: 'bottom -85%',
                scrub: true,
                markers: false,
            },
        });
        photoZoomInTimeline.to('.photo-zoom-in', {
            width: window.innerWidth,
            height: window.innerHeight,
            paddingRight: 0,
            paddingLeft: 0,
        });
        photoZoomInTimeline.to('.photo-to-zoom-in-1', {
            width: window.innerWidth,
        }, ">");

        let showcasePictureTimeline = gsap.timeline({
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

        let photoCsZoomInTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.zoom-cs-scroll',
                start: 'bottom top',
                end: 'bottom -85%',
                scrub: true,
                markers: false,
            },
        });
        photoCsZoomInTimeline.to('.photo-cs-zoom-in', {
            width: window.innerWidth,
            height: window.innerHeight,
            paddingRight: 0,
            paddingLeft: 0,
        });
        photoCsZoomInTimeline.to('.photo-cs-to-zoom-in-1', {
            width: window.innerWidth,
        }, ">");

        let showcaseCsPictureTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.showcase-cs-pictures-div',
                start: 'bottom center',
                end: 'bottom -400%',
                scrub: true,
                markers: false,
            }
        });
        showcaseCsPictureTimeline.to('.showcase-cs-picture-1', {
            scale: 0.75,
            opacity: 0.75,
        });
        showcaseCsPictureTimeline.to('.showcase-cs-pictures-name-1', {
            opacity: 0,
            scale: 0.75,
        }, "<");
        showcaseCsPictureTimeline.to('.showcase-cs-picture-2', {
            scale: 1,
            opacity: 1,
            y: 0,
        }, "<");
        showcaseCsPictureTimeline.to('.showcase-cs-pictures-name-2', {
            opacity: 1,
            scale: 1,
            y: 0,
        }, "<");
        showcaseCsPictureTimeline.to('.showcase-cs-picture-2', {
            opacity: 0.75,
            scale: 0.75,
        }, ">");
        showcaseCsPictureTimeline.to('.showcase-cs-pictures-name-2', {
            opacity: 0,
            scale: 0.75,
        }, "<");
        showcaseCsPictureTimeline.to('.showcase-cs-picture-3', {
            scale: 1,
            opacity: 1,
            y: 0,
        }, "<");
        showcaseCsPictureTimeline.to('.showcase-cs-pictures-name-3', {
            opacity: 1,
            scale: 1,
            y: 0,
        }, "<");

        let csNavColorChange = gsap.timeline({
            scrollTrigger: {
                trigger: '.cs-entry-trigger',
                start: 'top top',
                end: 'top top',
                scrub: true,
                markers: false,
            }
        });
        csNavColorChange.to('.nav-bg-color', {
            backgroundColor: "#1d1c16",
        });
        csNavColorChange.to('.vertical-strike-nav-menu-bg', {
            backgroundColor: "#f1e66b",
        }, ">");
        csNavColorChange.to('.nav-link-underline-bg', {
            backgroundColor: "#f1e66b",
            opacity: 0.9,
        }, ">");
        csNavColorChange.to('.department-button-color', {
            backgroundColor: "#f1e66b",
        }, ">");
        csNavColorChange.to('.department-button-text-color', {
            color: "#1f1c00",
        }, ">");

        let ieeeCsRevealTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#ieee-cs',
                start: "top 10%",
                end: "top 10%",
                scrub: false,
                markers: false,
            }
        });
        ieeeCsRevealTimeline.to(".reveal-cs-content-text", {
            opacity: 0,
        });
        ieeeCsRevealTimeline.to(".reveal-cs-content-1", {
            width: 0,
        });
        ieeeCsRevealTimeline.to(".reveal-cs-content-2", {
            width: 0,
            delay: 0.15,
        }, "<");
        ieeeCsRevealTimeline.to(".reveal-cs-content-3", {
            width: 0,
            delay: 0.15,
        }, "<");
        ieeeCsRevealTimeline.to(".reveal-cs-content-4", {
            width: 0,
            delay: 0.15,
        }, "<");
        ieeeCsRevealTimeline.to(".reveal-cs-content-4", {
            width: 0,
            delay: 0.15,
        }, "<");
        ieeeCsRevealTimeline.to(".ieee-cs-reveal-content", {
            display: "none",
        });
        ieeeCsRevealTimeline.to(".ieee-cs-reveal-content-parent", {
            display: "none",
        });

        let ieeeCisRevealTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#ieee-cis',
                start: "top 10%",
                end: "top 10%",
                scrub: false,
                markers: false,
            }
        });
        ieeeCisRevealTimeline.to(".reveal-cis-content-text", {
            opacity: 0,
        });
        ieeeCisRevealTimeline.to(".reveal-cis-content-1", {
            width: 0,
        });
        ieeeCisRevealTimeline.to(".reveal-cis-content-2", {
            width: 0,
            delay: 0.15,
        }, "<");
        ieeeCisRevealTimeline.to(".reveal-cis-content-3", {
            width: 0,
            delay: 0.15,
        }, "<");
        ieeeCisRevealTimeline.to(".reveal-cis-content-4", {
            width: 0,
            delay: 0.15,
        }, "<");
        ieeeCisRevealTimeline.to(".reveal-cis-content-4", {
            width: 0,
            delay: 0.15,
        }, "<");
        ieeeCisRevealTimeline.to(".ieee-cis-reveal-content", {
            display: "none",
        });
        ieeeCisRevealTimeline.to(".ieee-cis-reveal-content-parent", {
            display: "none",
        });

        let showcaseCisPictureTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.showcase-cis-pictures-div',
                start: 'bottom center',
                end: 'bottom -400%',
                scrub: true,
                markers: false,
            }
        });
        showcaseCisPictureTimeline.to('.showcase-cis-picture-1', {
            scale: 0.75,
            opacity: 0.75,
        });
        showcaseCisPictureTimeline.to('.showcase-cis-pictures-name-1', {
            opacity: 0,
            scale: 0.75,
        }, "<");
        showcaseCisPictureTimeline.to('.showcase-cis-picture-2', {
            scale: 1,
            opacity: 1,
            y: 0,
        }, "<");
        showcaseCisPictureTimeline.to('.showcase-cis-pictures-name-2', {
            opacity: 1,
            scale: 1,
            y: 0,
        }, "<");
        showcaseCisPictureTimeline.to('.showcase-cis-picture-2', {
            opacity: 0.75,
            scale: 0.75,
        }, ">");
        showcaseCisPictureTimeline.to('.showcase-cis-pictures-name-2', {
            opacity: 0,
            scale: 0.75,
        }, "<");
        showcaseCisPictureTimeline.to('.showcase-cis-picture-3', {
            scale: 1,
            opacity: 1,
            y: 0,
        }, "<");
        showcaseCisPictureTimeline.to('.showcase-cis-pictures-name-3', {
            opacity: 1,
            scale: 1,
            y: 0,
        }, "<");

        let photoCisZoomInTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.zoom-cis-scroll',
                start: 'bottom top',
                end: 'bottom -85%',
                scrub: true,
                markers: false,
            },
        });
        photoCisZoomInTimeline.to('.photo-cis-zoom-in', {
            width: window.innerWidth,
            height: window.innerHeight,
            paddingRight: 0,
            paddingLeft: 0,
        });
        photoCisZoomInTimeline.to('.photo-cis-to-zoom-in-1', {
            width: window.innerWidth,
        }, ">");

        let cisNavColorChange = gsap.timeline({
            scrollTrigger: {
                trigger: '.cis-entry-trigger',
                start: 'top top',
                end: 'top top',
                scrub: true,
                markers: false,
            }
        });
        cisNavColorChange.to('.nav-bg-color', {
            backgroundColor: "#201a19",
        });
        cisNavColorChange.to('.vertical-strike-nav-menu-bg', {
            backgroundColor: "#ffdad6",
        }, ">");
        cisNavColorChange.to('.nav-link-underline-bg', {
            backgroundColor: "#ffdad6",
            opacity: 0.9,
        }, ">");
        cisNavColorChange.to('.department-button-color', {
            backgroundColor: "#ffdad6",
        }, ">");
        cisNavColorChange.to('.department-button-text-color', {
            color: "#410003",
        }, ">");

        let ieeeRevealTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#ieee',
                start: "top 10%",
                end: "top 10%",
                scrub: false,
                markers: false,
            }
        });

        ieeeRevealTimeline.to(".reveal-content-text", {
            opacity: 0,
        });
        ieeeRevealTimeline.to(".reveal-content-1", {
            width: 0,
        });
        ieeeRevealTimeline.to(".reveal-content-2", {
            width: 0,
            delay: 0.15,
        }, "<");
        ieeeRevealTimeline.to(".reveal-content-3", {
            width: 0,
            delay: 0.15,
        }, "<");
        ieeeRevealTimeline.to(".reveal-content-4", {
            width: 0,
            delay: 0.15,
        }, "<");
        ieeeRevealTimeline.to(".reveal-content-4", {
            width: 0,
            delay: 0.15,
        }, "<");
        ieeeRevealTimeline.to(".ieee-reveal-content", {
            display: "none",
        });


    });
</script>

<Navbar/>
<div class="h-fit w-full bg-on-surface" id="ieee">
    <div class="h-full absolute top-0 w-full grid grid-cols-1 grid-rows-4 justify-items-center z-[10] ieee-reveal-content">
        <div class="row-start-1 w-full h-full bg-primary-container reveal-content-1"></div>
        <div class="row-start-2 w-full h-full bg-primary-container reveal-content-2"></div>
        <div class="row-start-3 w-full h-full bg-primary-container reveal-content-3"></div>
        <div class="row-start-4 w-full h-full bg-primary-container reveal-content-4"></div>
        <p class="heading-font reveal-content-text text-9xl text-on-primary-container font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            IEEE
        </p>
    </div>
    <div class="h-[300vh] w-full flex flex-col gap-5">
        <div class="h-fit w-full flex flex-col items-center justify-center gap-5 zoom-scroll mt-28 px-[5%]">
            <p class="heading-font text-primary-container text-left text-4xl sm:text-5xl md:text-6xl leading-[1.2] tracking-wide">
                Unveiling the story behind our passionate team
            </p>
            <p class="heading-font text-surface/30 text-sm text-left sm:text-[0.90rem] md:text-lg leading-[1.5] tracking-wider">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi consectetur cumque eaque
                eligendi enim eos exercitationem inventore iste iure iusto.
            </p>
        </div>
        <div class="h-[250px] sm:h-[390px] lg:h-[450px] xl:h-[550px] w-full flex flex-row gap-2 sticky top-0 items-center justify-center photo-zoom-in overflow-x-hidden mt-16">
            <img src="{cisBackground}" alt="random course"
                 class="h-full w-[75%] absolute object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl z-[1] photo-to-zoom-in-1">
            <img src="{csBackground}" alt="random course"
                 class="h-[80%] w-[25%] absolute top-2 -right-14 object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl z-0">
            <img src="{iBackground}" alt="random course"
                 class="h-[80%] w-[25%] absolute bottom-2 -left-14 object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl z-0">
        </div>
    </div>
    <div class="h-full w-full mt-20">
        <Showcase showcaseHeading="Our Team" smallVersion={true}>
            <div class="w-full h-full" slot="inside-side-card">
                <div class="flex flex-col w-full h-full px-4 lg:px-10 justify-center gap-5 showcase-pictures-name-1 absolute top-0">
                    <p class="heading-font text-2xl 2xl:text-3xl text-primary-container">Name Placeholder</p>
                    <p class="heading-font text-surface/50 text-sm 2xl:text-lg">Position Placeholder</p>
                </div>
                <div class="flex flex-col w-full h-full px-4 lg:px-10 justify-center gap-5 opacity-0 scale-[1.15] translate-y-10 showcase-pictures-name-2 absolute top-0">
                    <p class="heading-font text-2xl text-primary-container 2xl:text-3xl">Name Placeholder</p>
                    <p class="heading-font text-surface/50 text-sm 2xl:text-lg">Position Placeholder</p>
                </div>
                <div class="flex flex-col w-full h-full px-4 lg:px-10 justify-center gap-5 opacity-0 scale-[1.15] translate-y-10 showcase-pictures-name-3 absolute top-0">
                    <p class="heading-font text-2xl text-primary-container 2xl:text-3xl">Name Placeholder</p>
                    <p class="heading-font text-surface/50 text-sm 2xl:text-lg">Position Placeholder</p>
                </div>
            </div>
            <div class="w-full h-full" slot="inside-main-card">
                <img src="{cisBackground}" alt="random course"
                     class="h-full w-full object-cover rounded-2xl absolute top-0 bottom-0 z-0 showcase-picture-1">
                <img src="{csBackground}" alt="random course"
                     class="h-full w-full object-cover rounded-2xl absolute top-0 bottom-0 z-0 scale-[1.15] translate-y-10 opacity-0 showcase-picture-2">
                <img src="{iBackground}" alt="random course"
                     class="h-full w-full object-cover rounded-2xl absolute top-0 bottom-0 z-0 scale-[1.15] translate-y-10 opacity-0 showcase-picture-3">
            </div>
        </Showcase>
    </div>
    <div class="flex flex-col h-[450px] w-full bg-primary-container items-center justify-center mt-16 px-10 sm:px-20 md:px-24 lg:px-[12rem] xl:px-[16rem] 2xl:px-[20rem]">
        <p class="heading-font text-on-primary-container text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-wider font-bold">
            Embrace the challenge, ignite your passion, and let your journey unfold.
        </p>
    </div>
    <!--    <div class="h-[75px] w-full bg-surface flex flex-row items-start justify-center">-->
    <!--        <div class="h-full w-fit p-5 flex">-->
    <!--            <p class="heading-font text-lg text-on-surface text-center">-->
    <!--                 Project Available on <a href="https://github.com/vsharma-va/mblr-ieee" target="_blank"-->
    <!--                                     class="text-primary">Github</a>-->
    <!--            </p>-->
    <!--        </div>-->
    <!--    </div>-->
</div>
<div class="h-fit w-full bg-cs-on-surface cs-entry-trigger relative" id="ieee-cs">
    <div class="h-full w-full absolute top-0 ieee-cs-reveal-content-parent">
        <div class="h-screen sticky top-0 w-full grid grid-cols-1 justify-items-center grid-rows-4 z-[10] ieee-cs-reveal-content">
            <div class="row-start-1 w-full h-full bg-cs-primary-container reveal-cs-content-1"></div>
            <div class="row-start-2 w-full h-full bg-cs-primary-container reveal-cs-content-2"></div>
            <div class="row-start-3 w-full h-full bg-cs-primary-container reveal-cs-content-3"></div>
            <div class="row-start-4 w-full h-full bg-cs-primary-container reveal-cs-content-4"></div>
            <p class="heading-font absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 reveal-cs-content-text text-9xl text-cs-on-primary-container font-bold">
                IEEE CS
            </p>
        </div>
    </div>
    <div class="h-[300vh] w-full flex flex-col gap-5">
        <div class="h-fit w-full flex flex-col items-center justify-center gap-5 zoom-cs-scroll mt-28 px-[5%]">
            <p class="heading-font text-cs-primary-container text-left text-4xl sm:text-5xl md:text-6xl leading-[1.2] tracking-wide">
                Unveiling the story behind our passionate team
            </p>
            <p class="heading-font text-cs-surface/30 text-sm text-left sm:text-[0.90rem] md:text-lg leading-[1.5] tracking-wider">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi consectetur cumque eaque
                eligendi enim eos exercitationem inventore iste iure iusto.
            </p>
        </div>
        <div class="h-[250px] sm:h-[390px] lg:h-[450px] xl:h-[550px] w-full flex flex-row gap-2 sticky top-0 items-center justify-center photo-cs-zoom-in overflow-x-hidden mt-16">
            <img src="{cisBackground}" alt="random course"
                 class="h-full w-[75%] absolute object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl z-[1] photo-cs-to-zoom-in-1">
            <img src="{csBackground}" alt="random course"
                 class="h-[80%] w-[25%] absolute top-2 -right-14 object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl z-0">
            <img src="{iBackground}" alt="random course"
                 class="h-[80%] w-[25%] absolute bottom-2 -left-14 object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl z-0">
        </div>
    </div>
    <div class="h-full w-full mt-20">
        <Showcase showcaseHeading="Our Team" smallVersion={true} showcaseHeadingColor="text-cs-primary-container"
                  showcaseTargetDivClass="showcase-cs-pictures-div" showcaseBgSurfaceColor="bg-cs-on-surface">
            <div class="w-full h-full" slot="inside-side-card">
                <div class="flex flex-col w-full h-full px-4 lg:px-10 justify-center gap-5 showcase-cs-pictures-name-1 absolute top-0">
                    <p class="heading-font text-2xl 2xl:text-3xl text-cs-primary-container">Name Placeholder</p>
                    <p class="heading-font text-cs-surface/50 text-sm 2xl:text-lg">Position Placeholder</p>
                </div>
                <div class="flex flex-col w-full h-full px-4 lg:px-10 justify-center gap-5 opacity-0 scale-[1.15] translate-y-10 showcase-cs-pictures-name-2 absolute top-0">
                    <p class="heading-font text-2xl text-cs-primary-container 2xl:text-3xl">Name Placeholder</p>
                    <p class="heading-font text-cs-surface/50 text-sm 2xl:text-lg">Position Placeholder</p>
                </div>
                <div class="flex flex-col w-full h-full px-4 lg:px-10 justify-center gap-5 opacity-0 scale-[1.15] translate-y-10 showcase-cs-pictures-name-3 absolute top-0">
                    <p class="heading-font text-2xl text-cs-primary-container 2xl:text-3xl">Name Placeholder</p>
                    <p class="heading-font text-cs-surface/50 text-sm 2xl:text-lg">Position Placeholder</p>
                </div>
            </div>
            <div class="w-full h-full" slot="inside-main-card">
                <img src="{cisBackground}" alt="random course"
                     class="h-full w-full object-cover rounded-2xl absolute top-0 bottom-0 z-0 showcase-cs-picture-1">
                <img src="{csBackground}" alt="random course"
                     class="h-full w-full object-cover rounded-2xl absolute top-0 bottom-0 z-0 scale-[1.15] translate-y-10 opacity-0 showcase-cs-picture-2">
                <img src="{iBackground}" alt="random course"
                     class="h-full w-full object-cover rounded-2xl absolute top-0 bottom-0 z-0 scale-[1.15] translate-y-10 opacity-0 showcase-cs-picture-3">
            </div>
        </Showcase>
    </div>
    <div class="flex flex-col h-[450px] w-full bg-cs-primary-container items-center justify-center mt-16 px-10 sm:px-20 md:px-24 lg:px-[12rem] xl:px-[16rem] 2xl:px-[20rem]">
        <p class="heading-font text-cs-on-primary-container text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-wider font-bold">
            Embrace the challenge, ignite your passion, and let your journey unfold.
        </p>
    </div>
    <!--    <div class="h-[75px] w-full bg-surface flex flex-row items-start justify-center">-->
    <!--        <div class="h-full w-fit p-5 flex">-->
    <!--            <p class="heading-font text-lg text-on-surface text-center">-->
    <!--                Project Available on <a href="https://github.com/vsharma-va/mblr-ieee" target="_blank"-->
    <!--                                        class="text-primary">Github</a>-->
    <!--            </p>-->
    <!--        </div>-->
    <!--    </div>-->
</div>

<div class="h-fit w-full bg-cis-on-surface cis-entry-trigger relative" id="ieee-cis">
    <div class="h-full w-full absolute top-0 ieee-cis-reveal-content-parent">
        <div class="h-screen sticky top-0 w-full grid grid-cols-1 justify-items-center grid-rows-4 z-[10] ieee-cis-reveal-content">
            <div class="row-start-1 w-full h-full bg-cis-primary-container reveal-cis-content-1"></div>
            <div class="row-start-2 w-full h-full bg-cis-primary-container reveal-cis-content-2"></div>
            <div class="row-start-3 w-full h-full bg-cis-primary-container reveal-cis-content-3"></div>
            <div class="row-start-4 w-full h-full bg-cis-primary-container reveal-cis-content-4"></div>
            <p class="heading-font absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 reveal-cis-content-text text-9xl text-cis-on-primary-container font-bold">
                IEEE CIS
            </p>
        </div>
    </div>
    <div class="h-[300vh] w-full flex flex-col gap-5">
        <div class="h-fit w-full flex flex-col items-center justify-center gap-5 zoom-cis-scroll mt-28 px-[5%]">
            <p class="heading-font text-cis-primary-container text-left text-4xl sm:text-5xl md:text-6xl leading-[1.2] tracking-wide">
                Unveiling the story behind our passionate team
            </p>
            <p class="heading-font text-cis-surface/30 text-sm text-left sm:text-[0.90rem] md:text-lg leading-[1.5] tracking-wider">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi consectetur cumque eaque
                eligendi enim eos exercitationem inventore iste iure iusto.
            </p>
        </div>
        <div class="h-[250px] sm:h-[390px] lg:h-[450px] xl:h-[550px] w-full flex flex-row gap-2 sticky top-0 items-center justify-center photo-cis-zoom-in overflow-x-hidden mt-16">
            <img src="{cisBackground}" alt="random course"
                 class="h-full w-[75%] absolute object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl z-[1] photo-cis-to-zoom-in-1">
            <img src="{csBackground}" alt="random course"
                 class="h-[80%] w-[25%] absolute top-2 -right-14 object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl z-0">
            <img src="{iBackground}" alt="random course"
                 class="h-[80%] w-[25%] absolute bottom-2 -left-14 object-cover inline-block display-image group-hover:scale-110 transition-all duration-300 rounded-2xl z-0">
        </div>
    </div>
    <div class="h-full w-full mt-20">
        <Showcase showcaseHeading="Our Team" smallVersion={true} showcaseHeadingColor="text-cis-primary-container"
                  showcaseTargetDivClass="showcase-cis-pictures-div" showcaseBgSurfaceColor="bg-cis-on-surface">
            <div class="w-full h-full" slot="inside-side-card">
                <div class="flex flex-col w-full h-full px-4 lg:px-10 justify-center gap-5 showcase-cis-pictures-name-1 absolute top-0">
                    <p class="heading-font text-2xl 2xl:text-3xl text-cis-primary-container">Name Placeholder</p>
                    <p class="heading-font text-cis-surface/50 text-sm 2xl:text-lg">Position Placeholder</p>
                </div>
                <div class="flex flex-col w-full h-full px-4 lg:px-10 justify-center gap-5 opacity-0 scale-[1.15] translate-y-10 showcase-cis-pictures-name-2 absolute top-0">
                    <p class="heading-font text-2xl text-cis-primary-container 2xl:text-3xl">Name Placeholder</p>
                    <p class="heading-font text-cis-surface/50 text-sm 2xl:text-lg">Position Placeholder</p>
                </div>
                <div class="flex flex-col w-full h-full px-4 lg:px-10 justify-center gap-5 opacity-0 scale-[1.15] translate-y-10 showcase-cis-pictures-name-3 absolute top-0">
                    <p class="heading-font text-2xl text-cis-primary-container 2xl:text-3xl">Name Placeholder</p>
                    <p class="heading-font text-cis-surface/50 text-sm 2xl:text-lg">Position Placeholder</p>
                </div>
            </div>
            <div class="w-full h-full" slot="inside-main-card">
                <img src="{cisBackground}" alt="random course"
                     class="h-full w-full object-cover rounded-2xl absolute top-0 bottom-0 z-0 showcase-cis-picture-1">
                <img src="{csBackground}" alt="random course"
                     class="h-full w-full object-cover rounded-2xl absolute top-0 bottom-0 z-0 scale-[1.15] translate-y-10 opacity-0 showcase-cis-picture-2">
                <img src="{iBackground}" alt="random course"
                     class="h-full w-full object-cover rounded-2xl absolute top-0 bottom-0 z-0 scale-[1.15] translate-y-10 opacity-0 showcase-cis-picture-3">
            </div>
        </Showcase>
    </div>
    <div class="flex flex-col h-[450px] w-full bg-cis-primary-container items-center justify-center mt-16 px-10 sm:px-20 md:px-24 lg:px-[12rem] xl:px-[16rem] 2xl:px-[20rem]">
        <p class="heading-font text-cis-on-primary-container text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-wider font-bold">
            Embrace the challenge, ignite your passion, and let your journey unfold.
        </p>
    </div>
    <!--    <div class="h-[75px] w-full bg-surface flex flex-row items-start justify-center">-->
    <!--        <div class="h-full w-fit p-5 flex">-->
    <!--            <p class="heading-font text-lg text-on-surface text-center">-->
    <!--                Project Available on <a href="https://github.com/vsharma-va/mblr-ieee" target="_blank"-->
    <!--                                        class="text-primary">Github</a>-->
    <!--            </p>-->
    <!--        </div>-->
    <!--    </div>-->
</div>
