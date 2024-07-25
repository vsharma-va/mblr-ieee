<script>
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
                markers: false,
            }
        });
        onScrollTimeline.to('.footer-child', {
            width: '100%',
        });
    })
</script>
<div class="h-full w-full sticky mt-24 top-0 flex flex-col items-center justify-center bg-surface content footer">
    <div class="h-full w-full flex flex-col sticky bottom-0 bg-on-surface rounded-xl items-center justify-between overflow-hidden p-5 gap-3 footer-child">
        <InfiniteMarquee dimText="HTTPS://" mainText="IEEE.SOCIETY" isSmall={false} differentiatingFactor="footer"/>
        <div class="flex flex-col md:flex-row w-full h-fit md:h-[225px] gap-2 mt-2">
            <div class="w-full md:w-1/2 h-1/2 md:h-full bg-primary-container rounded-xl flex flex-col items-center justify-between p-3 xl:p-5">
                <p class="text-on-primary-container font-thin primary-font text-sm md:text-lg xl:text-2xl md:leading-[1.3]">
                    We're a diverse group of societies covering every tech domain you can imagine. Dive into coding,
                    robotics, AI, and more. Discover your passion and thrive with us!
                </p>
            </div>
            <div class="w-full md:w-1/2 h-1/2 md:h-full bg-primary-container rounded-xl flex flex-col items-center justify-between p-3 gap-1">
                <div class="w-full h-fit flex items-center justify-end">
                    <p class="text-on-primary-container primary-font text-lg md:text-xl xl:text-2xl font-bold">LINKS</p>
                </div>
                <div class="flex flex-row items-stretch justify-between w-full h-full">
                    <div class="flex flex-col w-fit h-full items-start justify-start gap-1">
                        <p data-buddy-text="@ieee" class="text-on-primary-container primary-font text-sm md:text-lg xl:text-xl font-thin">
                            INSTAGRAM</p>
                        <p data-buddy-text="@ieee-linkedin" class="text-on-primary-container primary-font text-sm md:text-lg xl:text-xl font-thin">
                            LINKEDIN</p>
                        <p data-buddy-text="@ieee-youtube" class="text-on-primary-container primary-font text-sm md:text-lg xl:text-xl font-thin">
                            YOUTUBE</p>
                    </div>
                    <div class="flex flex-col flex-wrap w-fit h-full items-center justify-start gap-1">
                        <a href="/events" data-buddy-text="/events"
                           class="text-on-primary-container primary-font text-sm md:text-lg xl:text-xl font-thin">IEEE
                            EVENTS</a>
                        <a href="/events" data-buddy-text="/events"
                           class="text-on-primary-container primary-font text-sm md:text-lg xl:text-xl font-thin">CS
                            EVENTS</a>
                        <a href="/events" data-buddy-text="/events"
                           class="text-on-primary-container primary-font text-sm md:text-lg xl:text-xl font-thin">CIS
                            EVENTS</a>
                        <a href="/events" data-buddy-text="/events"
                           class="text-on-primary-container primary-font text-sm md:text-lg xl:text-xl font-thin">WIE
                            EVENTS</a>
                        <a href="/events" data-buddy-text="/events"
                           class="text-on-primary-container primary-font text-sm md:text-lg xl:text-xl font-thin">GRSS
                            EVENTS</a>
                    </div>
<!--                    <div class="flex flex-col flex-wrap w-fit h-full items-center justify-start gap-3">-->

<!--                    </div>-->
                    <div class="flex flex-col w-fit h-full items-center justify-start gap-3">
                        <p class="text-on-primary-container primary-font text-sm md:text-lg xl:text-xl font-thin">
                            GITHUB</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-fit w-full flex items-center justify-center bg-surface p-3 rounded-xl">
            <p class="text-on-surface text-thin text-xl primary-font">CODE AVAILABLE ON <a
                    data-buddy-text="/vsharma-va"
                    href="https://github.com/vsharma-va/mblr-ieee"
                    target="_blank"
                    class="underline underline-primary-container">GITHUB</a></p>
        </div>
    </div>
</div>