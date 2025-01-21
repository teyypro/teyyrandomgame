<style>
    .button-container {
  display: flex;
  gap: 10px; /* Khoảng cách giữa các nút */
}

.btn {
  border: 0;
    border-radius: 1em;
    padding: 10px 20px;
    font-family: 'Arial', sans-serif;
    font-weight: bold;
    font-size: 1vw;
    color: #000000;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.randomize {
  background-color: white; /* Màu nền nút RANDOMIZE */
}

.clear {
  background-color: white; /* Màu nền nút CLEAR */
}

.btn:hover {
  background-color: #ffe1b8; /* Màu nền khi hover */
}

.btn:active {
  transform: scale(0.95); /* Hiệu ứng nhấn nút */
}
.animate__zoomInDown{
  --animate-duration: 3s; /* Chỉ định thời gian */
}
</style>
<script>
  import { click ,name, pass, pickName, TFbackground, TFPick} from "../store.js";
 
 
  function Activate(){          
    click.set(true);
  }

  function Deactivate(){
    console.log("func clear")
    click.set(false);
    $pickName = ""
    $TFPick = false
    $TFbackground = false
    $name = []
    $pass = false
  }

</script>
<div class="button-container animate__zoomInDown animate__animated">
    <button class="btn randomize" on:click={()=>Activate()}>RANDOMIZE</button>
    <button class="btn clear"  on:click={()=>Deactivate()}>CLEAR</button>
  </div>
                                     