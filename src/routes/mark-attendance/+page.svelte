<script>
    import footerImg from "$lib/assets/images/footer.gif";
    import InfiniteMarquee from "$lib/common/InfiniteMarquee.svelte";
    import ContentLoaderIndicator from "$lib/common/ContentLoaderIndicator.svelte";
    import {enhance} from "$app/forms";


    let isFormLoading = false;
    let attdCode;
    let clientFormErrors = {userAttdCodeError: ''};
    let success = false;

    function validateAttdCode() {
        if (attdCode?.toString().match(/^\d+$/) == null || attdCode == null || attdCode.toString().length !== 6) {
            clientFormErrors.userAttdCodeError = 'Only integers =6 length are allowed';
        } else {
            clientFormErrors.userAttdCodeError = '';
        }
    }

    function submitForm({formData, cancel}) {
        validateAttdCode();
        if (!clientFormErrors.userAttdCodeError) {
            formData.set('userAttdCode', attdCode);
        } else {
            isFormLoading = false;
            cancel();
        }
    }

    $: reactiveSuccess = success;
</script>

{#if reactiveSuccess}
    <div class="absolute top-32 left-1/2 -translate-x-1/2 bg-green-300 p-3 rounded-xl z-[5]">
        <p class="text-xl primary-font text-green-700">Recorded Attendance Successfully!</p>
    </div>
{/if}

<div class="h-screen w-full bg-surface content flex flex-col items-center justify-center relative">
    <div class="w-full h-fit absolute top-24 md:top-16 xl:top-8">
        <InfiniteMarquee dimText="HTTPS://" mainText="IEEE.SOCIETY/MARK-ATTENDANCE" isSmall="{false}"
                         textColor="text-on-surface"
                         differentiatingFactor="auth"/>
    </div>
    <div class="w-full h-5 bg-primary-container absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-[50%]"></div>
    <div class="w-full h-5 bg-primary-container absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-[50%]"></div>
    <div class="h-fit w-[75%] sm:w-[400px] rounded-xl backdrop-blur-2xl flex flex-col items-center justify-center gap-2 p-4 relative shadow-xl">
        <div class="h-fit w-full flex flex-col items-center justify-center gap-2">
            <p class="text-2xl lg:text-3xl primary-font text-on-surface">ENTER CODE</p>
            <p class="text-sm lg:text-lg primary-font text-on-surface/50 leading-[1] text-center">ASK USER TO REGISTER
                ON THE WEBSITE. THE CODE IS THERE ON THE DASHBOARD PAGE</p>
        </div>
        <form action="?/markAttendance" method="post"
              class="h-full w-full flex flex-col gap-2 items-center justify-center"
              use:enhance={async (data) => {
                  isFormLoading = true;
                  submitForm(data);
                  return async ({result}) => {
                      isFormLoading = false;
                      if(result.type === 'failure') {
                          clientFormErrors = result.data;
                      } else if (result.type === 'success') {
                          success = true;
                          setTimeout(() => {
                              success = false;
                          }, 2000);
                      }
                  }
            }}>
            <div class="form__group field">
                <input type="input" class="form__field primary-font lg:text-lg" placeholder="Attendance Code"
                       required=""
                       bind:value={attdCode} on:input={validateAttdCode}>
                <label for="name" class="form__label lg:text-lg primary-font">Attendance Code</label>
                <p class="text-sm lg:text-lg leading-[1] text-error primary-font">{clientFormErrors.userAttdCodeError}</p>
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