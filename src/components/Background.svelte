<script>

    import { step } from "../store";

</script>


<style>
    #background{
        display: flex
;
    flex-direction: row;
    align-items: center;
    position: absolute;
    justify-content: center;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 0;
    margin: 0;
    z-index: -1;
    background-color: #FEE8D0;
    }
    .backrain{
        width: 50%;
    opacity: 0.4;
    }

    #itemdecorate{
        position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: max-content;
    display: flex
;
    flex-direction: row;
    justify-content: space-between;
    }

    #backdeco1{
        width: 15vw;
    }

    #backdeco2{
        width: 30vw;
        transform: translate(5vw);
    }
</style>
<div id = 'background'>
<img class = 'backrain' src = '../images/token.gif' alt ="token">
<img class = 'backrain' src = '../images/dolar.gif' alt ="token">
</div>

<div id = 'itemdecorate'>
<img id = 'backdeco1' src = '../images/phao.webp' alt ="token">
<img id = 'backdeco2' src = '../images/canh.webp' alt ="token" on:click ={()=>{$step = "1"}}>
</div>