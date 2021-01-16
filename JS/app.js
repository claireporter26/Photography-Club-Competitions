// const navToggle = document.querySelector('.nav-toggler');
// const navMain = document.querySelector('#navbarSupportedContent')

// navToggle.addEventListener('click', () => {
//     navMain.classList.toggle('nav--visible');
// })

var exampleModal = document.getElementById('imgZoomModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  
  var chosenImage = event.relatedTarget.src;
//   console.log(chosenImage)
  // Extract info from data-bs-* attributes
//   var largeImage = chosenImage.getAttribute('data-bs-whatever');
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  
//   var imageArea = exampleModal.querySelector(".modal-image")
  var imageArea = exampleModal.querySelector(".modal-image")

  imageArea.src = chosenImage;
 
  
  
})