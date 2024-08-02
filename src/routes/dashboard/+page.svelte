<script>
    import Header from "$lib/common/Header.svelte";
    import InfiniteMarquee from "$lib/common/InfiniteMarquee.svelte";
    import EventCard from "$lib/events/EventCard.svelte";

    export let data;
</script>

<svelte:head>
    <title>DASHBOARD</title>
</svelte:head>

<div class="h-fit min-h-screen w-full bg-surface content">
    <Header/>
    <div class="w-full h-fit pt-14">
        <InfiniteMarquee dimText="HTTPS://" mainText="IEEE.SOCIETY/DASHBOARD" isSmall="{false}"
                         differentiatingFactor="dashboard-heading" textColor="text-on-surface"/>
    </div>
    <div class="flex flex-col md:flex-row flex-wrap items-center justify-center p-5 h-full w-full mt-8 gap-3">
        {#if data.registrationData.length !== 0}
            {#each data.eventData.eventCards as event, index}
                <EventCard eventDescription="{event.eventDescription}" eventDate="{event.eventDateTime}"
                           eventLocation="{event.eventLocation}"
                           societyName="{event.societyName}" eventHeading="{event.eventName}" eventId="{event.id}"
                           isRegistered="{true}"
                           isEventCompleted="{event.isEventCompleted}" noRegistration="{true}"
                           joinCode="{data.registrationData[index].join_code}"/>
            {/each}
        {/if}
    </div>
</div>