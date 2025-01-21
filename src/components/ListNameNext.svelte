<style>
    /* Container bố cục chính */
#people-container {
    display: flex
;
    width: 80vw;
    justify-content: space-around;
    border-radius: 1em;
    transition: 1s;
    margin-bottom: 7vh;
}

/* Mỗi phần tử */
.person {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;;
    font-weight: bold;
    font-size: 2vw;
    width: 7vw;
    height: 18vh;
    text-transform: uppercase;
    color: #fdff00;
    text-align: center;
    padding: 1.5em;
    padding-top: 4vh;
    border-radius: 0.5em;
    background-color: #f2443dd6;
    transition: all 0.3s ease;
}

/* Hiệu ứng hover */
.person:hover {

  transform: translateY(-3px); /* Hiệu ứng nổi lên */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Tăng đổ bóng khi hover */
}
:global(.containerPeople){
        transform: translateY(23vh);
    }
    .animate__fadeOut{
        --animate-duration:0s;
    }
</style>
<script>
    import { onMount } from "svelte";
    import { slide,scale, blur } from "svelte/transition";
    import { name, step } from "../store.js";




    onMount(() => {
        setTimeout(()=>{
            document.getElementById("people-container").classList.add('containerPeople')
        },2500)
        setTimeout(()=>{
            $step = "4"
        },4500)
    })
</script>
<div id="people-container" class = " animate__animated animate__fadeOut animate__delay-3s " >
  {#each $name as person, index}
  <div class ="person" in:slide = {{duration: 1000 + (index+1)*300}}>{person}</div>

{/each}

  </div>
  