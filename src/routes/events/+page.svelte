<script>

    import EventCard from "$lib/events/EventCard.svelte";
    import InfiniteMarquee from "$lib/common/InfiniteMarquee.svelte";
    import Header from "$lib/common/Header.svelte";

    export let data;

    let registeredEventIds = [];

    if (data.userRegisteredEventIds) {
        for (let eventId of data.userRegisteredEventIds) {
            registeredEventIds.push(eventId.event_id);
        }
    }
</script>

<div class="w-full h-fit min-h-screen flex flex-col items-center justify-start bg-surface content relative overflow-hidden">
    <Header />
    <div class="w-full h-fit mt-14">
        <InfiniteMarquee isSmall="{false}" dimText="HTTPS://" mainText="IEEE.SOCIETY/EVENTS" textColor="text-on-surface"
                         differentiatingFactor="events"/>
    </div>
    <div class="flex flex-col md:flex-row flex-wrap items-center justify-center p-5 h-full w-full mt-8 gap-3">
        {#each data.eventData.eventCards as event}
            <EventCard eventDescription="{event.eventDescription}" eventDate="{event.eventDateTime}"
                       eventLocation="{event.eventLocation}"
                       societyName="{event.societyName}" eventHeading="{event.eventName}" eventId="{event.id}"
                       isRegistered="{registeredEventIds.includes(event.id)}"
                       isEventCompleted="{event.isEventCompleted}"/>
        {/each}
    </div>
</div>