<script>
    import {onMount} from "svelte";
    import {gsap} from "gsap/dist/gsap";
    import {TextPlugin} from 'gsap/dist/TextPlugin';
    import RSVP from "$lib/home/RSVP.svelte";
    import Loader from "$lib/common/Loader.svelte";

    let currentTime;
    let mobileRSVP;
    let currentLoadingPercentage = 0;
    let cycleBranchName = gsap.timeline({
        onComplete: () => {
            setTimeout(() => {
                cycleBranchName.reverse()
            }, 5000);
        },
        onReverseComplete: () => {
            cycleBranchName.play(0);
        }
    });
    let onLoadTimeline = gsap.timeline({
        onComplete: () => {
            cycleBranchName.play(0);
        }
    });
    let percentageInterval;
    onMount(() => {
        gsap.registerPlugin(TextPlugin);

        onLoadTimeline.to('.main-navbar', {
            scale: 1,
            ease: "power4.inOut",
            duration: 0.75
        });
        onLoadTimeline.to('.landing-page-container', {
            scale: 1,
            ease: "power4.inOut",
        }, '<');
        onLoadTimeline.to('.landing-progress-indicator', {
            display: 'none',
        }, '<');
        onLoadTimeline.to('.navbar-closed-display', {
            scale: 1,
            duration: 0.75,
            ease: "power4.inOut",
        }, '<');
        onLoadTimeline.to('.navbar-closed-content-display', {
            scale: 1,
            duration: 0.75,
            ease: "power4.inOut",
        }, '<0.1');
        for (let i = 0; i < 7; i++) {
            onLoadTimeline.to(`.landing-branch-letter-${i + 1}`, {
                y: 0,
                ease: "power4.inOut",
                duration: 0.75,
            }, '<');
            onLoadTimeline.to(`.landing-society-letter-${i + 1}`, {
                y: 0,
                ease: "power4.inOut",
                duration: 0.75,
            }, '<');
        }
        if (mobileRSVP) {
            onLoadTimeline.to('.mobile-rsvp', {
                scale: 1,
                opacity: 1,
                display: 'flex',
                duration: 0.5,
                ease: 'power4.inOut',
            }, '<0.1');
            onLoadTimeline.to('.mobile-rsvp-stamp', {
                opacity: 1,
                scale: 1,
                ease: 'power4.inOut',
                duration: 0.75,
            });
            onLoadTimeline.to('.mobile-rsvp', {
                rotate: '12deg',
                duration: 0.75,
                ease: 'bounce.out',
            }, '>');
        }

        cycleBranchName.to('.landing-branch-name', {
            text: "IEEE",
            duration: 0.75,
        })
        cycleBranchName.to('.landing-branch-name', {
            text: "I",
            duration: 0.75,
            delay: 5,
        });
        cycleBranchName.to('.landing-branch-name', {
            text: "IEEE CIS",
            duration: 0.75,
        });
        cycleBranchName.to('.landing-branch-name', {
            text: "I",
            duration: 0.75,
            delay: 5,
        });
        cycleBranchName.to('.landing-branch-name', {
            text: "IEEE CS",
            duration: 0.75,
        });
        cycleBranchName.to('.landing-branch-name', {
            text: 'I',
            duration: 0.75,
            delay: 5,
        });
        cycleBranchName.to('.landing-branch-name', {
            text: 'IEEE WIE',
            duration: 0.75,
        });
        cycleBranchName.pause(0);

        onLoadTimeline.pause(0);
        setInterval(updateCurrentTime, 1000);
        percentageInterval = setInterval(() => {
            currentLoadingPercentage++
        }, 15);
    })

    function updateCurrentTime() {
        let d = new Date();
        currentTime = d.toLocaleTimeString();
    }

    $: reactiveTime = currentTime;
    $: if (currentLoadingPercentage === 100) {
        clearInterval(percentageInterval);
        onLoadTimeline.play(0);
    }
</script>

<Loader />
<div class="h-fit min-h-screen w-full bg-surface">
    <div class="h-screen bg-primary-container w-full relative">
        <div class="h-screen w-full flex flex-col items-center justify-center scale-[0.85] bg-surface landing-page-container relative p-2 overflow-hidden pb-24 pt-12 md:hidden">
            <div class="flex flex-col absolute -left-[42%] top-0 w-fit h-fit gap-5">
                <div class="w-[100vw] -rotate-45 h-5 bg-primary-container"></div>
                <div class="w-[100vw] -rotate-45 h-5 bg-primary-container"></div>
            </div>
            <div class="flex flex-col absolute -right-[42%] bottom-0 w-fit h-fit gap-2 -rotate-45">
                <div class="w-[100vw] h-5 bg-primary-container"></div>
                <div class="w-[100vw] h-5 bg-primary-container"></div>
            </div>
            <div class="w-[80%] sm:w-[45%] h-fit py-2 rounded-t-xl flex flex-col items-center justify-center bg-on-surface overflow-hidden -rotate-3 origin-bottom-left">
                <div class="w-full h-fit p-2 flex flex-row items-center justify-center relative">
                    <p class="text-2xl primary-font text-surface capitalize text-center flex flex-row items-center justify-center">
                        CONNECTING <span class="brand-font text-2xl">Ideas</span>, CREATING <span
                            class="brand-font text-2xl">Futures</span></p>
                    <div class="h-6 w-5 absolute -bottom-[0.25rem] -right-[0.35rem] rounded-full bg-surface z-[2]"></div>
                    <div class="h-6 w-5 absolute -bottom-[0.25rem] -left-[0.35rem] rounded-full bg-surface z-[2]"></div>
                    <hr class="bg-transparent h-1 w-full absolute -bottom-[0.3rem]"
                        style="border-style: none none dotted; border: 2px #0e1418 dashed">
                </div>
            </div>
            <div class="w-[78%] sm:w-[45%] h-screen max-h-[500px] py-2 rounded-b-xl flex flex-col bg-on-surface z-[3]">
                <div class="w-full h-full relative flex flex-col items-center justify-center">
                    <div class="h-6 w-5 absolute -top-[0.95rem] -right-[0.75rem] rounded-full bg-surface z-[3]"></div>
                    <div class="h-6 w-5 absolute -top-[0.95rem] -left-[0.75rem] rounded-full bg-surface z-[3]"></div>
                    <div class="h-full w-full flex flex-col items-center justify-center gap-1 px-4">
                        <p class="text-2xl text-center primary-font text-surface">
                            YOU HAVE BEEN <span class="brand-font">Invited!</span>
                        </p>
                        <div class="text-8xl font-bold primary-font flex flex-row text-primary-container text-center h-fit w-fit overflow-hidden landing-branch-name">
                            <span class="landing-branch-letter-1 translate-y-[100px]">I</span><span
                                class="landing-branch-letter-2 translate-y-[500px]">E</span><span
                                class="landing-branch-letter-3 translate-y-[900px]">E</span><span
                                class="landing-branch-letter-4 translate-y-[1300px]">E</span>
                        </div>
                        <div class="text-8xl font-bold primary-font text-primary-container -mt-4 text-center flex flex-col">
                            <div class="w-fit h-fit flex flex-row overflow-hidden">
                                <span class="landing-society-letter-1 translate-y-[100px]">S</span><span
                                    class="landing-society-letter-2 translate-y-[400px]">O</span><span
                                    class="landing-society-letter-3 translate-y-[500px]">C</span><span
                                    class="landing-society-letter-4 translate-y-[900px]">I</span><span
                                    class="landing-society-letter-5 translate-y-[1300px]">E</span><span
                                    class="landing-society-letter-6 translate-y-[1700px]">T</span><span
                                    class="landing-society-letter-7 translate-y-[2100px]">Y</span>
                            </div>
                            <div class="h-fit w-[105%] bg-tertiary-container text-on-tertiary-container -rotate-3 origin-bottom-left py-1 px-4 flex items-center justify-center landing-student-ribbon">
                                <p class="text-3xl font-bold primary-font">
                                    STUDENT BRANCH
                                </p>
                            </div>
                        </div>
                        <RSVP bind:this={mobileRSVP}/>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-screen w-full hidden md:visible md:flex flex-col items-center justify-center scale-[0.85] bg-surface landing-page-container relative p-2 overflow-hidden pb-28 pt-4 px-4">
            <div class="flex flex-col absolute -left-[42%] top-0 w-fit h-fit gap-5">
                <div class="w-[100vw] -rotate-45 h-5 bg-primary-container"></div>
                <div class="w-[100vw] -rotate-45 h-5 bg-primary-container"></div>
            </div>
            <div class="flex flex-col absolute -right-[42%] bottom-0 w-fit h-fit gap-2 -rotate-45">
                <div class="w-[100vw] h-5 bg-primary-container"></div>
                <div class="w-[100vw] h-5 bg-primary-container"></div>
            </div>
            <div class="min-h-fit w-[85%] min-[900px]:w-[70%] lg:w-[65%] xl:w-[55%] 2xl:w-[47%] flex flex-row items-center justify-start z-[2]">
                <div class="p-7 h-full bg-on-surface rounded-l-xl w-fit flex flex-row items-center justify-center relative overflow-hidden -rotate-1 origin-bottom-right">
                    <div class="h-full w-fit relative flex flex-col items-center justify-between">
                        <div class="h-fit w-fit flex flex-col items-center justify-center">
                            <p class="text-2xl lg:text-3xl primary-font text-surface capitalize text-center flex flex-row items-center justify-center"
                               style="writing-mode: sideways-lr">
                                ADMIT X1
                            </p>
                        </div>
                        <div class="h-fit w-fit flex items-center justify-center">
                            <p class="text-2xl lg:text-3xl primary-font text-surface capitalize text-center flex flex-row items-center justify-center"
                               style="writing-mode: sideways-lr">
                                YOU HAVE BEEN <span class="brand-font text-2xl">Invited!</span>
                            </p>
                        </div>
                    </div>
                    <div class="h-6 w-5 absolute -right-[0.65rem] -top-[0.75rem] bg-surface rounded-full"></div>
                    <div class="h-6 w-5 absolute -right-[0.65rem] -bottom-[0.75rem] bg-surface rounded-full"></div>
                    <div class="absolute right-0 bg-surface w-[0.5px] h-full border-[0.5px] border-surface border-dashed"></div>
                </div>
                <div class="w-full bg-on-surface rounded-r-xl relative flex flex-col items-center justify-center pb-4 px-4">
                    <div class="h-6 w-5 absolute -left-[0.65rem] -top-[0.75rem] bg-surface rounded-full"></div>
                    <div class="h-6 w-5 absolute -left-[0.65rem] -bottom-[0.75rem] bg-surface rounded-full"></div>
                    <p class="text-2xl lg:text-3xl primary-font text-surface capitalize text-center flex flex-row items-center justify-center">
                        CONNECTING <span class="brand-font text-2xl">Ideas</span>, CREATING <span
                            class="brand-font text-2xl">Futures</span></p>
                    <div class="text-[6.5rem] lg:text-9xl font-bold primary-font flex flex-row text-primary-container text-center h-fit w-fit overflow-hidden landing-branch-name leading-[1]">
                        <span class="landing-branch-letter-1 translate-y-[100px]">I</span><span
                            class="landing-branch-letter-2 translate-y-[500px]">E</span><span
                            class="landing-branch-letter-3 translate-y-[900px]">E</span><span
                            class="landing-branch-letter-4 translate-y-[1300px]">E</span>
                    </div>
                    <div class="text-[6.5rem] lg:text-9xl font-bold primary-font text-primary-container -mt-4 text-center flex flex-row overflow-hidden leading-[1]">
                        <span class="landing-society-letter-1 translate-y-[100px]">S</span><span
                            class="landing-society-letter-2 translate-y-[400px]">O</span><span
                            class="landing-society-letter-3 translate-y-[500px]">C</span><span
                            class="landing-society-letter-4 translate-y-[900px]">I</span><span
                            class="landing-society-letter-5 translate-y-[1300px]">E</span><span
                            class="landing-society-letter-6 translate-y-[1700px]">T</span><span
                            class="landing-society-letter-7 translate-y-[2100px]">Y</span>
                    </div>
                    <div class="h-fit w-[65%] bg-tertiary-container text-on-tertiary-container -rotate-3 origin-bottom-left py-1 px-4 flex items-center justify-center landing-student-ribbon">
                        <p class="text-3xl lg:text-4xl font-bold primary-font">
                            STUDENT BRANCH
                        </p>
                    </div>
                    <div class="absolute top-[88%] left-1/2 -translate-x-1/2">
                        <RSVP bind:this="{mobileRSVP}"/>
                    </div>
                </div>
            </div>
        </div>

        <div class="absolute bottom-3 left-3 landing-progress-indicator">
            <p class="primary-font text-2xl text-black">{currentLoadingPercentage}%</p>
        </div>
    </div>
</div>
