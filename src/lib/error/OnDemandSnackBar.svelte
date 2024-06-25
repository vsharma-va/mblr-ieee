<script>
    import {onMount} from "svelte";
    import {gsap} from "gsap/dist/gsap";

    export let errorText;
    export let isError;

    let bgColour;
    let textColour;

    if(isError) {
        bgColour = 'bg-error';
        textColour = 'text-on-error';
    } else {
        bgColour = 'bg-green-300'
        textColour = 'text-green-700';
    }

    onMount(() => {
        let onLoadTimeline = gsap.timeline({
            onComplete: () => {
                errorText = undefined;
            }
        });
        onLoadTimeline.to('.on-demand-error-div', {
            display: 'flex',
            y: 0,
            ease: 'sine',
            duration: 0.75,
        });
        onLoadTimeline.to('.on-demand-error-div', {
            display: 'none',
            yPercent: 100,
            ease: 'sine',
            duration: 0.75,
        }, '>3');
    })
</script>

<div class="flex flex-col w-full absolute bottom-0 {bgColour} p-1 px-2 on-demand-error-div translate-y-[100%]">
    <p class="text-sm primary-font font-bold {textColour}">{errorText}</p>
</div>