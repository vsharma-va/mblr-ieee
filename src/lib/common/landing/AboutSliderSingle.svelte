<script>
    import ieeeAboutBackground from "$lib/assets/images/ieee-about-background.jpg";

    export let heading;
</script>

<div
    class="h-full w-full flex flex-row flex-shrink-0 items-center justify-center relative p-8"
>
    <div
        class="h-full w-[80%] translate-x-[30%] absolute top-0 bg-on-surface right-0"
    >
        <img src="{ieeeAboutBackground}" alt="group shot of ieee members" class="w-full h-full object-cover">
    </div>
    <div
        class="h-full w-full flex flex-col items-center justify-center"
    >
        <p
            class="text-[55vw] w-full leading-[1] self-start tracking-wide mix-blend-difference primary-font ieee-gradient text-left"
        >
            {heading}
        </p>
        <p
            class="text-lg regular-font text-on-surface text-left mix-blend-difference"
        >
            Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Deserunt fugit
        </p>
    </div>
</div>