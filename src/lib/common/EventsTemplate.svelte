<script>
    import {gsap} from "gsap/dist/gsap";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
    import {onMount} from "svelte";

    export let mainHeading;
    export let textColorClass;
    export let revealContainerColorClass;
    export let mainClassName;


    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        let onLoadTimeline = gsap.timeline({});
        onLoadTimeline.to(`.reveal-${mainClassName}-div`, {
            width: "100%",
            duration: 1,
        });
        onLoadTimeline.to(`.reveal-${mainClassName}-div`, {
            x: window.innerWidth,
            duration: 2,
        });
        onLoadTimeline.to(`.${mainClassName}-heading-text-value`, {
            opacity: 1,
        }, "<")
        onLoadTimeline.play(0);

        // let ieeeEventsTimeline = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: `ieee-events-trigger`,
        //         start: 'top top',
        //         end: 'top -50%',
        //         scrub: true,
        //         markers: false,
        //     }
        // });
        // ieeeEventsTimeline.to(`.ieee-heading-text-div`, {
        //     top: 47,
        // });
        // ieeeEventsTimeline.to(`.ieee-heading-text`, {
        //     left: 10,
        //     fontSize: 55,
        // }, "<");


    });
</script>

<div class="flex flex-col h-[250vh] w-full items-center justify-start {mainClassName}-events-trigger sticky top-0">
    <div class="w-full h-screen flex flex-col sticky top-[43%] items-center {mainClassName}-heading-text-div">
        <div class="heading-font text-8xl sm:text-9xl {textColorClass} font-bold tracking-wider {mainClassName}-heading-text absolute overflow-hidden">
            <div class="opacity-0 {mainClassName}-heading-text-value flex flex-col items-center justify-center text-center">{mainHeading}</div>
            <div class="{revealContainerColorClass} w-0 h-[96px] sm:h-[128px] reveal-{mainClassName}-div absolute top-0"></div>
        </div>
    </div>
    <div class="w-full h-fit gap-5 p-5 sm:px-32 md:px-44 flex flex-col items-center justify-center">
        <slot name="event-cards"></slot>
    </div>
</div>