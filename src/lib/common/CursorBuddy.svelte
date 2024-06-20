<script>
    import {onMount} from "svelte";
    import {gsap} from "gsap/dist/gsap";
    import {TextPlugin} from "gsap/dist/TextPlugin";
    import {browser} from "$app/environment";

    let buddyDiv;
    let greetings = [
        'HEY THERE ;)',
        'WATCHA DOING?',
        'GET SIGNED UP :(',
        'TRY CLICKING ON "NAME" ;)',
    ]

    onMount(() => {
        let hoveredOnCompatible = false;
        if (browser) {
            window.addEventListener('mousemove', (event) => {
                gsap.to(buddyDiv, {
                    x: event.clientX,
                    y: event.clientY + buddyDiv.offsetHeight - 10,
                    duration: 0,
                });
            });
            window.addEventListener('mouseover', (event) => {
                if (event.target.dataset.buddyText) {
                    onLoadTimeline.pause();
                    showBuddyText(event.target.dataset.buddyText);
                    event.target.addEventListener("mouseleave", () => {
                        onLoadTimeline.resume();
                    })
                    hoveredOnCompatible = true;
                }
            });
        }
        gsap.registerPlugin(TextPlugin);
        let onLoadTimeline = gsap.timeline({
            onComplete: () => {
                setTimeout(() => {onLoadTimeline.play(0)}, 3000);
            }
        });
        onLoadTimeline.to('.buddy-text', {
            text: greetings[0],
            duration: 0.75,
        });
        for (let greeting of greetings.slice(1, greetings.length)) {
            onLoadTimeline.to('.buddy-text', {
                text: greeting,
                duration: 0.75,
                delay: 3,
            }, '>')
        }
    });

    function showBuddyText(textToShow) {
        gsap.to('.buddy-text', {
            text: textToShow,
            duration: 0.75,
        });
    }
</script>

<div class="h-fit w-fit bg-primary text-on-primary rounded-xl buddy absolute pointer-events-none z-[301] p-1 px-2"
     bind:this={buddyDiv}>
    <p class="text-lg primary-font buddy-text tracking-tighter"></p>
</div>