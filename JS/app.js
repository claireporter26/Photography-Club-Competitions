
let chosenImage
let chosenImageTarget
let imgBackground = document.querySelectorAll(".competitions_img-bg")
let btnChooseImg = document.querySelectorAll(".btn__img-choice")
let imgHover
let image = document.querySelectorAll(".competition_img")
let imgCount = 0
let counterArea = document.querySelector(".counter")
let imgCounterSubmitBtn = document.querySelector(".btn-submit-votes")
let enterBtnComp = document.querySelectorAll(".enterbtn-comp")
let compsParsedArray
let compsEnteredArray

//update Competitions Entered from localStorage
initialCompsArray()

function initialCompsArray(){
  
  compsEnteredArray = localStorage.getItem('competitionsArray')

  if(!compsEnteredArray){
    localStorage.setItem('competitionsArray', '[]')
  }
}

function hamburgerToggle(x) {
  x.classList.toggle("change")
}

function eventListenerModal(){

  if(!imgModal){
    let imgModal = document.getElementById('imgZoomModal')
    imgModal.addEventListener('show.bs.modal', function (event) {
      chosenImage = event.relatedTarget.src;
      chosenImageTarget = event.relatedTarget;
    
      let imageArea = imgModal.querySelector(".modal-image")
    
      imageArea.src = chosenImage;
     
    })

  }

}
  

imgBackground.forEach(function(item){
  imgHover = item
  let imgBtn = imgHover.lastElementChild

  item.addEventListener("mouseover", function(){
    
    if (imgBtn.classList.contains("display-toggle") == false){
      imgBtn.classList.add("display-toggle")
    } 
    
  });

  item.addEventListener("mouseout", function(){
    
    if (imgBtn.classList.contains("display-toggle")){
      imgBtn.classList.remove("display-toggle")
    } 
    
  })

})

btnChooseImg.forEach(function(btn){
  btn.addEventListener("click", function(e){
    let button = e.target
    let buttonParent = button.parentElement

    if (button.innerHTML === "Vote" && imgCount <= 2){
      buttonParent.classList.add("selected-image")
      button.innerHTML = `Deselect`
      imgCount++
      showSubmitBtn()
    }else if(button.innerHTML === "Vote" && imgCount === 3){
      alert("You can only select a maximum of 3 images, please deselect an image to change your vote")
    }else if(button.innerHTML === "Deselect"){
      buttonParent.classList.remove("selected-image");
      button.innerHTML = `Vote`
      imgCount--
      hideSubmitBtn()
    }

    counterArea.innerHTML = `You have voted for ${imgCount}/3 images`

  })

})

function showSubmitBtn(){

  // let submitBtnId = imgCounterSubmitBtn.id;

  if (imgCount === 3){
    imgCounterSubmitBtn.style.opacity = ".9"
    imgCounterSubmitBtn.style.pointerEvents = "auto"

    imgCounterSubmitBtn.addEventListener("click", submitVotes)
  }
}

function hideSubmitBtn(){
  if (imgCount < 3){
    imgCounterSubmitBtn.style.opacity = "0"
    imgCounterSubmitBtn.style.pointerEvents = "none"

  }
}

function submitVotes(e){

  let compName = e.target.id
  
  updateCompsArray(compName)
  alert("Congratulations, your votes have been submitted.")
 
}


function updateCompsArray(compName){
  
  compsEnteredArray = localStorage.getItem("competitionsArray")

  compsParsedArray = JSON.parse(compsEnteredArray)
  compsParsedArray.push(compName)
  localStorage.setItem('competitionsArray', JSON.stringify(compsParsedArray))

}

function compPageLoad(){
  
  enterBtnComp.forEach(function(compbtn){

    compsEnteredArray = localStorage.getItem('competitionsArray')
    compsParsedArray = JSON.parse(compsEnteredArray)
    let compBtnId = compbtn.id;

    if (compsParsedArray.includes(compBtnId)){
      compbtn.innerHTML = `Already Entered`
      compbtn.style.pointerEvents = "none"
    }

  })

}


//temporary clear storage button

function clearLocalStorage(){
    window.localStorage.clear()
}


