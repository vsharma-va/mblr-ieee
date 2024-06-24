<script>
    import "../app.css";
    import Lenis from '@studio-freight/lenis';
    import {onMount} from "svelte";
    import NewNavbar from "$lib/common/NewNavbar.svelte";
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
    import {gsap} from "gsap/dist/gsap";
    import CursorBuddy from "$lib/common/CursorBuddy.svelte";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (ScrollTrigger.isTouch !== 1) {
            const lenis = new Lenis()

            function raf(time) {
                lenis.raf(time)
                requestAnimationFrame(raf)
            }

            requestAnimationFrame(raf)
            }
        }
    )
</script>

<CursorBuddy/>
<NewNavbar/>
<slot/>