<script>
    import { onMount } from "svelte";
    import { slide, scale } from "svelte/transition";
    let burst = false
    let images = [
        { id: "env1", src: "../images/luckymoney.svg", alt: "lucky" },
        { id: "env2", src: "../images/luckymoney.svg", alt: "lucky" },
        { id: "env3", src: "../images/luckymoney.svg", alt: "lucky" },
        { id: "env4", src: "../images/luckymoney.svg", alt: "lucky" },
        { id: "env5", src: "../images/luckymoney.svg", alt: "lucky" },
    ];

    onMount(() => {
        setTimeout(() => {
            document.getElementById("containerLucky").classList.add("containerLucky");
        }, 1500);
    });
  
</script>

<style>
    :global(.containerLucky) {
        transform: translateY(-15vh);
    }

    #containerLucky {
        display: flex;
        justify-content: space-around;
        align-items: center;
        transition: 0.8s;
        width: 80vw;
    }

    img {
        width: 15vw;
        transition: transform 0.5s ease-in-out;
        pointer-events: auto;
    cursor: pointer;
    }

    .animate__flipOutY{    
 
           --animate-duration: 2s;}

</style>

<div id="containerLucky" >
    {#each images as { id, src, alt }, i (id)}
        <img 
            src={src} 
            alt={alt} 
            id={id} 
            class="animate__animated animate__flipOutY animate__delay-3s" 
         
        
        />
    {/each}
</div>

