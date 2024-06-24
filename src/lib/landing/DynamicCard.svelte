<script>
    import {gsap} from "gsap/dist/gsap";

    export let position;
    export let subset;
    export let heading;
    export let zLevel;

    let isDynamicCardOpen = false;
    let mainDiv;
    let isMouseDown = false;
    let offset;
    let slotDiv;

    function expandDynamicCard() {
        slotDiv.addEventListener('mousedown', (event) => {
            divHeldAnim();
            isMouseDown = true;
            offset = [
                mainDiv.offsetLeft - event.clientX,
                mainDiv.offsetTop - event.clientY,
            ];
        }, true);
        mainDiv.addEventListener('mouseup', (event) => {
            divReleasedAnim();
            if(position.includes('bottom')) {
                mainDiv.style.bottom = `${mainDiv.offsetParent.offsetHeight - mainDiv.offsetTop - mainDiv.offsetHeight}px`;
                mainDiv.style.top = null;
            }
            isMouseDown = false;
        }, true);
        mainDiv.addEventListener('mousemove', (event) => {
            event.preventDefault();
            if (isMouseDown) {
                mainDiv.style.left = `${event.clientX + offset[0]}px`;
                mainDiv.style.top = `${event.clientY + offset[1]}px`;
            }
        }, true)

        if (isDynamicCardOpen) {
            let closeDynamicCardTimeline = gsap.timeline();
            closeDynamicCardTimeline.to(`.dynamic-${subset}-card-content`, {
                display: 'none',
                opacity: 0,
                scale: 0,
                duration: 0.75,
                ease: 'power4.inOut',
            });
            closeDynamicCardTimeline.to(`.dynamic-${subset}-card`, {
                height: 'auto',
                duration: 0.75,
                ease: 'power4.inOut',
            }, '>');
        } else {
            let openDynamicCardTimeline = gsap.timeline();
            openDynamicCardTimeline.to(`.dynamic-${subset}-card`, {
                height: 150,
                duration: 0.75,
                ease: "power4.inOut",
            });
            openDynamicCardTimeline.to(`.dynamic-${subset}-card-content`, {
                display: 'flex',
                opacity: 1,
                scale: 1,
                duration: 0.75,
                ease: "power4.inOut",
            }, '>-0.5');
            openDynamicCardTimeline.play(0);
        }
        isDynamicCardOpen = !isDynamicCardOpen;
    }

    function divHeldAnim() {
        gsap.to(mainDiv, {
            scale: 0.95,
            ease: 'circ',
            duration: 0.75
        });
    }
    function divReleasedAnim() {
        gsap.to(mainDiv, {
            scale: 1,
            ease: 'power4.inOut',
            duration: 0.75,
        });
    }

</script>

<div class="h-fit w-[250px] text-nowrap py-2 px-2 bg-dim-surface rounded-xl flex flex-col items-center justify-start absolute {position} leading-[1] shadow-2xl gap-3 z-[5] dynamic-{subset}-card dynamic-common scale-x-0 opacity-0"
     bind:this={mainDiv}
     on:click={() => {
        mainDiv.parentNode.appendChild(mainDiv);
     }}
     on:keypress={(event) => {
        switch(event.key) {
            case "Enter":
                mainDiv.parentNode.appendChild(mainDiv);
        }
    }}
     tabindex="0"
     role="button">
    <div class="h-fit w-full bg-surface py-1 px-2 rounded-xl flex items-center justify-between gap-5 cursor-pointer z-[2]"
         data-buddy-text="CLICK!"
         on:click={() => {
             expandDynamicCard();
             mainDiv.parentNode.appendChild(mainDiv);
         }}
         on:keypress={(event) => {
                     switch (event.key) {
                         case "Enter":
                             expandDynamicCard();
                             break;
                     }
                 }}
         tabindex="0"
         role="button">
        <p class="primary-font text-sm font-bold text-on-surface">
            {heading}
        </p>
        <p class="primary-font font-bold text-lg text-on-surface">-</p>
    </div>
    <div class="h-full hidden opacity-0 scale-0 w-full flex-col gap-3 items-end dynamic-{subset}-card-content justify-around cursor-move"
         data-buddy-text="DRAG!"
        bind:this={slotDiv}>
        <slot></slot>
    </div>
</div>