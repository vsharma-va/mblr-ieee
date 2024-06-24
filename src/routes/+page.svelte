<script>
    import {onMount} from "svelte";
    import {gsap} from "gsap/dist/gsap";
    import footerImg from "$lib/assets/images/footer.gif";
    import DynamicCard from "$lib/landing/DynamicCard.svelte";
    import {swipe} from "svelte-gestures";
    import ieeeAbout from "$lib/assets/images/ieee-about.jpg";
    import InfiniteMarquee from "$lib/common/InfiniteMarquee.svelte";
    import Footer from "$lib/common/Footer.svelte";
    import Loader from "$lib/common/Loader.svelte";

    let userDiscardName = '';
    let userActualName = 'STRANGER';
    let currentTime;
    let onLoadTimeline;
    let aboutCardIndex = 0;
    let numberOfBranches = 5;
    let aboutCardHoverEnabled = true;

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

    // here -7 is the difference in depth/card
    // currentIndex is the card that is being currently displayed
    // numberOfBranches = number of cards that are present

    function nextOrPreviousAboutCard(currentIndex, forward) {
        if (forward) {
            aboutCardHoverEnabled = false;
            let forwardTimeline = gsap.timeline();
            forwardTimeline.to(`.about-card-${currentIndex}`, {
                rotationY: 135,
                rotationX: -5,
                x: window.screen.width,
                duration: 1,
                ease: 'sine',
            });
            forwardTimeline.to(`.about-card-${currentIndex + 1}`, {
                z: 0,
                x: 0,
                duration: 0.75,
                ease: 'sine'
            }, '<');
            forwardTimeline.to(`.about-next-hover-indicator-${currentIndex}`, {
                width: '100%',
                borderTopRightRadius: '0rem',
                borderBottomRightRadius: '0rem',
                ease: 'sine',
                duration: 0.75,
            }, '<');
            forwardTimeline.to(`.about-next-hover-indicator-${currentIndex}`, {
                opacity: '0',
                ease: 'sine',
                duration: 0.45,
            }, '>');
            forwardTimeline.to(`.about-next-hover-indicator-${currentIndex}`, {
                width: '0%',
            }, '>');
            let counter = 1;
            for (let i = currentIndex + 2; i < numberOfBranches; i++) {
                forwardTimeline.to(`.about-card-${i}`, {
                    translateZ: `${-7 * counter}em`,
                    translateX: `${7 * counter}%`,
                    duration: 0.75,
                    ease: 'sine',
                }, '<');
                counter++;
            }
        } else {
            let backwardsTimeline = gsap.timeline();
            backwardsTimeline.to(`.about-card-${currentIndex}`, {
                rotationY: 0,
                rotationX: 0,
                x: 0,
                duration: 0.75,
                ease: 'sine',
            });
            let counter = 1;
            for (let i = currentIndex + 1; i < numberOfBranches; i++) {
                backwardsTimeline.to(`.about-card-${i}`, {
                    translateZ: `${-7 * counter}em`,
                    translateX: `${7 * counter}%`,
                    duration: 0.75,
                    ease: 'sine',
                }, '<');
                counter++;
            }
        }
    }

    function aboutCardHalfWayOver(currentIndex, reset) {
        if (!reset) {
            let onHoverTimeline = gsap.timeline();
            onHoverTimeline.to(`.about-card-${currentIndex}`, {
                x: 100,
                rotationY: 35,
                rotationX: -1.5,
                ease: 'sine',
            });
            onHoverTimeline.to(`.about-next-hover-indicator-${currentIndex}`, {
                opacity: 1,
                borderBottomRightRadius: '9999px',
                borderTopRightRadius: '9999px',
                width: '50%',
                ease: 'sine',
            }, '<');
        } else {
            let resetHoverTimeline = gsap.timeline();
            resetHoverTimeline.to(`.about-card-${currentIndex}`, {
                x: 0,
                rotationY: 0,
                rotationX: 0,
                ease: 'sine',
            });
            resetHoverTimeline.to(`.about-next-hover-indicator-${currentIndex}`, {
                width: 0,
                ease: 'sine',
            }, '<');
        }

    }

    $: reactiveTime = currentTime;
    $: reactiveUserName = userActualName;
</script>

<Loader on:complete={() => {onLoadTimeline.play(0)}}/>
<div class="h-fit min-h-screen w-full bg-surface content relative">
    <div class="h-screen w-full flex flex-col items-center justify-center pb-12 sticky top-0 overflow-x-hidden">
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
                   data-buddy-text="@ieee-youtube">
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
                    <span class="h-fit w-fit flex overflow-hidden justify-between items-stretch absolute bottom-[100%] lg:bottom-[85%] leading-[1]">
                        <!--                        <div class="flex h-fit w-fit items-center justify-center px-2 border-[1px] border-on-surface rounded-xl -translate-y-2 opacity-0 main-heading-support">-->
                        <!--                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"-->
                        <!--                                 class="fill-on-surface/50">-->
                        <!--                                <path d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9 8 4 8.9 4 10 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 10 C 20 8.9 19.1 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 12 13 C 13.1 13 14 13.9 14 15 C 14 16.1 13.1 17 12 17 C 10.9 17 10 16.1 10 15 C 10 13.9 10.9 13 12 13 z"/>-->
                        <!--                            </svg>-->
                        <!--                        </div>-->
                        <span class="text-sm w-fit lg:text-xl primary-font text-primary font-thin -translate-y-2 opacity-0 main-heading-support">
                            VERSION'24
                        </span>
                    </span>
                    <div class="h-fit w-fit flex flex-row">
                        <div class="relative group cursor-pointer">
                            <span class="group-hover:ieee-mesh-gradient">
                                IEEE
                            </span>
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
                                <div class="absolute -left-[6px] -top-[6px] h-2 w-2 md:h-3 md:w-3 bg-on-surface border-2 border-primary"></div>
                                <div class="absolute -right-[6px] -top-[6px] h-2 w-2 md:h-3 md:w-3 bg-on-surface border-2 border-primary"></div>
                                <div class="absolute -left-[6px] -bottom-[6px] h-2 w-2 md:h-3 md:w-3 bg-on-surface border-2 border-primary"></div>
                                <div class="absolute -right-[6px] -bottom-[6px] h-2 w-2 md:h-3 md:w-3 bg-on-surface border-2 border-primary"></div>
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
    <div class="h-screen bg-surface w-full sticky top-0 flex flex-col gap-16 items-center justify-center pt-5 content overflow-hidden about-card-3d-parent"
         use:swipe={{ timeframe: 300, minSwipeDistance: 60, touchAction: 'pan-y' }} on:swipe={(event) => {
             if(event.detail.direction === 'right') {
                  if(numberOfBranches !== aboutCardIndex) {
                    nextOrPreviousAboutCard(aboutCardIndex, true);
                    aboutCardIndex++;
                  }
             } else if(event.detail.direction === 'left') {
                if(aboutCardIndex > 0) {
                    aboutCardIndex--;
                    nextOrPreviousAboutCard(aboutCardIndex, false);
                }
             }
         }}
    >
        <div class="absolute top-0 w-full h-2 bg-on-surface transition-all duration-300 ease"
             style="width: {(aboutCardIndex/numberOfBranches)*100}%"></div>
        <div class="h-fit w-[80%] flex flex-row items-center justify-between md:hidden">
            <button class="bg-surface primary-font shadow-xl border-2 border-solid border-dim-surface p-2 rounded-xl text-on-surface z-[7]"
                    on:click={() => {
                        if(aboutCardIndex > 0) {
                            aboutCardIndex--;
                            nextOrPreviousAboutCard(aboutCardIndex, false);
                        }
                    }}>
                PREVIOUS
            </button>
            <p class="primary-font text-on-surface">OR SWIPE</p>
            <button class="bg-surface primary-font shadow-xl border-2 border-solid border-dim-surface p-2 rounded-xl text-on-surface z-[7] relative"
                    on:click={() => {
                        if(numberOfBranches !== aboutCardIndex) {
                            nextOrPreviousAboutCard(aboutCardIndex, true);
                            aboutCardIndex++;
                        }
                    }}>
                &nbsp;&nbsp;&nbsp;NEXT&nbsp;&nbsp;&nbsp;
            </button>
        </div>
        <div class="h-screen w-full absolute flex-row justify-center items-stretch hidden md:flex">
            <div class="w-1/2 h-full pr-32 flex flex-col items-center justify-center"
                 on:click={() => {
                        if(aboutCardIndex > 0) {
                            aboutCardIndex--;
                            nextOrPreviousAboutCard(aboutCardIndex, false);
                        }
                    }}
                 on:keypress={(event) => {
                      switch (event.key) {
                         case "Enter":
                             if(numberOfBranches !== aboutCardIndex)
                                nextOrPreviousAboutCard(aboutCardIndex, true)
                             break;
                 }}}
                 role="button"
                 tabindex="0"
            >
                <button class="bg-surface primary-font shadow-xl border-2 border-solid border-dim-surface p-2 rounded-xl text-on-surface z-[7]">
                    Previous
                </button>
            </div>
            <div class="w-1/2 h-full pl-32 flex flex-col items-center justify-center relative"
                 on:pointermove={() =>{
                                if(aboutCardHoverEnabled) {
                                    aboutCardHalfWayOver(aboutCardIndex, false);
                                }}
                           }
                 on:pointerleave={() => {
                            aboutCardHalfWayOver(aboutCardIndex, true)
                        }}
                 on:focus={() => {aboutCardHalfWayOver(aboutCardIndex)}}
                 on:pointerdown={() => {
                        if(numberOfBranches !== aboutCardIndex) {
                            nextOrPreviousAboutCard(aboutCardIndex, true);
                            setTimeout(() => {aboutCardHoverEnabled = true;}, 750);
                            aboutCardIndex++;
                        }
                    }}
                 on:keypress={(event) => {
                     switch (event.key) {
                         case "Enter":
                             if(numberOfBranches !== aboutCardIndex)
                                nextOrPreviousAboutCard(aboutCardIndex, true)
                             break;
                     }
                 }}
                 role="button"
                 tabindex="0"
            >
                <div class="absolute left-0 h-full w-0 rounded-r-full bg-primary-container/70 about-next-hover-indicator-0"></div>
                <div class="absolute left-0 h-full w-0 rounded-r-full bg-tertiary/70 about-next-hover-indicator-1"></div>
                <div class="absolute left-0 h-full w-0 rounded-r-full bg-green-300/70 about-next-hover-indicator-2"></div>
                <div class="absolute left-0 h-full w-0 rounded-r-full bg-amber-300/70 about-next-hover-indicator-3"></div>
                <div class="absolute left-0 h-full w-0 rounded-r-full bg-on-surface/70 about-next-hover-indicator-4"></div>
                <button class="bg-surface primary-font shadow-xl border-2 border-solid border-dim-surface p-2 rounded-xl text-on-surface z-[7]">
                    &nbsp;&nbsp;&nbsp;

                    NEXT&nbsp;&nbsp;&nbsp;
                </button>
            </div>
        </div>
        <div class="h-[450px] w-[80%] sm:w-[325px] bg-primary-container absolute rounded-xl shadow-xl about-card-0 flex flex-col items-start justify-between origin-right p-3 gap-2 z-[5]">
            <div class="h-[80%] w-full bg-on-surface rounded-xl shadow-[6px_6px_0px_0px_rgba(20,20,20,1)] -translate-x-1 -translate-y-1">
                <img src="{ieeeAbout}" alt="" class="object-cover w-full h-full rounded-xl">
            </div>
            <div class="h-[20%] w-full flex flex-col items-center justify-center border-on-primary border-2 border-solid rounded-xl p-2 about-card-1-content -translate-x-1 -translate-y-1 shadow-[6px_6px_0px_0px_rgba(20,20,20,1)] relative">
                <div class="absolute top-0">
                    <p class="text-sm font-thin text-on-primary/50 primary-font">TAKE ME THERE NOW!</p>
                </div>
                <p class="primary-font text-3xl text-on-primary font-bold drop-shadow-[1px_1px_0px_rgba(20,20,20,1)]">
                    IEEE
                </p>
                <div class="absolute bottom-0">
                    <p class="text-sm font-thin text-on-primary/50 primary-font">TAKE ME THERE NOW!</p>
                </div>
            </div>
        </div>
        <div class="h-[450px] w-[80%] sm:w-[325px] bg-tertiary absolute rounded-xl shadow-2xl z-[4] about-card-1"></div>
        <div class="h-[450px] w-[80%] sm:w-[325px] bg-green-300 absolute rounded-xl shadow-xl z-[3] about-card-2"></div>
        <div class="h-[450px] w-[80%] sm:w-[325px] bg-amber-300 absolute rounded-xl shadow-xl z-[1] about-card-3"></div>
        <div class="h-[450px] w-[80%] sm:w-[325px] bg-on-surface absolute rounded-xl shadow-xl z-0 about-card-4"></div>
        <div class="h-[450px] w-[80%] sm:w-[325px] invisible -translate-y-8 about-card-4"></div>
    </div>
    <Footer/>
</div>

<style>
    .content {
        background-size: 50px 50px;
        background-image: linear-gradient(to right, #1e1e1e 1px, transparent 1px),
        linear-gradient(to bottom, #1e1e1e 1px, transparent 1px);
    }

    .about-card-3d-parent {
        perspective: 1100px;
    }

    .about-card-1 {
        transform: translateZ(-7em) translateX(7%);
    }

    .about-card-2 {
        transform: translateZ(-14em) translateX(14%);
    }

    .about-card-3 {
        transform: translateZ(-21em) translateX(21%);
    }

    .about-card-4 {
        transform: translateZ(-28em) translateX(28%);
    }
</style>
