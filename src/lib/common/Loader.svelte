<script>
    import {gsap} from "gsap/dist/gsap";
    import {TextPlugin} from "gsap/dist/TextPlugin";
    import {createEventDispatcher, onMount} from "svelte";

    let goingTo = 'IEEE.SOCIETY';
    const dispatcher = createEventDispatcher()

    onMount(() => {
        gsap.registerPlugin(TextPlugin);
        let onLoadTimeline = gsap.timeline({
            onComplete: () => {
                dispatcher('complete');
            }
        });
        onLoadTimeline.to('.url-container', {
            scale: 1,
            opacity: 1,
            duration: 3,
            ease: 'power4.inOut',
        });
        onLoadTimeline.to('.https-text', {
            y: 0,
            duration: 1.5,
            ease: 'power4.inOut',
        }, '>-1');
        onLoadTimeline.to('.type-destination', {
            text: goingTo,
            duration: 0.75,
        });
        onLoadTimeline.to('.type-destination', {
            delay: 2,
            text: '',
            duration: 0.75
        });
        onLoadTimeline.to('.https-text', {
            yPercent: 100,
            duration: 0.75,
            ease: 'power4.inOut',
        });
        onLoadTimeline.to('.url-container', {
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: 'power4.inOut',
        }, '<0.50');
        onLoadTimeline.to('.loader-container', {
            display: 'none',
            yPercent: -100,
            duration: 1,
            ease: 'power4.inOut',
        })
    })

</script>

<div class="fixed top-0 h-screen w-full bg-surface flex flex-col items-center justify-center z-[300] loader-container">
    <div class="h-fit w-fit py-1 px-2 border-2 border-primary rounded-xl overflow-hidden opacity-0 scale-0 url-container">
        <div class="primary-font text-sm text-on-surface flex flex-row">
            <div class="text-on-surface/50 translate-y-44 https-text">
                HTTPS://
            </div>
            <div class="type-destination"></div>
        </div>
    </div>
</div>