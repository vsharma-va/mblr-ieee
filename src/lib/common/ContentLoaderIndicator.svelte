<script>
    import {onMount} from "svelte";
    import {gsap} from "gsap/dist/gsap";

    export let backgroundColor;
    export let heightAndWidth;

    onMount(() => {
        let dotTimeline = gsap.timeline({
            onComplete: () => {
                dotTimeline.reverse();
            },
            onReverseComplete: () => {
                dotTimeline.play(0);
            },
        });
        dotTimeline.to('.loader-dot', {
            scale: 1.5,
            ease: 'bounce.inOut',
        });
        dotTimeline.to('.loader-dot', {
            scale: 1,
            ease: 'bounce.inOut',
        }, '>');
    })
</script>

<div class="{heightAndWidth} rounded-full loader-dot {backgroundColor} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
</div>