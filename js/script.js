let lampsContainer = document.querySelector("#lamps_container")

for (let i = 0; i < 25 ; i++) {
  let imageElement = createImageElement()
  lampsContainer.appendChild(imageElement)
  addEvents(imageElement)
}
function addEvents(element) {
  element.addEventListener('click', (event) => {
    if (event.target.classList.contains('on')) 
      brokeBulb(event.target)
  })
  
  element.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('off')) 
      turnOnBulb(event.target)
  })
  
  element.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('on')) 
      turnOffBulb(event.target)
  })

}

function turnOffBulb(element) {
  element.setAttribute('src', 'imagens/light_bulb_off.jpg')
  element.classList.replace('on', 'off')
}

function turnOnBulb(element) {
  element.setAttribute('src', 'imagens/light_bulb_on.jpg')
  element.classList.replace('off', 'on')
}
function brokeBulb(element) {
  element.setAttribute('src', 'imagens/broken_light_bulb.jpg')
  element.classList.replace('on', 'broken')
}

function createImageElement() {
  let imageElement = document.createElement('img')
  imageElement.setAttribute("src", "imagens/light_bulb_off.jpg")
  imageElement.classList.add('off')
  return imageElement
}