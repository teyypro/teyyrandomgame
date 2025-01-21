<script>
    import { onMount } from "svelte";
    import Begining from "../components/Begining.svelte";
    import { pass, step, TFbackground } from "../store";
    import Table from "../components/Table.svelte";
    import Naviagate from "../components/Naviagate.svelte";
    import ListName from "../components/ListName.svelte";
      import CoinRotate from "../components/CoinRotate.svelte";
      import ListNameNext from "../components/ListNameNext.svelte";
      import LuckyMoney from "../components/LuckyMoney.svelte";
      import Burst from "../components/Burst.svelte";
      import ListLuckyPick from "../components/ListLuckyPick.svelte";
      import PickName from "../components/PickName.svelte";
      import Background from "../components/Background.svelte";
      import Backgroundlinear from "../components/Backgroundlinear.svelte";
      import Music from "../components/Music.svelte";
    onMount(() => {
      setTimeout(() => {
        step.set("1"); // Correctly update the store using the set method
      }, 2000);
    });
  </script>
  
  <Music/>
  {#if $step == "0"}
  <Begining/>
  {:else if $step == "1"}
  <div id="container_table">
    <Backgroundlinear/>
  <div id="navi"><ListName/>
  <Naviagate/></div>
  <Table/>
  </div>
  {:else if $step == "2"}
  <CoinRotate/>
  {:else if $step == "3"}
  <div id="container_table">
    <ListNameNext/>
    <LuckyMoney/>
  </div>
  {:else if $step == "4"}
  <div id="container_name"><Burst/></div>
  
  {:else if $step == "5"}
  <div id="container_name">
    {#if $TFbackground}
    <Background/>
    {/if}
    <PickName/>
  <ListLuckyPick/>
  </div>
  {/if}
  
  
  <style>
  #container_name{
    margin: 0;
      padding: 0;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: transparent;
      display: flex
  ;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      overflow: hidden;
  }
  #container_table{
    z-index: -1;
    overflow:hidden;
    margin: 0;
      padding: 0;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
  }
  #navi{
      width: 80vw;
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-block: 2em;
  }
  </style>