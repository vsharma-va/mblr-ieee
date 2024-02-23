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
    });
</script>

<Navbar/>
<div class="h-fit w-full bg-on-surface">
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
    <div class="h-[75px] w-full bg-surface flex flex-row items-start justify-center">
        <div class="h-full w-fit p-5 flex">
            <p class="heading-font text-lg text-on-surface text-center">
                 Project Available on <a href="https://github.com/vsharma-va/mblr-ieee" target="_blank"
                                     class="text-primary">Github</a>
            </p>
        </div>
    </div>
</div>