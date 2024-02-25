<script>
    export let showcaseHeading;
    export let smallVersion;
    export let showcaseHeadingColor = "text-primary-container";
    export let showcaseTargetDivClass = "showcase-pictures-div";
    export let showcaseBgSurfaceColor = "bg-on-surface";
</script>

<div class="h-[550vh] {showcaseBgSurfaceColor} w-full">
    <div class="flex flex-col w-full h-[500px] gap-5 sticky top-[2%] lg:top-[20%] xl:top-[20%] items-center justify-center {showcaseTargetDivClass} px-[5%]">
        <div class="flex flex-col items-start w-full md:w-[90%] lg:w-[55%] justify-center">
            <p class="heading-font text-3xl md:text-4xl lg:text-5xl xl:text-6xl {showcaseHeadingColor}">{showcaseHeading}</p>
        </div>
        {#if !smallVersion}
            <div class="flex flex-col h-1/2 sm:h-[70%] w-full 2xl:h-[85%] md:w-[90%] lg:w-[55%] bg-surface rounded-2xl relative items-center justify-center">
                <div class="absolute -bottom-1/2 sm:-bottom-1/3 sm:right-0 md:-right-16 lg:-right-52 lg:top-[12.5%] bg-on-surface border-4 border-border/30 rounded-2xl h-full sm:h-[65%] lg:h-[80%] w-[95%] sm:w-[65%] lg:w-[65%] z-[1]">
                    <slot name="inside-side-card"/>
                </div>
                <slot name="inside-main-card"/>
            </div>
        {:else}
            <div class="flex flex-col h-1/2 sm:h-[70%] w-full 2xl:h-[85%] md:w-[90%] lg:w-[55%] bg-surface rounded-2xl relative items-center justify-center">
                <div class="absolute -bottom-[35%] sm:-bottom-[18%] sm:right-0 md:-right-16 lg:-right-52 lg:top-[35%] bg-on-surface border-4 border-border/30 rounded-2xl h-1/2 sm:h-[35%] w-[95%] sm:w-[65%] lg:w-[65%] z-[1]">
                    <slot name="inside-side-card"/>
                </div>
                <slot name="inside-main-card"/>
            </div>
        {/if}
    </div>
</div>