<script>
    import { onMount } from "svelte";
    import { slide, scale } from "svelte/transition";
    import { name, pass, pickName, TFbackground, TFPick } from "../store";
    import ListName from "./ListName.svelte";
  
    let images = [
        { id: "env1", src: "images/luckymoney.svg", alt: "lucky" },
        { id: "env2", src: "images/luckymoney.svg", alt: "lucky" },
        { id: "env3", src: "images/luckymoney.svg", alt: "lucky" },
        { id: "env4", src: "images/luckymoney.svg", alt: "lucky" },
        { id: "env5", src: "images/luckymoney.svg", alt: "lucky" },
    ];

    let ListNam 

// Fisher-Yates Shuffle Algorithm
onMount(()=>{ 
    ListNam = $name;

    for (let i = ListNam.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ListNam[i], ListNam[j]] = [ListNam[j], ListNam[i]];
    }
    console.log($name)
})


    async function GetName(id,index){
      
        $pickName = ListNam[id] 
        if (  $TFPick == true){
            $TFPick = false
            await new Promise((resolve) => setTimeout(resolve, 500));
            $TFPick = true
            $TFbackground = true
        } else {
            $TFPick = true
            $TFbackground = true
        }
        console.log(document.getElementById(index), index)
        document.getElementById(index).classList.add('grey')
        $pass = true
}

</script>

<style>
     :global(.grey){
        filter: grayscale(0.8);
    opacity: 0.7;
    width:9vw;
    }

    #containerLucky {
        display: flex
;
    justify-content: space-around;
    align-items: center;
    transition: 0.8s;
    width: 90vw;
    }

    img {
        width: 10vw;
        transition:  0.2s ease-in-out;
    }

   img:hover{
     scale:1.3;
  
   }
   .animate__backInUp{
    --animate-duration: 1.5s;
   }
</style>

<div id="containerLucky" >
    {#each images as { id, src, alt }, i (id)}
        <img 
            src={src} 
            alt={alt} 
            id={id} 
           on:click = {()=>{GetName(i,id)}}
        class = "animate__backInUp animate__animated"
        />
    {/each}
</div>

