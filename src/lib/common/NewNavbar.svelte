<script>
    import gsap from "gsap/dist/gsap";
    import {onMount} from "svelte";
    import {navigating, page} from "$app/stores";
    import {signIn, signOut} from "@auth/sveltekit/client";
    import ContentLoaderIndicator from "$lib/common/ContentLoaderIndicator.svelte";
    import {afterNavigate, beforeNavigate} from "$app/navigation";

    let navIsOpen = false;
    let isLoading = false;

    beforeNavigate(() => {
        isLoading = true;
        gsap.to('.nav-links', {
            opacity: 0,
            duration: 0.75,
            ease: 'sine',
        });
    });

    afterNavigate(() => {
        if(navIsOpen) {
            navController();
        }
        isLoading = false;
    });

    function navController() {
        if (navIsOpen) {
            closeNav();
        } else {
            openNav();
        }
        navIsOpen = !navIsOpen;
        console.log(navIsOpen);
    }

    function closeNav() {
        let closeNavController = gsap.timeline({
            onComplete: () => {
                gsap.set('.main-nav-container', {clearProps: 'all'});
            }
        });
        closeNavController.to('.main-nav-container', {
            rotationY: 135,
            rotationX: -5,
            x: window.screen.width,
            duration: 1,
            ease: 'sine',
        }, '<');
        closeNavController.to('.nav-links', {
            opacity: 1,
            duration: 1,
        }, '<');
        closeNavController.to('.perspective-wrapper', {
            display: 'none',
        })
    }

    function openNav() {
        let openNavController = gsap.timeline();
        openNavController.to('.perspective-wrapper', {
            display: 'flex',
        });
        openNavController.to('.main-nav-container', {
            rotationY: 0,
            rotationX: 0,
            rotationZ: 0,
            duration: 1,
            x: 0,
            ease: 'sine',
        }, '<');
    }

</script>

<div class="fixed top-2 w-full h-fit flex items-center justify-end px-3 z-[300]">
    <button class="text-sm lg:text-xl primary-font w-fit h-fit text-on-surface"
            on:click={() => {
            navController();
        }}>[MENU]
    </button>
</div>
<div class="perspective-wrapper w-full h-screen fixed top-0 items-center justify-center hidden z-[300]">
    <div class="h-[90vh] w-[90vw] sm:w-[450px] bg-surface backdrop-blur-xl rounded-2xl z-[5] flex flex-col items-center justify-center p-3 main-nav-container relative shadow-2xl border-2 border-primary border-solid">
        <div class="flex flex-row w-full h-fit items-center absolute top-0 justify-between px-3 py-2">
            <div class="w-fit h-fit">
                <p class="primary-font text-xl text-on-surface font-bold">IEEE</p>
            </div>
            <button class="w-fit h-fit flex flex-row items-center justify-center primary-font text-lg text-primary font-bold"
                    on:click={() => {
                    navController();
                }}>
                [<span>{navIsOpen ? 'CLOSE' : 'MENU'}</span>]
            </button>
        </div>
        <div class="flex flex-col items-center justify-center w-full h-full gap-4">
            <a href="/" class="primary-font text-3xl font-thin leading-[0.9] text-on-surface nav-links">HOME</a>
            <a href="/events" class="primary-font text-3xl font-thin leading-[0.9] text-on-surface nav-links">EVENTS</a>
            <a href="/dashboard" class="primary-font text-3xl font-thin leading-[0.9] text-on-surface nav-links">DASHBOARD</a>
            <button class="primary-font text-3xl font-thin leading-[0.9] text-on-surface nav-links"
                on:click={async () => {
                    if(!$page.data?.session?.user) {
                        await signIn('google', {callbackUrl: `${$page.url.pathname}`});
                    } else {
                        await signOut({callbackUrl: `${$page.url.pathname}`});
                    }
                }}>
                {#if $page.data?.session?.user}
                    LOGOUT
                {:else}
                    SIGN IN
                {/if}
            </button>
            {#if isLoading}
                <ContentLoaderIndicator heightAndWidth="h-5 w-5 lg:h-8 lg:w-8" backgroundColor="bg-primary"/>
            {/if}
        </div>
        <div class="flex flex-row w-full h-fit items-center absolute bottom-0 justify-between px-3 py-2">
            <div class="w-fit h-fit">
                <p class="primary-font text-xl text-primary font-bold">©IEEE.SOCIETY</p>
            </div>
        </div>
    </div>
</div>

<style>
    .perspective-wrapper {
        perspective: 800px;
    }

    .main-nav-container {
        transform: translate(-100vw) rotateX(5deg) rotateY(-75deg);
    }
</style>