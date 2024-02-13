<script>
    import EventsTemplate from "$lib/common/EventsTemplate.svelte";
    import EventCard from "$lib/common/EventCard.svelte";
    import Navbar from "$lib/common/Navbar.svelte";
    import {onMount} from "svelte";

    onMount(() => {

    })
</script>

<Navbar/>
<div class="h-fit w-full bg-on-surface" id="ieee">
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
<div class="h-fit w-full bg-cs-on-surface cs-entry-trigger" id="ieee-cs">
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
<div class="h-fit w-full bg-cis-on-surface cis-entry-trigger" id="ieee-cis">
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