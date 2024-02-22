<script>
    import {navigating} from "$app/stores";

    let navbar;
    let navOpen = false;
    let departmentSelection

    function toggleNavBar(forceClose = false) {
        // navbar is closed
        if (navbar.classList.contains("-left-[100%]")) {
            if (departmentSelection.classList.contains("right-0")) {
                departmentSelection.classList.remove("right-0");
                departmentSelection.classList.add("-right-[100%]");
            }
            navbar.classList.remove("-left-[100%]");
            navbar.classList.add("left-0");
            navOpen = true
            // navbar is open
        } else {
            navbar.classList.remove("left-0");
            navbar.classList.add("-left-[100%]");
            navOpen = false
        }
    }

    function toggleDepartmentSelection() {
        // navbar is closed
        if (departmentSelection.classList.contains("-right-[100%]")) {
            if (navbar.classList.contains("left-0")) {
                navbar.classList.remove("left-0");
                navbar.classList.add("-left-[100%]");
                navOpen = false
            }
            departmentSelection.classList.remove("-right-[100%]");
            departmentSelection.classList.add("right-0");
            // navbar is open
        } else {
            departmentSelection.classList.remove("right-0");
            departmentSelection.classList.add("-right-[100%]");
        }
    }

    $: if ($navigating) {
        if (navOpen) {
            navbar.classList.remove("left-0");
            navbar.classList.add("-left-[100%]");
        }
    }
</script>

<div class="h-screen w-full fixed top-0 z-[5] -left-[100%] transition-all duration-300 gap-1 sm:gap-2 bg-surface flex flex-row items-center justify-center"
     bind:this={navbar}>
    <div class="w-full h-fit flex flex-col justify-center items-center sm:items-start sm:pl-[5%] gap-10">
        <a href="/">
            <div class="h-fit w-fit relative group cursor-pointer">
                <p class="heading-font text-4xl sm:text-6xl font-bold tracking-wide text-on-surface">Home</p>
                <div class="absolute bottom-0 h-[18px] w-0 bg-primary-container/90 group-hover:w-full transition-all duration-300 nav-link-underline-bg"></div>
            </div>
        </a>
        <a href="/events">
            <div class="h-fit w-fit relative group cursor-pointer">
                <p class="heading-font text-4xl sm:text-6xl font-bold tracking-wide text-on-surface">Events</p>
                <div class="absolute bottom-0 h-[18px] w-0 bg-primary-container/90 group-hover:w-full transition-all duration-300 nav-link-underline-bg"></div>
            </div>
        </a>
        <a href="/about-us">
            <div class="h-fit w-fit relative group cursor-pointer">
                <p class="heading-font text-4xl sm:text-6xl font-bold tracking-wide text-on-surface text-center">
                    About</p>
                <div class="absolute bottom-0 h-[18px] w-0 bg-primary-container/90 group-hover:w-full transition-all duration-300 nav-link-underline-bg"></div>
            </div>
        </a>
    </div>
    <div class="w-[2%] h-full flex flex-col justify-center items-end bg-primary-container vertical-strike-nav-menu-bg">
    </div>
    <div class="w-[2%] h-full flex flex-col justify-center items-end bg-primary-container vertical-strike-nav-menu-bg">
    </div>
</div>

<div class="h-screen w-full fixed top-0 z-[5] -right-[100%] transition-all duration-300 gap-2 bg-surface flex flex-row items-center justify-center"
     bind:this={departmentSelection}>
    <div class="w-[2%] h-full flex flex-col justify-center items-start bg-primary-container vertical-strike-nav-menu-bg">
    </div>
    <div class="w-[2%] h-full flex flex-col justify-center items-start bg-primary-container vertical-strike-nav-menu-bg">
    </div>
    <div class="w-full h-fit flex flex-col justify-center items-center sm:items-end sm:pl-[5%] gap-10">
        <a href="#ieee" on:click={toggleDepartmentSelection}>
            <div class="h-fit w-fit relative group cursor-pointer">
                <p class="heading-font text-4xl sm:text-5xl font-bold tracking-wide text-on-surface">IEEE</p>
                <div class="absolute bottom-0 h-[18px] w-0 bg-primary-container/90 group-hover:w-full transition-all duration-300 nav-link-underline-bg"></div>
            </div>
        </a>
        <a href="#ieee-cs" on:click={toggleDepartmentSelection}>
            <div class="h-fit w-fit relative group cursor-pointer">
                <p class="heading-font text-4xl sm:text-5xl font-bold tracking-wide text-on-surface text-center">IEEE
                    CS</p>
                <div class="absolute bottom-0 h-[18px] w-0 bg-primary-container/90 group-hover:w-full transition-all duration-300 nav-link-underline-bg"></div>
            </div>
        </a>
        <a href="#ieee-cis" on:click={toggleDepartmentSelection}>
            <div class="h-fit w-fit relative group cursor-pointer">
                <p class="heading-font text-4xl sm:text-5xl font-bold tracking-wide text-on-surface text-center">IEEE
                    CIS</p>
                <div class="absolute bottom-0 h-[18px] w-0 bg-primary-container/90 group-hover:w-full transition-all duration-300 nav-link-underline-bg"></div>
            </div>
        </a>
    </div>
</div>

<div class="h-fit w-full flex flex-row justify-between items-center fixed top-0 z-[5] backdrop-blur-xl bg-on-surface nav-bg-color">
    <div class="w-full h-full pl-[5%] flex flex-col py-2 items-start justify-start"
         on:click={toggleNavBar}>
        <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="26"
                viewBox="0 0 448 512"
                class="fill-white"
        >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
            <path
                    d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
        </svg>
    </div>
    <div class="w-full h-full flex flex-col items-end justify-start py-2 pr-[5%]">
        <div class="w-fit h-fit bg-primary-container department-button-color py-2 px-4 rounded-2xl cursor-pointer"
             on:click={toggleDepartmentSelection}>
            <p class="text-sm heading-font tracking-wide text-on-primary-container department-button-text-color">
                Departments</p>
        </div>
    </div>
</div>