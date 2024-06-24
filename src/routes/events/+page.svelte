<script>
    import InfiniteMarquee from "$lib/common/InfiniteMarquee.svelte";
    import footerImg from "$lib/assets/images/footer.gif";
    import {page} from "$app/stores";
    import {signIn} from "@auth/sveltekit/client";
    import {goto} from "$app/navigation";
</script>

<div class="w-full h-fit min-h-screen flex flex-col items-center justify-center bg-surface content relative">
    <div class="absolute top-2 left-2 w-fit h-fit">
        <p class="text-sm lg:text-xl text-on-surface primary-font">
            <span class="text-on-surface/50">WELCOME,</span> <span class="type-username">STRANGER</span>
        </p>
    </div>
    <div class="flex flex-col items-center justify-center p-5 h-fit w-full">
        <div class="h-[250px] w-full bg-on-surface rounded-xl flex flex-col p-3 gap-2 relative -translate-x-1 -translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,177,245,1)]">
            <div class="h-fit w-full p-1 bg-primary-container rounded-xl">
                <InfiniteMarquee mainText="IEEE.SOCIETY" dimText="HTTPS://" textColor="text-on-primary-container"
                                 isSmall={true}/>
                <!-- <p class="text-lg font-bold primary-font text-on-primary-container">IEEE</p> -->
            </div>

            <div class="h-fit w-full flex flex-col gap-2 mt-2">
                <p class="text-2xl font-bold primary-font text-surface leading-[1]">THIS THE EVENT NAME</p>
                <div class="h-fit w-full flex flex-row items-center justify-between">
                    <p class="text-lg font-thin primary-font text-surface/50 leading-[1]">8:00pm May 2024</p>
                    <p class="text-lg font-thin primary-font text-surface/50 leading-[1]">In AB4</p>
                </div>
            </div>
            <div class="h-full w-full flex flex-col items-center justify-center">
                <p class="text-sm font-thin primary-font text-surface leading-[1]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    consectetur harum placeat. Iste necessitatibus doloremque, consequatur vitae hic repudiandae.
                </p>
            </div>
            <div class="h-full w-full flex flex-row items-center justify-center">
                <img src="{footerImg}" alt="animated gif of bars sliding in opposite direction"
                     class="w-full object-fill mix-blend-darken h-[45%]">
                <button class="h-fit w-fit p-1 bg-primary-container text-on-primary-container text-lg primary-font rounded-xl"
                        on:click={async () => {
                        if(!$page.session?.user) {
                            console.log(`/auth?from=${$page.url.pathname.slice(1, $page.url.pathname.length).replace('/', '-')}`);
                            //goto(`/auth?from=${$page.url.pathname.slice(1, $page.url.pathname.length).replace('/', '-')}`);
                            await signIn("google", {
                                callbackUrl: `/auth?from=${$page.url.pathname.slice(1, $page.url.pathname.length).replace('/', '-')}`,
                            });
                        }
                    }}>
                    {#if $page.session?.user}
                        REGISTER
                    {:else}
                        LOGIN
                    {/if}
                </button>
            </div>
        </div>
    </div>
</div>