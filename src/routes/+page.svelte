<script>
    import {onMount} from "svelte";
    import {gsap} from "gsap/dist/gsap";
    import DynamicCard from "$lib/landing/DynamicCard.svelte";
    import Loader from "$lib/common/Loader.svelte";

    let userDiscardName = '';
    let userActualName = '';
    let currentTime;
    let onLoadTimeline;

    onMount(() => {
        onLoadTimeline = gsap.timeline({
            onComplete: () => {
                userActualName = 'STRANGER';
            }
        })

        onLoadTimeline.to('.main-heading-container', {
            x: 0,
            duration: 1.5,
            ease: 'power4.inOut',
        });
        onLoadTimeline.to('.main-heading-support', {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power4.inOut',
        });
        onLoadTimeline.to('.type-username', {
            text: 'STRANGER',
            duration: 1,
        });
        onLoadTimeline.to('.dynamic-common', {
            scale: 1,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'power4.inOut',
        }, '<');
        onLoadTimeline.to(".main-navbar", {
            scale: 1,
            ease: "power4.inOut",
            duration: 0.75,
        }, '<');
        onLoadTimeline.to(
            ".navbar-closed-display",
            {
                scale: 1,
                duration: 0.75,
                ease: "power4.inOut",
            },
            "<",
        );
        onLoadTimeline.to(
            ".navbar-closed-content-display",
            {
                scale: 1,
                duration: 0.75,
                ease: "power4.inOut",
            },
            "<0.1",
        );
        onLoadTimeline.pause();
        setInterval(() => {
            let date = new Date();
            const options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true // Use 24-hour time format
            };
            currentTime = new Intl.DateTimeFormat('en-US', options).format(date);
        }, 1000);
    });

    $: reactiveTime = currentTime;
</script>

<Loader on:complete={() => {onLoadTimeline.play(0)}}/>
<div class="h-fit min-h-screen w-full bg-surface">
    <div class="h-screen w-full flex flex-col items-center justify-center pb-12 overflow-hidden">
        <div class="absolute top-2 left-2 w-fit h-fit">
            <p class="text-sm text-on-surface primary-font">
                <span class="text-on-surface/50">WELCOME,</span> <span class="type-username">{userActualName}</span>
            </p>
        </div>
        <DynamicCard subset="name" position="top-14 left-3" heading="NAME" zLevel="2">
            <input type="text" placeholder="...your name" class="text-on-surface/50 font-bold primary-font px-3"
                   style="background: none; border: none; outline: none; opacity: 0.5;"
                   bind:value={userDiscardName}>
            <button class="h-fit w-fit p-2 bg-surface border-[1px] border-on-surface/50 text-on-surface primary-font font-bold text-sm rounded-xl"
                    on:click={() => {
                        userActualName = userDiscardName.toUpperCase();
                    }}>
                CONFIRM
            </button>
        </DynamicCard>
        <DynamicCard subset="time" position="top-32 right-3" heading="DATE & TIME" zLevel="3">
            <div class="w-fit h-full self-start flex flex-col justify-between">
                <div class="w-fit h-full self-start flex flex-col">
                    <p class="primary-font text-sm text-on-surface/50 self-start tracking-widest">
                        <span class="text-primary/80">BENGALURU</span>, IN
                    </p>
                    <p class="primary-font font-bold text-lg text-on-surface self-start tracking-widest">
                        {#if reactiveTime}
                            {reactiveTime.split(', ')[2]}
                        {/if}
                    </p>
                </div>
                <p class="primary-font font-bold text-sm text-on-surface/50 self-start tracking-widest">
                    {#if reactiveTime}
                        {reactiveTime.split(',').slice(0, 2)}
                    {/if}
                </p>
            </div>
        </DynamicCard>
        <DynamicCard subset="socials" position="bottom-32 left-3" heading="SOCIALS" zlevel="4">
            <div class="w-full h-full flex flex-col items-start justify-center gap-2">
                <a href="https://google.com" class="primary-font text-sm text-on-surface/50">
                    INSTAGRAM
                </a>
                <a href="https://google.com" class="primary-font text-sm text-on-surface/50">
                    TWITTER
                </a>
                <a href="https://google.com" class="primary-font text-sm text-on-surface/50">
                    YOUTUBE
                </a>
            </div>
        </DynamicCard>
        <DynamicCard subset="announcements" position="bottom-[12rem] right-3" heading="ANNOUNCEMENTS" zlevel="5">
            <div class="w-full h-full flex flex-col items-start justify-between">
                <div class="w-fit h-fit">
                    <p class="text-sm text-on-surface/50 primary-font text-wrap">
                        CHECK BACK AGAIN FOR EXCITING ANNOUNCEMENTS!
                    </p>

                </div>
                <div class="w-fit h-fit">
                    <p class="text-sm text-primary/80 primary-font">
                        GET IN TOUCH
                    </p>
                    <p class="text-lg text-on-surface primary-font leading-[1]">
                        hello@ieee.society
                    </p>
                </div>
            </div>
        </DynamicCard>
        <div class="h-fit w-full flex flex-row text-nowrap items-start justify-center main-heading-container translate-x-[100%]">
            <div class="primary-font flex flex-row text-[2.5rem] text-on-surface self-start text-left font-bold absolute -left-[26%]">
                <p class="text-on-surface/30 font-thin">HTTPS://</p>
                <div class="flex flex-col">
                    <div class="h-fit w-fit flex overflow-hidden">
                        <p class="text-lg primary-font text-primary font-thin absolute bottom-[100%] leading-[1] -translate-y-2 opacity-0 main-heading-support">
                            VERSION'24
                        </p>
                    </div>
                    <p>IEEE.SOCIETY</p>
                    <div class="h-fit w-fit flex overflow-hidden">
                        <p class="text-lg primary-font text-on-surface font-thin absolute top-[100%] leading-[1] text-wrap translate-y-2 opacity-0 main-heading-support">
                            IEEE STUDENT BRANCH OF MIT BENGALURU <br>
                            <!--                        LINKING <span class="brand-font">knowledge</span>, LEADING <span class="brand-font">progress</span>-->
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--    <div class="h-[400vh] w-full flex flex-col items-start justify-center">-->
    <!--        <div class="h-screen w-full bg-surface sticky top-0 flex flex-row items-center justify-start overflow-x-scroll gap-[100vw]">-->
    <!--            <AboutSliderSingle heading="IEEE"/>-->
    <!--            <AboutSliderSingle heading="IEEE CS"/>-->
    <!--        </div>-->
    <!--    </div>-->
</div>
