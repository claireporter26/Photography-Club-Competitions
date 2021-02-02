
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



function hamburgerToggle(x) {
  x.classList.toggle("change");
}

// function alert() {
//   console.log("alert is working")
//   // console.log(x)
//   // x.innerHTML = `Already Entered`
// }
function hello(){
  enterBtnComp.forEach(function(compbtn){
    // compbtn.innerHTML = `already entered`
    // if (competitionsEntered.contains(compbtn.id)){
    //   console.log("yay")
    // }
    console.log(compbtn)
    console.log(competitionsEntered)
    
    if(competitionsEntered.includes(compbtn.id)){
      compbtn.innerHTML =  `Already Entered`
      compbtn.style.pointerEvents = "none"
    } else {
      console.log("not included")
    }
    
  
  })

  
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
  competitionsEntered.push("christmas");
  // console.log(competitionsEntered)
  alert("Congratulations, your votes have been submitted.")

  // enterBtnChristmasComp.style.pointerEvents = "none";
  // enterBtnChristmasComp.innerHTML = `Already Entered`;
  // enterBtnChristmasComp.classList.add("testing");

  
  
}

