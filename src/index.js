console.log('%c HI', 'color: firebrick')

function fetchImage(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  // .then(json => console.log(json.message))
  .then(json => renderImages(json.message))
}

function renderImages(images){
  let imageContainer = document.getElementById("dog-image-container")
  // console.log(images)
  for(let i = 0; i < images.length; i++) {
    let newImage = document.createElement("img")
    newImage.src = images[i]
    imageContainer.appendChild(newImage)
  }
  // images.forEach(image => {
  //   let newImage = document.createElement("img")
  //     newImage.src = image
  //     imageContainer.appendChild(newImage)
  // })
}

function fetchBreeds(){
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(json => renderBreeds(Object.keys(json.message)))
}

function renderBreeds(breeds){
  console.log(breeds)
  let uList = document.getElementById("dog-breeds")
  uList.querySelectorAll('*').forEach(n => n.remove());
  let dropdown = document.getElementById("breed-dropdown")
  console.log(dropdown.value)
  breeds.forEach(breed => {
    if(breed[0] == dropdown.value){
      console.log(breed[0])
      let newLi = document.createElement("li")
      newLi.innerHTML = breed
      uList.appendChild(newLi)
      newLi.addEventListener("click", function(e){
      e.target.style.color = "blue"})
    }
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchImage()
  fetchBreeds()
})
