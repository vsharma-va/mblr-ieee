<script>
    import footerImg from "$lib/assets/images/footer.gif";
    import InfiniteMarquee from "$lib/common/InfiniteMarquee.svelte";
    import {gsap} from "gsap/dist/gsap";
    import ScrollTrigger from "gsap/dist/ScrollTrigger";
    import {onMount} from "svelte";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        let onScrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.footer',
                start: 'top top',
                end: 'top -200%',
                scrub: true,
                markers: true,
            }
        });
        onScrollTimeline.to('.footer-child', {
            width: '100%',
        });
    })
</script>
<div class="h-[200vh] w-full sticky top-0 flex flex-col items-center justify-start bg-surface content pt-20 pb-28 footer">
    <div class="w-[90%] sm:w-[80%] min-h-[100vh] max-h-fit flex sticky top-10 flex-col bg-on-surface rounded-xl items-center justify-between overflow-hidden p-5 gap-3 footer-child">
        <InfiniteMarquee/>
        <div class="w-full h-1/2 bg-primary-container rounded-xl flex flex-col items-center justify-between p-3 xl:p-5">
            <img src="{footerImg}" alt="animated gif of bars sliding in opposite direction"
                 class="w-full object-cover mix-blend-darken max-h-[45%]">
            <p class="text-on-primary-container font-thin primary-font text-sm md:text-lg xl:text-2xl md:leading-[1.3]">
                We're a diverse group of societies covering every tech domain you can imagine. Dive into coding,
                robotics, AI, and more. Discover your passion and thrive with us!
            </p>
        </div>
        <div class="w-full h-1/2 bg-primary-container rounded-xl flex flex-col items-center justify-between p-3 gap-3">
            <div class="w-full h-fit flex items-center justify-end">
                <p class="text-on-primary-container primary-font text-lg md:text-xl xl:text-2xl font-bold">LINKS</p>
            </div>
            <div class="flex flex-row items-stretch justify-between w-full h-full">
                <div class="flex flex-col w-fit h-full items-start justify-start gap-3">
                    <p class="text-on-primary-container primary-font text-sm md:text-lg xl:text-xl font-thin">INSTAGRAM</p>
                    <p class="text-on-primary-container primary-font text-sm md:text-lg xl:text-xl font-thin">LINKEDIN</p>
                    <p class="text-on-primary-container primary-font text-sm md:text-lg xl:text-xl font-thin">YOUTUBE</p>
                </div>
                <div class="flex flex-col w-fit h-full items-center justify-start gap-3">
                    <p class="text-on-primary-container primary-font text-sm md:text-lg xl:text-xl font-thin">IEEE EVENTS</p>
                    <p class="text-on-primary-container primary-font text-sm md:text-lg xl:text-xl font-thin">CS EVENTS</p>
                    <p class="text-on-primary-container primary-font text-sm md:text-lg xl:text-xl font-thin">CIS EVENTS</p>
                    <p class="text-on-primary-container primary-font text-sm md:text-lg xl:text-xl font-thin">WIE EVENTS</p>
                </div>
                <div class="flex flex-col w-fit h-full items-center justify-start gap-3">
                    <p class="text-on-primary-container primary-font text-sm md:text-lg xl:text-xl font-thin">GITHUB</p>
                </div>
            </div>
        </div>
        <div class="h-fit w-full flex items-center justify-center bg-surface p-3 rounded-xl">
            <p class="text-on-surface text-thin text-xl primary-font">CODE AVAILABLE ON GITHUB</p>
        </div>
    </div>
</div>