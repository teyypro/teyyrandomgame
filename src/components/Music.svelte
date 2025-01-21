<script>
    import { onMount } from "svelte";
    import { TFmusic } from "../store";

    
    let backaudio;

    // Khởi tạo audio và gán sự kiện
    onMount(() => {
        backaudio = new Audio('../images/backgroundmusic.mp3');
        backaudio.loop = true; // Lặp lại khi kết thúc
        backaudio.play();
    });

    // Hàm bật/tắt nhạc
    function toggleMusic() {
        console.log($TFmusic)
        if ($TFmusic) {
            backaudio.pause(); // Dừng nhạc
        } else {
            backaudio.play(); // Phát nhạc
        }
        $TFmusic = !$TFmusic; // Cập nhật trạng thái
    }
</script>

<style>
     
    .material-symbols-outlined {
        cursor: pointer;
    font-size: 6vh;
    padding: 0;
    margin:0;
    }

    button{
        display: flex
;
    position: absolute;
    bottom: 1vh;
    right: 1vh;
    height: max-content;
    background-color: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    }
</style>

<!-- Hiển thị biểu tượng tùy theo trạng thái -->
<button on:click={()=>toggleMusic()} style="  z-index: 999;">
   
<span class="material-symbols-outlined">
    
    {#if $TFmusic}
        pause_circle
    {:else}
        volume_up
    {/if}
</span>
</button>