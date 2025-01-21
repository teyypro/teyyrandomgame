<script>
    import { onMount } from 'svelte';

    import { slide } from 'svelte/transition';
  
    onMount(() => {
      const span = document.querySelector('.animate__rubberBand');
      span.classList.add('animate__animated'); // Ensure this is only for CSS animation
    });
  </script>
  
  <style>
    div {
      margin: 0;
      padding: 0;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fee9cf;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    img {
      width: 60vh;
      display: block;
    }
    span {
      font-family: 'Permanent Marker', serif;
      font-weight: 400;
      font-style: normal;
      font-size: 13vh;
      margin-top: 1vh;
      color: #e55031;
    }
    .animate__rubberBand {
      --animate-duration: 2s;
    }
  </style>
  
 
  <div id="container" >
    <img alt="beginningImage" src="../images/1_begining.webp">
    <span class="animate__rubberBand" >
      LÌ XÌ TOÁN HOC
    </span>
  </div>
 
  