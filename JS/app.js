// const navToggle = document.querySelector('.nav-toggler');
// const navMain = document.querySelector('#navbarSupportedContent')

// navToggle.addEventListener('click', () => {
//     navMain.classList.toggle('nav--visible');
// })

let imageCheckbox = document.getElementById("image-checkbox");
let chosenImage;
let chosenImageTarget;
let imgBackground = document.querySelectorAll(".competitions_img-bg");
let btnChooseImg = document.querySelectorAll(".btn__img-choice");
let imgHover;
let image = document.querySelectorAll(".competition_img")
// let currentImageCheckbox;




let exampleModal = document.getElementById('imgZoomModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  chosenImage = event.relatedTarget.src;
  chosenImageTarget = event.relatedTarget;

  // currentImageCheckbox = event.imageCheckbox;
  

  
  let imageArea = exampleModal.querySelector(".modal-image")

  imageArea.src = chosenImage;
 
})
// imageCheckbox.addEventListener("click", imageCheckboxToggle())

// imageCheckbox.addEventListener("click", function(){
  
//   chosenImageTarget.parentElement.classList.toggle("selected-image")
//   console.log(chosenImageTarget)
// });

imageCheckbox.addEventListener("change", function(){
  if (this.checked) {
    chosenImageTarget.parentElement.classList.add("selected-image")
  } else {
    chosenImageTarget.parentElement.classList.remove("selected-image")
  }



  // chosenImageTarget.parentElement.classList.toggle("selected-image")
  // console.log(chosenImageTarget)
});

// imgBackground.addEventListener("onMouseOver", function(event){
//   let chooseBtn = event.target;
//   chooseBtn.btnChooseImg.style.display = "inline-block";
// });


image.forEach(function(item){
  imgHover = item;
  let imgParent = imgHover.parentElement;
  let imgBtn = imgParent.lastElementChild



  item.addEventListener("mouseover", function(){
    
    
    console.log(imgBtn.innerHTML)
    imgBtn.classList.toggle("display-toggle")
    
    
  });
})

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