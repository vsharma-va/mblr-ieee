<script>
    import {gsap} from "gsap/dist/gsap";

    let navOpen = false;

    function navController() {
        if (navOpen) {
            closeNav();
        } else {
            openNav();
        }
        navOpen = !navOpen;
    }

    function openNav() {
        let openNavTimeline = gsap.timeline();
        openNavTimeline.to('.nav-width-controller', {
            width: "100%",
            duration: 0.75,
            ease: "power4.inOut"
        });
        openNavTimeline.to('.nav-height-controller', {
            height: "50%",
            duration: 0.75,
            ease: "power4.inOut",
        }, '<0.2');
        openNavTimeline.to('.nav-links', {
            display: 'flex',
            opacity: 1,
            duration: 0.25,
            ease: "power4.inOut",
        }, '<0.2');
    }

    function closeNav() {
        let closeNavTimeline = gsap.timeline();
        closeNavTimeline.to('.nav-height-controller', {
            height: "auto",
            duration: 0.75,
            ease: "power4.inOut",
        });
        closeNavTimeline.to('.nav-links', {
            display: 'none',
            opacity: 0,
            duration: 0.25,
            ease: "power4.inOut",
        }, '<');
        closeNavTimeline.to('.nav-width-controller', {
            width: "90%",
            duration: 0.75,
            ease: "power4.inOut",
        }, '<0.2');
    }
</script>

<div class="h-fit w-full flex items-center justify-center">
    <div class="h-fit w-[65%] sm:w-[55%] flex items-center justify-center fixed bottom-3 z-[2] nav-height-controller scale-0 navbar-closed-display">
        <div class="nav-width-controller h-full w-[90%] absolute flex flex-col items-end justify-center bg-primary-container rounded-xl px-4">
            <div class="h-fit w-full hidden opacity-0 flex-col items-end justify-center nav-links gap-2">
                <a class="primary-font text-4xl text-right hover:text-on-tertiary-container" href="/">HOME</a>
                <a class="primary-font text-4xl text-right" href="/events">EVENTS</a>
                <a class="primary-font text-4xl text-right" href="/dashboard">DASHBOARD</a>
            </div>
        </div>
        <div class="h-fit w-[90%] flex flex-row items-center justify-between bg-primary-container self-end rounded-xl py-3 px-4 nav-width-controller z-[2] scale-0 navbar-closed-content-display">
            <p class="primary-font text-4xl text-on-primary-container">HOME</p>
            <button class="flex items-center text-center justify-center px-2 py-1 rounded-xl bg-on-primary-container text-primary-container text-3xl"
                    on:click={navController}>
                +
            </button>
        </div>
    </div>
</div>
