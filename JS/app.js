
let chosenImage;
let chosenImageTarget;
let imgBackground = document.querySelectorAll(".competitions_img-bg");
let btnChooseImg = document.querySelectorAll(".btn__img-choice");
let imgHover;
let image = document.querySelectorAll(".competition_img")
let imgCount = 0;
let counterArea = document.querySelector(".counter")
let imgCounterSubmitBtn = document.querySelector(".btn-submit-votes")
let enterBtnComp = document.querySelectorAll(".enterbtn-comp");
const competitionsEntered = ["christmas"]
let compsRetrievedArray;

// updateCompsArray()
initialCompsArray()
localStorage.setItem("test", "things")

function initialCompsArray(competitionsArray){
  
  let compsEnteredArray = localStorage.getItem(competitionsArray)

compsEnteredArray = compsEnteredArray ? compsEnteredArray.split(',') : [];

localStorage.setItem('competitionsArray', JSON.stringify('compsEnteredArray'))
localStorage.setItem("test", "things")

console.log("initial update comps array working")


}
// storeCompsArray()

// function storeCompsArray(){
//   localStorage.setItem("competitionsArray", JSON.stringify('competitionsEntered'))
//   let comps = localStorage.getItem("competitionsArray")
//   compsRetrievedArray = JSON.parse(comps)
//   console.log(compsRetrievedArray)
// }

function hamburgerToggle(x) {
  x.classList.toggle("change");
}

// function alert() {
//   console.log("alert is working")
//   // console.log(x)
//   // x.innerHTML = `Already Entered`
// }


function testing(){
  console.log(competitionsEntered)
}

  // let imgModal = document.getElementById('imgZoomModal')
  // imgModal.addEventListener('show.bs.modal', function (event) {
  //   chosenImage = event.relatedTarget.src;
  //   chosenImageTarget = event.relatedTarget;
  
  //   let imageArea = exampleModal.querySelector(".modal-image")
  
  //   imageArea.src = chosenImage;
   
  // })



imgBackground.forEach(function(item){
  imgHover = item;
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
    
  });
})

btnChooseImg.forEach(function(btn){
  btn.addEventListener("click", function(e){
    let button = e.target;
    let buttonParent = button.parentElement;

    if (button.innerHTML === "Vote" && imgCount <= 2){
      buttonParent.classList.add("selected-image");
      button.innerHTML = `Deselect`;
      imgCount++;
      showSubmitBtn()
      console.log(imgCount)
    } else if (button.innerHTML === "Vote" && imgCount === 3){
      alert("You can only select a maximum of 3 images, please deselect an image to change your vote")
      console.log(imgCount) 

    } else if (button.innerHTML === "Deselect"){
      buttonParent.classList.remove("selected-image");
      button.innerHTML = `Vote`;
      imgCount--;
      hideSubmitBtn()
      console.log(imgCount)
    }

    counterArea.innerHTML = `You have voted for ${imgCount}/3 images`

  })
})

function showSubmitBtn(){
  if (imgCount === 3){
    imgCounterSubmitBtn.style.opacity = ".9";
    imgCounterSubmitBtn.style.pointerEvents = "auto";

    imgCounterSubmitBtn.addEventListener("click", submitVotes);
  }
}

function hideSubmitBtn(){
  if (imgCount < 3){
    imgCounterSubmitBtn.style.opacity = "0";
    imgCounterSubmitBtn.style.pointerEvents = "none";

  }
}




function submitVotes(){
  console.log(imgCounterSubmitBtn.id)
  // competitionsEntered.push(imgCounterSubmitBtn.id);
  updateCompsArray()
  // console.log(competitionsEntered)

  // sessionStorage.setItem("competitionsArray", JSON.stringify(competitionsEntered))
  // let comps = sessionStorage.getItem("competitionsArray")
  // compsRetrievedArray = JSON.parse(comps)
  console.log(compsRetrievedArray)
  // console.log(competitionsEntered)
  alert("Congratulations, your votes have been submitted.")
  
  // storeCompsArray()

  // enterBtnChristmasComp.style.pointerEvents = "none";
  // enterBtnChristmasComp.innerHTML = `Already Entered`;
  // enterBtnChristmasComp.classList.add("testing");

  
  
}


function updateCompsArray(competitionsArray, compsSubmitBtnId){
  compsSubmitBtnId = imgCounterSubmitBtn.id;
  let compsEnteredArray = localStorage.getItem(competitionsArray)

compsEnteredArray = compsEnteredArray ? compsEnteredArray.split(',') : [];
compsEnteredArray.push(compsSubmitBtnId)
localStorage.setItem(competitionsArray, JSON.stringify(compsEnteredArray))

console.log("update comps array working")


}

function hello(){
  console.log(competitionsEntered)
  enterBtnComp.forEach(function(compbtn){
    // compbtn.innerHTML = `already entered`
    // if (competitionsEntered.contains(compbtn.id)){
    //   console.log("yay")
    // }
    
    console.log("hello is working")
    let comps = localStorage.getItem("competitionsArray")
    console.log(comps)
    compsRetrievedArray = JSON.parse(comps)
    
    
    
    if(compsRetrievedArray.includes(compbtn.id)){
      compbtn.innerHTML =  `Already Entered`
      compbtn.style.pointerEvents = "none"
    } else {
      console.log("not included")
    }
    
  
  })

  
}

