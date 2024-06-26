<script>
    import {page} from "$app/stores";
    export let customDisplay;
</script>

<div class="absolute top-2 left-2 w-fit h-fit">
    <p class="text-sm lg:text-xl text-on-surface primary-font">
        <span class="text-on-surface/50">WELCOME,</span> <span class="type-username">
            {#if $page.data?.session?.user && !customDisplay}
                {$page.data.session.user.name.split(" ")[0].toUpperCase()}
            {:else if customDisplay}
                {customDisplay}
            {:else}
                STRANGER
            {/if}
        </span>
    </p>
</div>