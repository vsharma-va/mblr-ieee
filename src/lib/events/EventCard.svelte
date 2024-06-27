<script>
    import {page} from "$app/stores";
    import {signIn} from "@auth/sveltekit/client";
    import InfiniteMarquee from "$lib/common/InfiniteMarquee.svelte";
    import {enhance} from "$app/forms";
    import OnDemandSnackBar from "$lib/error/OnDemandSnackBar.svelte";
    import ContentLoaderIndicator from "$lib/common/ContentLoaderIndicator.svelte";

    export let eventHeading;
    export let eventDate;
    export let eventLocation;
    export let eventDescription;
    export let societyName;
    export let eventId;
    export let isRegistered;
    export let isEventCompleted;

    let attemptRegistrationButton;
    let registrationErrorText = undefined;
    let registrationSuccess = false;
    let onlySocietyName;
    let isFormLoading = false;

    if (societyName.split('_').length === 2) {
        onlySocietyName = societyName.split('_')[1].toLowerCase();
    } else {
        onlySocietyName = '';
    }

    let getRequiredColor = (suffix) => {
        return onlySocietyName ? `${onlySocietyName}-${suffix}` : `${suffix}`;
    }

    eventDate = new Date(eventDate);
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true // Use 24-hour time format
    };
    eventDate = new Intl.DateTimeFormat('en-US', options).format(eventDate);

    function attemptRegistration({formData, cancel}) {
        if ($page.data?.session?.user) {
            formData.set('eventId', attemptRegistrationButton.dataset.eventId);
        } else {
            isFormLoading = false;
            cancel();
        }
    }

    $: reactiveRegistrationErrorText = registrationErrorText;
    $: reactiveRegistrationSuccess = registrationSuccess;
</script>

<div class="h-[250px] w-full max-w-[465px] relative">
    <div class="h-full w-full bg-{getRequiredColor('primary-container')}{isEventCompleted?'/70': ''} absolute top-1 left-1 rounded-xl"></div>
    <div class="h-[250px] w-full max-w-[465px] bg-on-surface{isEventCompleted?'/70':''} rounded-xl flex flex-col p-3 gap-2 relative -translate-x-1 -translate-y-1 overflow-hidden items-center justify-center z-[3]">
        {#if reactiveRegistrationErrorText}
            {#key reactiveRegistrationErrorText}
                <OnDemandSnackBar bind:errorText={reactiveRegistrationErrorText} isError="{true}"/>
            {/key}
        {/if}
        {#if reactiveRegistrationSuccess}
            {#key reactiveRegistrationSuccess}
                <OnDemandSnackBar bind:errorText="{reactiveRegistrationSuccess}" isError="{false}"/>
            {/key}
        {/if}
        <div class="h-fit w-full p-1 bg-{getRequiredColor('primary-container')} rounded-xl">
            <InfiniteMarquee mainText="{societyName.replace('_', '.')}.SOCIETY" dimText="HTTPS://"
                             textColor="text-on-{getRequiredColor('primary-container')}"
                             isSmall={true} differentiatingFactor="eventCard-{societyName}"/>
            <!-- <p class="text-lg font-bold primary-font text-on-primary-container">IEEE</p> -->
        </div>

        <div class="h-fit w-full flex flex-col gap-2 mt-2">
            <p class="text-2xl font-bold primary-font text-surface leading-[1]">{eventHeading}</p>
            <div class="h-fit w-full flex flex-row items-center justify-between">
                <p class="text-lg font-thin primary-font text-surface/80 leading-[1]">{eventDate}</p>
                <p class="text-lg font-thin primary-font text-surface/80 leading-[1]">{eventLocation}</p>
            </div>
        </div>
        <div class="h-full w-full flex flex-col items-center justify-center">
            <p class="text-sm font-thin primary-font text-surface leading-[1]">
                {eventDescription}
            </p>
        </div>
        <div class="h-full w-full flex flex-row items-center justify-end">
            {#if !$page.data?.session?.user}
                <button class="h-fit w-fit p-1 px-3 bg-{getRequiredColor('primary-container')} text-on-{getRequiredColor('primary-container')} text-lg primary-font rounded-xl"
                        on:click={async () => {
                        await signIn("google", {
                            callbackUrl: `/auth?from=${$page.url.pathname.slice(1, $page.url.pathname.length).replace('/', '-')}`,
                        });
                    }}>
                    LOGIN
                </button>
            {:else}
                {#if isRegistered}
                    <div class="h-fit w-fit p-1 px-3 bg-{getRequiredColor('primary-container')} text-on-{getRequiredColor('primary-container')} text-lg primary-font rounded-xl -translate-y-1 -translate-x-1 shadow-[2px_2px_0px_0px_rgba(20,20,20,1)]">
                        REGISTERED!
                    </div>
                {:else if isEventCompleted}
                    <div class="h-fit w-fit p-1 px-3 bg-{getRequiredColor('primary-container')}{isEventCompleted?'/70':''} text-on-{getRequiredColor('primary-container')} text-lg primary-font rounded-xl -translate-y-1 -translate-x-1 shadow-[2px_2px_0px_0px_rgba(20,20,20,1)]">
                        EVENT COMPLETED!
                    </div>
                {:else}
                    <form action="?/registerUser" method="post" use:enhance={(data) => {
                    isFormLoading = true;
                    attemptRegistration(data);
                    return async ({result}) => {
                        if(result.type === 'failure') {
                            isFormLoading = false;
                            console.log(result.data.details);
                            registrationErrorText = result.data.details;
                        } else if(result.type === 'success') {
                            isFormLoading = false;
                            registrationSuccess = result.data.details;
                            isRegistered = true;
                        }
                    }
                }}>
                        <button class="h-fit w-fit p-1 px-3 bg-{getRequiredColor('primary-container')} text-on-{getRequiredColor('primary-container')} text-lg primary-font rounded-xl relative"
                                data-buddy-text="{onlySocietyName ? onlySocietyName.toUpperCase() : 'IEEE'}"
                                data-event-id="{eventId}"
                                bind:this={attemptRegistrationButton}>
                            {#if isFormLoading}
                                <ContentLoaderIndicator backgroundColor="bg-on-primary-container"
                                                        heightAndWidth="h-4 w-4 lg:h-5 lg:w-5"/>
                                <span class="opacity-0">REGISTER</span>
                            {:else}
                                REGISTER
                            {/if}
                        </button>
                    </form>
                {/if}
            {/if}
        </div>
    </div>
</div>