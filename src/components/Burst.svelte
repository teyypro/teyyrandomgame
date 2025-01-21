<style>
    img{
        position: relative;
    width: 35vw;
    }

</style>
<script>
      import { slide, scale } from "svelte/transition";
    import { onMount } from "svelte";
    import { step } from "../store";


onMount(()=>{
    const img = document.getElementById("animatedImage");

// Add the "in" animation
img.classList.add("animate__lightSpeedInRight");
img.style.setProperty("--animate-duration", "0.4s");

// Wait for the "in" animation to finish + delay
setTimeout(() => {
  // Remove "in" animation and add "out" animation
  img.classList.remove("animate__lightSpeedInRight");
  img.classList.add("animate__lightSpeedOutLeft");
}, 1500); // 0.5s animation + 1s delay = 1.5s total
    setTimeout(()=>{
        $step = "5"
    },2200)   
})
</script>

<img id="animatedImage"
class="animate__animated" src = "../images/burst.webp" alt = "burrt" >