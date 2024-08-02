<script>
    import InfiniteMarquee from "$lib/common/InfiniteMarquee.svelte";
    import footerImg from "$lib/assets/images/footer.gif";
    import {enhance} from "$app/forms";
    import {goto} from "$app/navigation";
    import ContentLoaderIndicator from "$lib/common/ContentLoaderIndicator.svelte";

    export let data;

    let userName;
    let clientFormErrors = {userNameError: '', userYearError: '', userBranchError: '', userRegistrationNumError: ''};
    let userYear;
    let userBranch;
    let userRegistrationNum;
    let isFormLoading = false;

    function validateUserName() {
        const nameRegex = /^[a-zA-Z\- ]+$/;
        if (userName?.match(nameRegex) == null || userName == null || userName.length === 0) {
            clientFormErrors.userNameError = 'Invalid Username (Should only contain letters)';
        } else {
            clientFormErrors.userNameError = '';
        }
    }

    function validateYear() {
        if (userYear?.toString().match(/^\d+$/) == null || userYear == null && userYear > 4) {
            clientFormErrors.userYearError = 'Only integers < 4 are allowed';
        } else {
            clientFormErrors.userYearError = '';
        }
    }

    function validateBranch() {
        if (!userBranch) {
            clientFormErrors.userBranchError = 'Please select a valid branch';
        } else {
            clientFormErrors.userBranchError = '';
        }
    }

    function validateRegistrationNum() {
        if (userRegistrationNum?.toString().match(/^\d+$/) == null || userRegistrationNum == null || userRegistrationNum.toString().length !== 9) {
            clientFormErrors.userRegistrationNumError = 'Please enter a valid registration number';
        } else {
            clientFormErrors.userRegistrationNumError = '';
        }
    }

    function submitForm({formData, cancel}) {
        validateBranch();
        validateYear();
        validateUserName()
        validateRegistrationNum()
        if (!clientFormErrors.userBranchError && !clientFormErrors.userNameError && !clientFormErrors.userYearError && !clientFormErrors.userRegistrationNumError) {
            formData.set('userBranch', userBranch);
            formData.set('userName', userName);
            formData.set('userYear', userYear);
            formData.set('from', data.from);
            formData.set('userRegistrationNum', userRegistrationNum);
        } else {
            isFormLoading = false;
            cancel();
        }
    }
</script>

<svelte:head>
    <title>AUTH - WELCOME BACK!</title>
</svelte:head>

<div class="h-screen w-full bg-surface content flex flex-col items-center justify-center relative">
    <div class="w-full h-fit absolute top-24 md:top-16 xl:top-8">
        <InfiniteMarquee dimText="HTTPS://" mainText="IEEE.SOCIETY/AUTH" isSmall="{false}" textColor="text-on-surface"
                         differentiatingFactor="auth"/>
    </div>
    <div class="w-full h-5 bg-primary-container absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-[50%]"></div>
    <div class="w-full h-5 bg-primary-container absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-[50%]"></div>
    <div class="h-fit w-[75%] sm:w-[400px] rounded-xl backdrop-blur-2xl flex flex-col items-center justify-center gap-2 p-4 relative shadow-xl">
        <div class="h-fit w-full flex flex-col items-center justify-center gap-2">
            <p class="text-2xl lg:text-3xl primary-font text-on-surface">HELLO THERE!</p>
            <p class="text-sm lg:text-lg primary-font text-on-surface/50 leading-[1] text-center">We Would Love To Get
                You Know Better!</p>
        </div>
        <form action="?/registerUser" method="post"
              class="h-full w-full flex flex-col gap-2 items-center justify-center"
              use:enhance={(data) => {
                  isFormLoading = true;
                  submitForm(data);
                  return async ({result}) => {
                      isFormLoading = false;
                      if(result.type === 'failure') {
                        clientFormErrors = result.data;
                      } else if(result.type === 'success') {
                          await goto(result.data.goto);
                      }
                  }
            }}>
            <div class="form__group field">
                <input type="input" class="form__field primary-font lg:text-lg" placeholder="Full Name" required=""
                       bind:value={userName} on:input={validateUserName}>
                <label for="name" class="form__label lg:text-lg primary-font">Full Name</label>
                <p class="text-sm lg:text-lg leading-[1] text-error primary-font">{clientFormErrors.userNameError}</p>
            </div>
            <div class="form__group field">
                <input type="number" class="form__field lg:text-lg primary-font" placeholder="Full Name" required=""
                       bind:value={userYear} on:input={validateYear}>
                <label for="name" class="form__label lg:text-lg primary-font">Year</label>
                <p class="text-sm lg:text-lg text-error primary-font">{clientFormErrors.userYearError}</p>
            </div>
            <div class="form__group field">
                <input type="number" class="form__field lg:text-lg primary-font" placeholder="Registration Number"
                       required=""
                       bind:value={userRegistrationNum} on:input={validateRegistrationNum}>
                <label for="name" class="form__label lg:text-lg primary-font">Registration Number</label>
                <p class="text-sm lg:text-lg text-error primary-font">{clientFormErrors.userRegistrationNumError}</p>
            </div>
            <div class="form__group field">
                <select class="form__field lg:text-lg primary-font bg-surface text-on-surface border-2 border-on-surface"
                        type="input"
                        required=""
                        bind:value={userBranch}
                        on:change={validateBranch}>
                    <option value="-1" class="bg-surface text-on-surface" selected disabled>
                        WHAT IS YOUR BRANCH?
                    </option>
                    <option value="CSE-CORE" class="bg-surface text-on-surface">CSE CORE</option>
                    <option value="CSE-AI" class="bg-surface text-on-surface">CSE AI</option>
                    <option value="CSE-CYBER" class="bg-surface text-on-surface">CSE CYBER</option>
                    <option value="IT" class="bg-surface text-on-surface">IT</option>
                    <option value="DS" class="bg-surface text-on-surface">DATA SCIENCE</option>
                    <option value="ECM" class="bg-surface text-on-surface">ECM</option>
                    <option value="ECE" class="bg-surface text-on-surface">ECE</option>
                </select>
                <label for="name" class="form__label lg:text-lg primary-font">BRANCH?</label>
                <p class="text-sm lg:text-lg text-error primary-font">{clientFormErrors.userBranchError}</p>
            </div>
            <div class="flex flex-row items-center justify-center h-[39px] w-full gap-1 mt-5">
                <img src="{footerImg}" alt="animated gif of bars sliding in opposite direction"
                     class="w-full h-full object-cover mix-blend-darken">
                <button class="w-fit h-fit bg-primary-container text-on-primary-container text-lg lg:text-xl p-2 primary-font rounded-xl relative"
                        type="submit" disabled="{isFormLoading}">
                    {#if isFormLoading}
                        <ContentLoaderIndicator backgroundColor="bg-on-primary-container"
                                                heightAndWidth="h-4 w-4 lg:h-5 lg:w-5"/>
                        <span class="opacity-0">SUBMIT</span>
                    {:else}
                        SUBMIT
                    {/if}
                </button>
            </div>
        </form>
    </div>
</div>

<style>
    .form__group {
        position: relative;
        padding: 20px 0 0;
        width: 100%;
    }

    .form__field {
        font-family: inherit;
        width: 100%;
        border: none;
        border-bottom: 2px solid #9b9b9b;
        outline: 0;
        color: #fff;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;
    }

    .form__field::placeholder {
        color: transparent;
    }

    .form__field:placeholder-shown ~ .form__label {
        cursor: text;
        top: 20px;
    }

    .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        color: #9b9b9b;
        pointer-events: none;
    }

    .form__field:focus {
        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, #9ad6ff, #00b1f5);
        border-image-slice: 1;
    }

    .form__field:focus ~ .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        color: #00b1f5;
        font-weight: 700;
    }

    /* reset input */
    .form__field:required, .form__field:invalid {
        box-shadow: none;
    }
</style>