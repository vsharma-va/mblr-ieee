<script>
    import {onMount} from "svelte";

    onMount(() => {

        var w = c.width = window.innerWidth,
            h = c.height = window.innerHeight,
            ctx = c.getContext('2d'),

            opts = {
                len: 60,
                count: 20,
                baseTime: 10,
                addedTime: 10,
                dieChance: .05,
                spawnChance: 1,
                sparkChance: .1,
                sparkDist: 10,
                sparkSize: 2,

                color: 'hsl(200, 100%, 50%)',  // Fixed color: blue
                baseLight: 50,
                addedLight: 10, // Not used anymore
                shadowToTimePropMult: 6,
                baseLightInputMultiplier: .01,
                addedLightInputMultiplier: .02,

                cx: w / 2,
                cy: h / 2,
                repaintAlpha: .04,
                hueChange: .1 // Not used anymore
            },

            tick = 0,
            lines = [],
            dieX = w / 2 / opts.len,
            dieY = h / 2 / opts.len;

        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, w, h);

        function loop() {
            window.requestAnimationFrame(loop);
            ++tick;

            ctx.globalCompositeOperation = 'source-over';
            ctx.shadowBlur = 0;
            ctx.fillStyle = `rgba(0,0,0,${opts.repaintAlpha})`;
            ctx.fillRect(0, 0, w, h);
            ctx.globalCompositeOperation = 'lighter';

            if (lines.length < opts.count && Math.random() < opts.spawnChance)
                lines.push(new Line());

            for (var i = 0; i < lines.length; i++) {
                lines[i].step();
            }
        }

        function Line() {
            this.reset();
        }

        Line.prototype.reset = function () {
            this.x = 0;
            this.y = 0;
            this.addedX = 0;
            this.addedY = 0;

            this.rad = 0;

            this.color = opts.color;  // Use fixed color
            this.cumulativeTime = 0;

            this.beginPhase();
        }

        Line.prototype.beginPhase = function () {
            this.x += this.addedX;
            this.y += this.addedY;

            this.time = 0;
            this.targetTime = (opts.baseTime + opts.addedTime * Math.random()) | 0;

            // Change direction by 90 degrees (0, 90, 180, 270 degrees)
            this.rad = Math.PI / 2 * ((Math.random() * 4) | 0);
            this.addedX = Math.cos(this.rad);
            this.addedY = Math.sin(this.rad);

            if (Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY)
                this.reset();
        }

        Line.prototype.step = function () {
            ++this.time;
            ++this.cumulativeTime;

            if (this.time >= this.targetTime)
                this.beginPhase();

            var prop = this.time / this.targetTime,
                wave = Math.sin(prop * Math.PI / 2),
                x = this.addedX * wave,
                y = this.addedY * wave,
                len = opts.len,
                cx = opts.cx,
                cy = opts.cy;

            ctx.shadowBlur = prop * opts.shadowToTimePropMult;
            ctx.fillStyle = ctx.shadowColor = this.color;  // Use fixed color
            ctx.fillRect(cx + (this.x + x) * len, cy + (this.y + y) * len, 2, 2);

            if (Math.random() < opts.sparkChance)
                ctx.fillRect(cx + (this.x + x) * len + Math.random() * opts.sparkDist * (Math.random() < .5 ? 1 : -1) - opts.sparkSize / 2, cy + (this.y + y) * len + Math.random() * opts.sparkDist * (Math.random() < .5 ? 1 : -1) - opts.sparkSize / 2, opts.sparkSize, opts.sparkSize);
        }

        loop();

        window.addEventListener('resize', function () {
            w = c.width = window.innerWidth;
            h = c.height = window.innerHeight;
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, w, h);

            opts.cx = w / 2;
            opts.cy = h / 2;

            dieX = w / 2 / opts.len;
            dieY = h / 2 / opts.len;
        });
    });
</script>

<canvas id=c></canvas>