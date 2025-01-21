<script>
    import { pass, pickName, TFPick } from "../store";
    import { scale } from "svelte/transition";
    let audPick = new Audio('images/outName.wav')
    TFPick.subscribe((value)=>{
        if (value) {
            audPick.currentTime = 0;
            audPick.play()
        }
    })
</script>
<div id="transition-container" >
{#key $TFPick}
{#if $TFPick}
<div class = "animate__rubberBand animate__animated animate__flipInY " >
    <p >{$pickName}</p>
    <img src='images/vong.png' alt='bvon'>
</div>
{:else if !$pass}
<div id = 'treolucky'>
<img style="     width: 16vw;
position: relative;
top: -7vh;" src='../images/treo.gif' alt='bvon' class = "animate__animated animate__bounceInDown">
<div id = 'lucky' class ="animate__animated animate__backInRight">Chọn một lì xì bạn muốn!</div>
</div>
{/if}
{/key}
</div>
<style>
    .animate__flipInY{
        --animate-duration: 3s;
    }
    .animate__rubberBand{
        --animate-duration: 6s;
    }
    .animate__backInRight{
        --animate-duration: 1s;
    
    }
    .animate__bounceInDown{
        --animate-duration: 4s;
    }

    #treolucky{
        display: flex
;
    flex-direction: row;
    height: 100%;
    }
#lucky{
    font-size: 3vw;
    font-family: "Alfa Slab One", serif;
    font-weight: 400;
    font-style: normal;
}
    div{
        display: grid
;
    place-items: center;
    }
    #transition-container {
        display: flex
;
    width: 90vw;
    position: relative;
    height: 55vh;
    justify-content: center;
    z-index: 9999;
    }
    p {
        color: #5DBFFF;
    max-width: 17vw;
    text-align: center;
    position: absolute;
    font-size: 3vw;
    font-family: "Alfa Slab One", serif;
    font-weight: 400;
    font-style: normal;
    margin-top: 5vw;
    }
    img {
        width: 25vw;
    height: max-content;
    position: relative;

    }
</style>
