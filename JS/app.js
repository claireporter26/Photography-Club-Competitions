// const navToggle = document.querySelector('.nav-toggler');
// const navMain = document.querySelector('#navbarSupportedContent')

// navToggle.addEventListener('click', () => {
//     navMain.classList.toggle('nav--visible');
// })


let chosenImage;
let chosenImageTarget;
let imgBackground = document.querySelectorAll(".competitions_img-bg");
let btnChooseImg = document.querySelectorAll(".btn__img-choice");
let imgHover;
let image = document.querySelectorAll(".competition_img")
let imgCount = 0;
let counterArea = document.querySelector(".counter")
let imgCounterSubmitBtn = document.querySelector(".btn-submit-votes")

// let currentImageCheckbox;




let exampleModal = document.getElementById('imgZoomModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  chosenImage = event.relatedTarget.src;
  chosenImageTarget = event.relatedTarget;

  // currentImageCheckbox = event.imageCheckbox;
  

  
  let imageArea = exampleModal.querySelector(".modal-image")

  imageArea.src = chosenImage;
 
})



// imgBackground.addEventListener("onMouseOver", function(event){
//   let chooseBtn = event.target;
//   chooseBtn.btnChooseImg.style.display = "inline-block";
// });



imgBackground.forEach(function(item){
  imgHover = item;
  // let imgParent = imgHover.parentElement;
  // let imgBtn = item.lastElementChild
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

  }
}

function hideSubmitBtn(){
  if (imgCount < 3){
    imgCounterSubmitBtn.style.opacity = "0";
    imgCounterSubmitBtn.style.pointerEvents = "none";

  }
}

imgCounterSubmitBtn.addEventListener("click", submitVotes);

function submitVotes(){
  alert("Congratulations, your votes have been submitted.")
}


// for(let i = 0; i < imgBackground.length; i++){
//   imgBackground.addEventListener("mouseover", function(){
//     console.log("mouse over")
//     // let chooseBtn = event.target;
//     // chooseBtn.btnChooseImg.style.display = "inline-block";
//   });
// }




// function imageCheckboxToggle (){
//   alert("working checkbox")
// }