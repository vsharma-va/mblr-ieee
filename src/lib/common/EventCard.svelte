<script>
    import {gsap} from "gsap/dist/gsap";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
    import {onMount} from "svelte";

    let cardHoverTimeline;
    let cardDescriptionHoverTimeline;

    export let bgSurfaceColorClass;
    export let bgDescriptionColorClass;
    export let bgDescriptionTextColorClass;
    export let textColorClass;


    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        cardHoverTimeline = gsap.timeline();
        cardHoverTimeline.to('.event-card-heading-div', {
            top: 10,
            left: 20,
            duration: 1,
        });
        cardHoverTimeline.to('.event-card-data-div', {
            opacity: 1,
        });
        cardHoverTimeline.pause(0)

        cardDescriptionHoverTimeline = gsap.timeline();
        cardDescriptionHoverTimeline.to('.event-card-description-div', {
            opacity: 1,
            zIndex: 1,
        });
        cardDescriptionHoverTimeline.to('.event-card-heading-text', {
            color: "#001f24",
        })
        cardDescriptionHoverTimeline.pause(0);
    });
    function eventCardDescriptionHovered() {
        cardDescriptionHoverTimeline.play();
    }

    function eventCardDescriptionLeave() {
        cardDescriptionHoverTimeline.reverse(0);
    }

    function eventCardHovered() {
        cardHoverTimeline.play();
    }

    function eventCardLeave() {
        cardHoverTimeline.reverse(0);
    }
</script>

<div class="flex flex-col w-full md:w-[75%] lg:w-[55%] xl:w-[43%] 2xl:w-[33%] h-[350px] {bgSurfaceColorClass} border-4 border-border/30 rounded-2xl p-5 items-start justify-end group overflow-hidden relative"
     on:mouseenter={eventCardHovered}
     on:mouseleave={eventCardLeave}>
    <div class="h-full w-full opacity-0 absolute top-0 bottom-0 left-0 p-5 {bgDescriptionColorClass} event-card-description-div flex flex-col items-center justify-center">
        <p class="heading-font text-lg {bgDescriptionTextColorClass} event-card-description-text text-wrap">
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Alias amet consequuntur doloribus dolorum ducimus eaque.</p>
    </div>
    <div class="h-fit w-full flex flex-col absolute bottom-5 left-5 event-card-heading-div">
        <p class="text-surface/30 text-lg heading-font group-hover:opacity-0">Hover/Tap</p>
        <p class="heading-font text-3xl {textColorClass} event-card-heading-text z-[1]">Event
            Heading</p>
    </div>
    <div class="h-fit w-full flex flex-col event-card-data-div opacity-0">
        <p class="heading-font text-lg {textColorClass} text-right"><span
                class="text-surface/50 text-left">Time:</span> 1200hrs</p>
        <p class="heading-font text-lg {textColorClass} text-right"><span
                class="text-surface/50">Day:</span> Monday</p>
        <p class="heading-font text-lg {textColorClass} text-right"><span
                class="text-surface/50">Date:</span>
            31/01/2024</p>
        <p class="heading-font text-lg {textColorClass} text-right"><span class="text-surface/50">Location:</span>
            Acad Block 4</p>
        <div class="h-fit w-full flex flex-row mt-5 gap-5">
            <button class="heading-font text-sm {bgDescriptionTextColorClass} {bgDescriptionColorClass} rounded-full h-fit w-fit px-3 py-2">
                Register
            </button>
            <div class="flex flex-col h-fit px-3 py-2 rounded-full {bgDescriptionColorClass} absolute right-5 z-[1]"
                 on:mouseenter={eventCardDescriptionHovered}
                 on:mouseleave={eventCardDescriptionLeave}>
                <p class="heading-font text-sm {bgDescriptionTextColorClass}">Description</p>
            </div>
        </div>
    </div>
</div>