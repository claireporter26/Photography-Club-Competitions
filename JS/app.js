// const navToggle = document.querySelector('.nav-toggler');
// const navMain = document.querySelector('#navbarSupportedContent')

// navToggle.addEventListener('click', () => {
//     navMain.classList.toggle('nav--visible');
// })

let imageCheckbox = document.getElementById("image-checkbox");



let exampleModal = document.getElementById('imgZoomModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  let chosenImage = event.relatedTarget.src;
  let imageArea = exampleModal.querySelector(".modal-image")

  imageArea.src = chosenImage;
 
})

imageCheckbox.addEventListener("click", function(){
  alert("working checkbox")

});

// function imageCheckboxToggle(){
//   alert("working checkbox")
// }