<script>
  import { onMount } from "svelte";
  import { click, name, pickName, step, TFbackground, TFPick } from "../store";
  let selectedIds = []  
  const totalIds = 48; // Tổng số ID
  let aupick = new Audio("images/tick.mp3");
  let correctAudio = new Audio('images/get.mp3')
  let ghostAudio = new Audio('images/ghost.mp3')
  let prev_Num = -1;
  let exceptList = [29, 30, 31, 32, 22, 23, 24, 18]

  function getRandomInt(min, max) {
    let id = Math.floor(Math.random() * (max - min + 1)) + min;
    while (id === prev_Num || selectedIds.includes(id) || exceptList.includes(id)) {
      prev_Num = id;
      id = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return id;
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

 function randomList(start, end, step){ 
    let list = [];
    for (let i = start; i<=end; i+=step){
     list.push(getRandomInt(1, totalIds))
    }
    return list
  }
  onMount(()=>{
    name.update(currentNames => {
            
            currentNames = [];
   return currentNames; // trả về mảng đã được cập nhật
 });
  })
  async function highlightRandomIds() {
    
    name.update(currentNames => {
            
             currentNames[0] = "Lì Xì BI_AN";
    return currentNames; // trả về mảng đã được cập nhật
  });
    let k = 1;
    // Đảm bảo chỉ chọn tối đa 5 ô

    while (k < 5) {
      let element;
    
      // Thực hiện hiệu ứng nhấp nháy
      let realList = randomList(50,300,10)
      console.log(realList)
      let longth = realList.length
      for (let i = 0; i < longth; i++) { 
        // Bỏ qua nếu ô trống

        element = document.getElementById(realList[i]);
        if (i<longth-1){
          // Log the element and current speed
          element.classList.add("highlight"); // Add highlight class
          console.log("Element after adding highlight:", element);

          // Play sound if desired
          aupick.currentTime = 0;
          aupick.play();

          await sleep((i === longth-2) ? 1000: 50 * Math.log(i + 1));
          element.classList.remove("highlight"); // Remove highlight class after sleep
        } else {
          selectedIds.push(realList[i]); // Thêm ID vào tập hợp 
          name.update(currentNames => {
            console.log(element.textContent)
             currentNames[k] = element.textContent;
    return currentNames; // trả về mảng đã được cập nhật
  });

  console.log($name)
          element.classList.add("choose");
          console.log(selectedIds)
          if (element.textContent == "👻"){
              ghostAudio.currentTime = 0;
              ghostAudio.play();
          } else {
            correctAudio.currentTime = 0;
          correctAudio.play();
          }
          await sleep(1000);
        console.log("highchoose added:", element);
        }
      }
      
  
      k++;
    }

    setTimeout(()=>{
      $step = "2"
    },1000)
  }
  
  function clearHighlight(){
    $name = []
    for (let i of selectedIds) {
      console.log(i)
        document.getElementById(i).classList.remove("choose")
    }
  }

  $: {
    console.log('chage')
    
  if ($click) {
    console.log("Randomizing...");
    highlightRandomIds(); // Thực hiện chức năng khi $click = true
  } else {
    console.log("Removing...");
    clearHighlight(); // Thực hiện chức năng khi $click = false
  }
}
  
  
 
</script>

<div id = "container" class="animate__animated animate__flipInX">
  <div class="title">Lì Xì Toán Học</div>
  <table>
    <tbody>
    <tr class = "animate__animated animate__pulse">
      <td id="1">GIA HUY</td>
      <td id="2">PHÁT</td>
      <td id="3">LƯỢNG</td>
      <td id="4">ĐÔNG</td>
      <td id="5">VIỆT</td>
      <td id="6">PHÚ</td>
      <td id="7">THỊ KIM NGÂN</td>
      <td id="8">THÚY</td>
    </tr>
    <tr class = "animate__animated animate__pulse">
      <td id="9">ÚT LY</td>
      <td id="10">VÂN ANH</td>
      <td id="11">HOÀNG YẾN NHI</td>
      <td id="12">👻</td>
      <td id="13">THỊ YẾN NHI</td>
      <td id="14">THẢO</td>
      <td id="15">TIÊN</td>
      <td id="16">TUYẾT VY</td>
    </tr>
    <tr class = "animate__animated animate__pulse">
      <td id="17">HẠNH NGUYÊN</td>
      <td id="18">HOÀNG NGÂN</td>
      <td id="19">HẰNG HÀ</td>
      <td id="20">MINH KHUÊ</td>
      <td id="21">CÔ THỦY</td>
      <td id="22">MỸ LY</td>
      <td id="23">TRINH</td>
      <td id="24">TRÍ</td>
    </tr>
    <tr class = "animate__animated animate__pulse">
      <td id="25">ÁNH NGUYỆT</td>
      <td id="26">👻</td>
      <td id="27">ANH THƯ</td>
      <td id="28">KIỀU</td>
      <td id="29">HƯƠNG</td>
      <td id="30">ÁI VY</td>
      <td id="31">TƯỜNG VY</td>
      <td id="32">TÂY</td>
    </tr>
    <tr class = "animate__animated animate__pulse">
      <td id="33">KIM NGÂN</td>
      <td id="34">QUÂN</td>
      <td id="35">SANG</td>
      <td id="36">TRÀ MY</td>
      <td id="37">HỒNG MAI</td>
      <td id="38">NHIÊN VY</td>
      <td id="39">HÀ MY</td>
      <td id="40">HOÀNG VŨ</td>
    </tr>
    <tr class = "animate__animated animate__pulse">
      <td id="41">THUẬN</td>
      <td id="42">👻</td>
      <td id="43">HIẾU</td>
      <td id="44">👻</td>
      <td id="45">TÚ</td>
      <td id="46">👻</td>
      <td id="47">LỘC</td>
      <td id="48">NHẬT HUY</td>
    </tr>
  </tbody>
  </table>
</div>

<style>
  .animate__pulse{                                                        
    animation-delay: 1.5s;
    --animate-duration: 0.5s;
  }
  .animate__flipInX{
    --animate-duration: 1.5s; /* Chỉ định thời gian */

  
  }
  :global(.highlight) {
    box-shadow: 0 0 15px #d9534f; /* Tăng đổ bóng */
    background-color: #FA8D40 !important; /* Nền màu đỏ nhạt */ /* Hiệu ứng chuyển đổi mượt */
  }

  :global(.choose) {
  background-color: #dc392f !important;
  color: #fff; /* Đổi màu chữ nếu cần */
  font-weight: bold;
  transition: background-color 0.3s ease; /* Hiệu ứng mượt */
}
  #container {
    overflow:hidden;
    background-color: #feeedf;
    padding: 2vw;
    border-radius: 2em;
    width: 76vw;
    margin: 1em;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  .title {
    color: #89251b;
    font-size: 2em;
    margin-bottom: 20px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  td {
   
    padding: 1em;
    text-align: center;
    font-size: 1em;
    background-color: #feeedf;
    transition: background-color 0.3s;
  }



</style>
