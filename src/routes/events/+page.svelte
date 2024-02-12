<script>
    import EventsTemplate from "$lib/common/EventsTemplate.svelte";
    import EventCard from "$lib/common/EventCard.svelte";
    import {onMount} from "svelte";
    import {gsap} from "gsap/dist/gsap";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        let csNavColorChange = gsap.timeline({
            scrollTrigger: {
                trigger: `.cs-entry-trigger`,
                start: 'top top',
                end: 'top -10%',
                scrub: true,
                markers: false,
            }
        });
        csNavColorChange.to('.nav-bg-color', {
            backgroundColor: "#1d1c16",
        });
        csNavColorChange.to('.department-button-color', {
            backgroundColor: "#f1e66b",
        }, ">");
        csNavColorChange.to('.department-button-text-color', {
            color: "#1f1c00",
        }, ">");

        let cisNavColorChange = gsap.timeline({
            scrollTrigger: {
                trigger: `.cis-entry-trigger`,
                start: 'top top',
                end: 'top -10%',
                scrub: true,
                markers: false,
            }
        });
        cisNavColorChange.to('.nav-bg-color', {
            backgroundColor: "#201a19",
        });
        cisNavColorChange.to('.department-button-color', {
            backgroundColor: "#ffdad6",
        }, ">");
        cisNavColorChange.to('.department-button-text-color', {
            color: "#410003",
        }, ">");
    });

</script>

<div class="h-fit w-full flex flex-row justify-between items-center fixed top-0 z-[2] backdrop-blur-xl bg-on-surface nav-bg-color">
    <div class="w-full h-full px-[10px] flex flex-col py-2 items-start justify-start">
        <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="26"
                viewBox="0 0 448 512"
                class="fill-white"
        >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
            <path
                    d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
        </svg>
    </div>
    <div class="w-full h-full flex flex-col items-end justify-start py-2 pr-[10px]">
        <div class="w-fit h-fit bg-primary-container department-button-color py-2 px-4 rounded-2xl">
            <p class="text-sm heading-font tracking-wide text-on-primary-container department-button-text-color">Departments&nbsp;&nbsp;&nbsp;></p>
        </div>
    </div>
</div>
<div class="h-fit w-full bg-on-surface">
    <EventsTemplate mainHeading="IEEE" textColorClass="text-primary-container"
                    revealContainerColorClass="bg-primary-container" mainClassName="ieee">
        <div class="h-full w-full flex flex-col items-center justify-center gap-5" slot="event-cards">
            <EventCard textColorClass="text-primary-container" bgDescriptionColorClass="bg-primary-container"
                       bgDescriptionTextColorClass="text-on-primary-container"
                       bgSurfaceColorClass="bg-on-surface"></EventCard>
            <EventCard textColorClass="text-primary-container" bgDescriptionColorClass="bg-primary-container"
                       bgDescriptionTextColorClass="text-on-primary-container"
                       bgSurfaceColorClass="bg-on-surface"></EventCard>
            <EventCard textColorClass="text-primary-container" bgDescriptionColorClass="bg-primary-container"
                       bgDescriptionTextColorClass="text-on-primary-container"
                       bgSurfaceColorClass="bg-on-surface"></EventCard>
        </div>
    </EventsTemplate>
</div>
<div class="h-fit w-full bg-cs-on-surface cs-entry-trigger">
    <EventsTemplate mainHeading="IEEE CS" textColorClass="text-cs-primary-container"
                    revealContainerColorClass="bg-cs-primary-container" mainClassName="ieee-cs">
        <div class="h-full w-full flex flex-col items-center justify-center gap-5" slot="event-cards">
            <EventCard textColorClass="text-cs-primary-container" bgDescriptionColorClass="bg-cs-primary-container"
                       bgDescriptionTextColorClass="text-cs-on-primary-container"
                       bgSurfaceColorClass="bg-cs-on-surface"></EventCard>
            <EventCard textColorClass="text-cs-primary-container" bgDescriptionColorClass="bg-cs-primary-container"
                       bgDescriptionTextColorClass="text-cs-on-primary-container"
                       bgSurfaceColorClass="bg-cs-on-surface"></EventCard>
            <EventCard textColorClass="text-cs-primary-container" bgDescriptionColorClass="bg-cs-primary-container"
                       bgDescriptionTextColorClass="text-cs-on-primary-container"
                       bgSurfaceColorClass="bg-cs-on-surface"></EventCard>
        </div>
    </EventsTemplate>
</div>
<div class="h-fit w-full bg-cis-on-surface cis-entry-trigger">
    <EventsTemplate mainHeading="IEEE CIS" textColorClass="text-cis-primary-container"
                    revealContainerColorClass="bg-cis-primary-container" mainClassName="ieee-cis">
        <div class="h-full w-full flex flex-col items-center justify-center gap-5" slot="event-cards">
            <EventCard textColorClass="text-cis-primary-container" bgDescriptionColorClass="bg-cis-primary-container"
                       bgDescriptionTextColorClass="text-cis-on-primary-container"
                       bgSurfaceColorClass="bg-cis-on-surface"></EventCard>
            <EventCard textColorClass="text-cis-primary-container" bgDescriptionColorClass="bg-cis-primary-container"
                       bgDescriptionTextColorClass="text-cis-on-primary-container"
                       bgSurfaceColorClass="bg-cis-on-surface"></EventCard>
            <EventCard textColorClass="text-cis-primary-container" bgDescriptionColorClass="bg-cis-primary-container"
                       bgDescriptionTextColorClass="text-cis-on-primary-container"
                       bgSurfaceColorClass="bg-cis-on-surface"></EventCard>
        </div>
    </EventsTemplate>
</div>