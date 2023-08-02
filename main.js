document.querySelector(".control-buttons span").addEventListener("click", function(){
    let yourName = prompt("Enter your Name:")

    if(yourName == null || yourName == "")
    {
        document.querySelector(".name span").innerHTML = "Unkown"
    }else{
        document.querySelector(".name span").innerHTML = yourName
    }

    document.querySelector('.control-buttons').remove()

    document.getElementById("startGame").play()
})

const duration = 1000

let blocksContainer = document.querySelector(".memory-game-blocks")

let blocks = Array.from(blocksContainer.children)

let orderRange = Array.from(Array(blocks.length).keys())

    shuffle(orderRange)

blocks.forEach((block,index)=>{
    block.style.order = orderRange[index]

    block.addEventListener("click",function(){
        flipback(block)
    })
})

function flipback(selectedBlock){
    selectedBlock.classList.add('is-flipped')
    let allFilppedblocks = blocks.filter(filppedBlock => filppedBlock.classList.contains('is-flipped'))

    if( allFilppedblocks.length === 2 ){
        // stop cliking function
        stopClicking()
        //check matched block function
        ckeckMatchedBlock(allFilppedblocks[0],allFilppedblocks[1])
    }
}

function stopClicking(){

    blocksContainer.classList.add('no-clicking')

    setTimeout(()=>{
        blocksContainer.classList.remove('no-clicking')
    },duration)

}

function ckeckMatchedBlock(firstBlock, secondBlock){

    let tries = document.querySelector(".tries span")

    if(firstBlock.dataset.teg === secondBlock.dataset.teg){

        firstBlock.classList.remove("is-flipped")
        secondBlock.classList.remove("is-flipped")

        firstBlock.classList.add("has-match")
        secondBlock.classList.add("has-match")

        document.getElementById("success").play()
    }else{

        tries.innerHTML  = parseInt(tries.innerHTML) + 1

        setTimeout(()=>{
            firstBlock.classList.remove("is-flipped")
            secondBlock.classList.remove("is-flipped")
        },duration)

        document.getElementById("fail").play()
    }
    if(tries.textContent > 20)
    {
        document.getElementById("gameOver").play()
        document.getElementById("fail").remove()
        setTimeout(() => {
            document.body.innerHTML += `
                <div class="game-over">
                    <span>Game Over</span>
                    <button id="tryAgin">Try again</button>
                </div>
        `
        }, 1500);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let btnTry = document.getElementById('tryAgain');
  
    if (btnTry) {
      btnTry.addEventListener('click', function() {
        location.reload();
      });
    }
  });
  
  let mediaElement = document.getElementById('myMediaElement');

  if (mediaElement && mediaElement.readyState >= 2) {
    mediaElement.play();
  }
  
function shuffle(array){

    let current = array.length , random , temp

    while( current > 0){

        random = Math.floor(Math.random() * current)

        current--

        temp = array[current]

        array[current] = array[random]

        array[random] = temp
    }
    return array
}


