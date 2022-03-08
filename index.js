// https://github.com/chrisccerami/mars-photo-api

let dateValue = document.querySelector('#curiosityDate')
let imageLocation = document.querySelector(`#curiosityImg`)
let roverSelectionLocation = document.querySelector("#curiosityID").textContent
let cameraSelection = document.querySelector("#curiosityCameraSelection")

let setRover = roverSelectionLocation
let setDate = dateValue.value
let setCamera = cameraSelection.value

dateValue.addEventListener('input', (e) => {
    e.preventDefault()
    setDate = dateValue.value
    requestRoverView()
})

cameraSelection.addEventListener('change', (e) => {
    e.preventDefault()
    setCamera = cameraSelection.value
    requestRoverView()
})

function requestRoverView () {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${setRover}/photos?api_key=JHdB5Rdk7d8gcc7HSTXEAjo3P7d2dMNk44p6HVfu&earth_date=${setDate}&camera=${setCamera}`)
    .then((data) => data.json())
    .then((dataPic) => {
        imageLocation.src = dataPic.photos[0].img_src
    }) 
}
