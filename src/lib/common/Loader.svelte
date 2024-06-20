<script>
    import {gsap} from "gsap/dist/gsap";
    import {TextPlugin} from "gsap/dist/TextPlugin";
    import {createEventDispatcher, onMount} from "svelte";

    let goingTo = 'IEEE.SOCIETY';
    let timerTickDuration = 0.7;
    let onesTimeline;
    let tensTimeline;
    let delayBetweenOnesAndTenthsMS = 500;
    let delayBetweenSamePositionsSwipeUpAnimS = 0.2;
    const dispatcher = createEventDispatcher()

    onMount(() => {
        gsap.registerPlugin(TextPlugin);

        // controls the animation for the numbers on ones place
		onesTimeline = gsap.timeline();
		onesTimeline.pause();
        // controls the animation for the numbers of tenths place
		tensTimeline = gsap.timeline({
            onComplete: () => {
                onLoadTimelinePart2.play(0);
            }
		});
		tensTimeline.pause();
        // only 10 digits are used here. Exact counting is not required
		for (let i = 0; i < 10; i++) {
			onesTimeline.to(
				`.ones-place-${i}`,
				{
					y: -50,
					duration: timerTickDuration
				},
				'<'
			);
			onesTimeline.to(
				`.ones-place-${i + 1}`,
				{
					y: 0,
					duration: timerTickDuration
				},
				`<${delayBetweenSamePositionsSwipeUpAnimS}`
			);
		}
        // simmilarly 10 digits are used here as well.
        // same logic- exact counting not required.
		for (let j = 0; j < 10; j++) {
			tensTimeline.to(
				`.tens-place-${j}`,
				{
					y: -50,
					duration: timerTickDuration
				},
				'<'
			);
			tensTimeline.to(
				`.tens-place-${j + 1}`,
				{
					y: 0,
					duration: timerTickDuration
				},
				`<${delayBetweenSamePositionsSwipeUpAnimS}`
			);
		}
		tensTimeline.to(
			`.hundreths-place-0`,
			{
				y: -50,
				duration: timerTickDuration
			},
			'<'
		);
		tensTimeline.to(
			`.hundreths-place-1`,
			{
				y: 0,
				duration: timerTickDuration
			},
			`<${delayBetweenSamePositionsSwipeUpAnimS}`
		);
		onesTimeline.play(0);
		setTimeout(() => {
			tensTimeline.play(0);
		}, delayBetweenOnesAndTenthsMS);

        let onLoadTimeline = gsap.timeline({
            
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
        let onLoadTimelinePart2 = gsap.timeline({
            onComplete: () => {
                dispatcher('complete');
        }});
        onLoadTimelinePart2.to('.type-destination', {
            delay: 2,
            text: '',
            duration: 0.75
        });
        onLoadTimelinePart2.to('.https-text', {
            yPercent: 100,
            duration: 0.75,
            ease: 'power4.inOut',
        });
        onLoadTimelinePart2.to('.url-container', {
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: 'power4.inOut',
        }, '<0.50');
        onLoadTimelinePart2.to('.loader-container', {
            display: 'none',
            xPercent: -100,
            duration: 1,
            ease: 'power4.inOut',
        });
        onLoadTimelinePart2.pause();
    })

</script>

<div class="fixed top-0 h-screen w-full bg-on-surface flex flex-col items-center justify-center z-[300] loader-container">
    <div class="h-fit w-fit py-1 px-2 border-[1px] border-surface/80 rounded-xl overflow-hidden opacity-0 scale-0 url-container">
        <div class="primary-font text-sm text-surface flex flex-row">
            <div class="text-surface/50 translate-y-44 https-text">
                HTTPS://
            </div>
            <div class="type-destination"></div>
        </div>
    </div>
    <div class="h-fit w-full flex flex-row items-center justify-center gap-1 absolute bottom-5 right-5 font-thin">
		<p class="text-lg primary-font text-surface">LOADING</p>
		<div class="h-fit w-fit flex flex-row">
			<div
				class="h-[3rem] w-fit text-lg primary-font text-surface relative flex flex-col overflow-hidden items-end justify-center"
			>
				<p class="text-lg primary-font invisible">0</p>
				<p class="text-lg primary-font absolute hundreths-place-0">0</p>
				<p class="text-lg primary-font absolute translate-y-[50px] hundreths-place-1">1</p>
			</div>
			<div
				class="h-[3rem] w-fit text-lg primary-font text-surface relative flex flex-col overflow-hidden items-end justify-center"
			>
				<p class="text-lg primary-font invisible">0</p>
				<p class="text-lg primary-font absolute tens-place-0">0</p>
				{#each { length: 10 } as _, i}
					<p class="text-lg primary-font absolute translate-y-[50px] tens-place-{i + 1}">
						{(i + 1) % 10}
					</p>
				{/each}
			</div>
			<div
				class="h-[3rem] w-fit text-lg primary-font text-surface relative flex flex-col overflow-hidden items-end justify-center"
			>
				<p class="text-lg primary-font invisible">0</p>
				<p class="text-lg primary-font absolute ones-place-0">0</p>
				{#each { length: 10 } as _, i}
					<p class="text-lg primary-font absolute translate-y-[50px] ones-place-{i + 1}">
						{(i + 1) % 10}
					</p>
				{/each}
			</div>
            <p class="text-lg primary-font text-surface self-center">%</p>
		</div>
	</div>
</div>