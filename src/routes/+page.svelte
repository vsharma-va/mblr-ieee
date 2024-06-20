<script>
    import {onMount} from "svelte";
    import {gsap} from "gsap/dist/gsap";
    import DynamicCard from "$lib/landing/DynamicCard.svelte";
    import CursorBuddy from "$lib/common/CursorBuddy.svelte";
    import Loader from "$lib/common/Loader.svelte";

    let userDiscardName = '';
    let userActualName = 'STRANGER';
    let currentTime;
    let onLoadTimeline;

    onMount(() => {
        onLoadTimeline = gsap.timeline();

        onLoadTimeline.to('.main-heading-container', {
            x: 0,
            duration: 1.5,
            ease: 'power4.inOut',
        });
        onLoadTimeline.to('.buddy', {
            display: 'flex',
        });
        onLoadTimeline.to('.main-heading-support', {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power4.inOut',
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
    $: reactiveUserName = userActualName;
</script>

<Loader on:complete={() => {onLoadTimeline.play(0)}}/>
<CursorBuddy/>
<div class="h-fit min-h-screen w-full bg-surface relative overflow-hidden">
    <div class="absolute top-0 h-full w-full blur-sm object-fit">
        <!--        <CanvasRibbon/>-->
    </div>
    <div class="h-screen w-full flex flex-col items-center justify-center pb-12 overflow-hidden landing">
        <div class="absolute top-2 left-2 w-fit h-fit">
            <p class="text-sm lg:text-xl text-on-surface primary-font">
                <span class="text-on-surface/50">WELCOME,</span> <span class="type-username">{reactiveUserName}</span>
            </p>
        </div>
        <DynamicCard subset="name" position="md:left-12 top-14 left-3" heading="NAME" zLevel="2">
            <input type="text" placeholder="...your name"
                   class="text-on-surface/70 font-bold primary-font px-3 h-full w-full"
                   style="background: none; border: none; outline: none; opacity: 0.5;"
                   bind:value={userDiscardName}
                   on:click={(event) => {event.stopPropagation();}}>
            <button class="h-fit w-fit p-2 bg-surface border-[1px] border-on-surface/50 text-on-surface primary-font font-bold text-sm rounded-xl"
                    on:click={() => {
                        userActualName = userDiscardName.toUpperCase();
                    }}>
                CONFIRM
            </button>
        </DynamicCard>
        <DynamicCard subset="time" position="top-32 right-3 md:right-12" heading="DATE & TIME" zLevel="3">
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
        <DynamicCard subset="socials" position="bottom-32 left-3 md:left-12" heading="SOCIALS" zlevel="4">
            <div class="w-full h-full flex flex-col items-start justify-center gap-2">
                <a href="https://google.com" class="primary-font text-sm text-on-surface/50"
                   data-buddy-text="@ieee">
                    INSTAGRAM
                </a>
                <a href="https://google.com" class="primary-font text-sm text-on-surface/50"
                   data-buddy-text="@ieee-twitter">
                    TWITTER
                </a>
                <a href="https://google.com" class="primary-font text-sm text-on-surface/50"
                   data-budy-text="@ieee-youtube">
                    YOUTUBE
                </a>
            </div>
        </DynamicCard>
        <DynamicCard subset="announcements" position="bottom-[12rem] right-3 md:right-12" heading="ANNOUNCEMENTS"
                     zlevel="5">
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
        <div class="h-fit w-full flex flex-row text-nowrap items-center justify-center main-heading-container -translate-x-[100%]">
            <h1 class="primary-font flex w-full h-full self-start flex-row text-on-surface text-left font-bold text-[11vw]">
                <span class="text-on-surface/30 font-thin">S://</span>
                <span class="flex flex-col justify-center">
                    <span class="h-fit w-full flex overflow-hidden justify-between items-stretch absolute bottom-[100%] lg:bottom-[85%] leading-[1]">
                        <!--                        <div class="flex h-fit w-fit items-center justify-center px-2 border-[1px] border-on-surface rounded-xl -translate-y-2 opacity-0 main-heading-support">-->
                        <!--                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"-->
                        <!--                                 class="fill-on-surface/50">-->
                        <!--                                <path d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9 8 4 8.9 4 10 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 10 C 20 8.9 19.1 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 12 13 C 13.1 13 14 13.9 14 15 C 14 16.1 13.1 17 12 17 C 10.9 17 10 16.1 10 15 C 10 13.9 10.9 13 12 13 z"/>-->
                        <!--                            </svg>-->
                        <!--                        </div>-->
                        <span class="text-sm lg:text-xl primary-font text-primary font-thin -translate-y-2 opacity-0 main-heading-support">
                            VERSION'24
                        </span>
                    </span>
                    <div class="h-fit w-fit flex flex-row">
                        <div class="relative group cursor-pointer">
                            IEEE
                            <div class="h-[70%] w-full absolute top-1/2 -translate-y-1/2 border-2 border-primary opacity-0 group-hover:opacity-100 duration-300 ease-linear"
                                 data-buddy-text="ABOUT">
                                <div class="absolute -left-[6px] -top-[6px] h-3 w-3 bg-on-surface border-2 border-primary"></div>
                                <div class="absolute -right-[6px] -top-[6px] h-3 w-3 bg-on-surface border-2 border-primary"></div>
                                <div class="absolute -left-[6px] -bottom-[6px] h-3 w-3 bg-on-surface border-2 border-primary"></div>
                                <div class="absolute -right-[6px] -bottom-[6px] h-3 w-3 bg-on-surface border-2 border-primary"></div>
                            </div>
                        </div>
                        <div>
                            .
                        </div>
                        <div class="relative group cursor-pointer">
                            SOCIETY
                            <div class="h-[70%] w-full absolute top-1/2 -translate-y-1/2 border-2 border-primary opacity-0 group-hover:opacity-100 duration-300 ease-linear"
                                 data-buddy-text="EVENTS">
                                <div class="absolute -left-[6px] -top-[6px] h-3 w-3 bg-on-surface border-2 border-primary"></div>
                                <div class="absolute -right-[6px] -top-[6px] h-3 w-3 bg-on-surface border-2 border-primary"></div>
                                <div class="absolute -left-[6px] -bottom-[6px] h-3 w-3 bg-on-surface border-2 border-primary"></div>
                                <div class="absolute -right-[6px] -bottom-[6px] h-3 w-3 bg-on-surface border-2 border-primary"></div>
                            </div>
                        </div>
                    </div>
                    <span class="h-fit w-fit flex overflow-hidden">
                        <span class="text-sm lg:text-xl primary-font text-on-surface font-thin absolute top-[100%] lg:top-[85%] leading-[0.5] text-wrap translate-y-2 opacity-0 main-heading-support">
                            IEEE STUDENT BRANCH OF MIT BENGALURU
                            <span class="lg:visible invisible">
                                LINKING <span class="brand-font lg:text-3xl">knowledge</span>, LEADING <span
                                    class="brand-font lg:text-3xl">progress</span>
                            </span>
                        </span>
                    </span>
                </span>
            </h1>
        </div>
    </div>
    <!--    <div class="h-[400vh] w-full flex flex-col items-start justify-center">-->
    <!--        <div class="h-screen w-full bg-surface sticky top-0 flex flex-row items-center justify-start overflow-x-scroll gap-[100vw]">-->
    <!--            <AboutSliderSingle heading="IEEE"/>-->
    <!--            <AboutSliderSingle heading="IEEE CS"/>-->
    <!--        </div>-->
    <!--    </div>-->
</div>
<style>
    .landing{
        background-size: 50px 50px;
        background-image: linear-gradient(to right, #1e1e1e 1px, transparent 1px),
        linear-gradient(to bottom, #1e1e1e 1px, transparent 1px);
    }
</style>
