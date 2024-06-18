<script>
    import {onMount} from "svelte";

    export let desktop;

    onMount(() => {
        window.requestAnimFrame = (function () {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();

        var c;
        if(desktop) {
            c = document.getElementById('canvas-desktop')
        } else {
            c = document.getElementById('canvas-mobile');
        }
        var $ = c.getContext('2d'),
            w = c.width = window.innerWidth,
            h = c.height = window.innerHeight,
            arr = [],
            u = 0,
            o = 0;
        let stopAnimation = false;

        $.globalCompositeOperation = "destination-over";

        window.addEventListener('resize', function () {
            c.width = window.innerWidth;
            c.height = window.innerHeight;
        }, false);

        var ready = function () {
            arr = [];
            for (var i = 0; i < 20; i++) {
                set();
            }
        };

        var set = function () {
            arr.push({
                x1: w,
                y1: h,
                _x1: w - Math.random() * w,
                _y1: h - Math.random() * h,
                _x2: w - Math.random() * w,
                _y2: h - Math.random() * h,
                x2: -w + Math.random() * w,
                y2: -h + Math.random() * h,
                rot: Math.random() * 180,
                a1: Math.random() * 5,  // Reduced the range
                a2: Math.random() * 5,  // Reduced the range
                a3: Math.random() * 5,  // Reduced the range
                createdAt: Date.now()   // Timestamp when created
            });
        };

        var pretty = function () {
            if (stopAnimation) return;
            // u -= .2;
            // var now = Date.now();

            // // Filter out rays older than 3 seconds and add new ones
            // arr = arr.filter(function (b) {
            //     if (now - b.createdAt < 3000) {
            //         return true;
            //     } else {
            //         set(); // Add a new ray to replace the old one
            //         return false;
            //     }
            // });

            // Clear the canvas for the next frame
            // $.clearRect(0, 0, w, h);

            for (var i in arr) {
                var b = arr[i];
                b._x1 += Math.sin(b.a1 -= 0.001) * 0.5; // Reduced movement
                b._y1 += Math.sin(b.a1) * 0.5;          // Reduced movement
                b._x2 += Math.sin(b.a2 += 0.001) * 0.5; // Reduced movement
                b._y1 += Math.sin(b.a2) * 0.5;          // Reduced movement
                b.x1 += Math.sin(b.a3 += 0.001) * 0.5;  // Reduced movement
                b.y1 += Math.sin(b.a3) * 0.5;           // Reduced movement
                b.x2 += Math.sin(b.a3 -= 0.001) * 0.5;  // Reduced movement
                b.y2 += Math.sin(b.a3) * 0.5;           // Reduced movement
                $.save();
                $.globalAlpha = 0.03;
                $.beginPath();
                $.strokeStyle = 'rgba(154, 214, 255, 0.7)';  // Fixed color (Orange)
                $.moveTo(b.x1, b.y1);
                $.bezierCurveTo(b._x1, b._y1, b._x2, b._y2, b.x2, b.y2);
                $.stroke();
                $.restore();
            }
            window.requestAnimFrame(pretty);
        };
        ready();
        pretty();
        setTimeout(function() {
            stopAnimation = true;
        }, 2000);  // Stop the animation after 5 seconds
    })
</script>

{#if desktop}
    <canvas id='canvas-desktop' class="z-[1] h-full w-full"></canvas>
{:else}
    <canvas id='canvas-mobile' class="z-[1] h-full w-full"></canvas>
{/if}