<script>
    import { onMount } from "svelte";
    import { step } from "../store";
    import { slide,scale } from "svelte/transition";
    onMount(()=>{
        setTimeout(()=>{
            $step = "3" 
        },500)
    })
</script>

<style>
    img{
        top: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 75%;
    }
   

</style>
<img src = 'images/coin.gif' alt = "coin" >