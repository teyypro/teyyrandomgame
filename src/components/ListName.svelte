<style>
    /* Container bố cục chính */
.people-container {
  display: flex;
    gap: 0.5em;
    justify-content: center;
    /* padding: 10px; */
    /* box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px; */
    /* background-color: #feeedf; */
    border-radius: 1em;
    transition: 1s;
}

/* Mỗi phần tử */
.person {
  font-weight: bold;
    font-size: 1.3em;
    text-transform: uppercase;
    color: #dc392f;
    padding-inline: 1.2em;
    padding-block: 0.5em;
    border-radius: 0.5em;
    background-color: #ffffff;
    transition: all 0.3s ease;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}



</style>
<script>
    import { onMount } from "svelte";
    import { slide,scale } from "svelte/transition";
    import { name } from "../store.js";
    console.log($name)

</script>
<div class="people-container">
  {#each $name as person, index}
  <div class="person" in:scale = {{duration: 1000}}>{person}</div>

{/each}

  </div>
  