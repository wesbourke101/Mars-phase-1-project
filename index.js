// https://github.com/chrisccerami/mars-photo-api
////////////////////Curiosity///////////////////////
let curiosityDateLocation = document.querySelector('#curiosityDate')
let curiosityImgLocation = document.querySelector(`#curiosityImg`)
let curiositySelectionLocation = document.querySelector("#curiosityID").textContent
let curiosityCameraSelection = document.querySelector("#curiosityCameraSelection")

let setCuriosityRover = curiositySelectionLocation
let setCuriosityDate = curiosityDateLocation.value
let setCuriosityCamera = curiosityCameraSelection.value

curiosityDateLocation.addEventListener('input', (e) => {
    e.preventDefault()
    setCuriosityDate = curiosityDateLocation.value
    requestRoverView()
})

curiosityCameraSelection.addEventListener('change', (e) => {
    e.preventDefault()
    setCuriosityCamera = curiosityCameraSelection.value
    requestRoverView()
})

function requestRoverView () {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${setCuriosityRover}/photos?api_key=JHdB5Rdk7d8gcc7HSTXEAjo3P7d2dMNk44p6HVfu&earth_date=${setCuriosityDate}&camera=${setCuriosityCamera}`)
    .then((data) => data.json())
    .then((dataPic) => {
        curiosityImgLocation.src = dataPic.photos[0].img_src
    }) 
}

////////////////////Spirit/////////////////////////

// let spiritDateLocation = document.querySelector('#spiritDate')
// let spiritImgLocation = document.querySelector(`#spiritImg`)
// let spiritSelectionLocation = document.querySelector("#spiritID").textContent
// let spiritCameraSelection = document.querySelector("#spiritCameraSelection")

// let setSpiritRover = spiritSelectionLocation
// let setSpiritDate = spiritDateLocation.value
// let setSpiritCamera = spiritCameraSelection.value

// spiritDateLocation.addEventListener('input', (e) => {
//     e.preventDefault()
//     setSpiritDate = spiritDateLocation.value
//     requestRoverView()
// })

// spiritCameraSelection.addEventListener('change', (e) => {
//     e.preventDefault()
//     setSpiritCamera = spiritCameraSelection.value
//     requestRoverView()
// })

// function requestRoverView () {
//     fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${setSpiritRover}/photos?api_key=JHdB5Rdk7d8gcc7HSTXEAjo3P7d2dMNk44p6HVfu&earth_date=${setSpiritDate}&camera=${setSpiritCamera}`)
//     .then((data) => data.json())
//     .then((dataPic) => {
//         spiritImgLocation.src = dataPic.photos[0].img_src
//     }) 
// }