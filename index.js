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
    requestCuriosityView()
})

curiosityCameraSelection.addEventListener('change', (e) => {
    e.preventDefault()
    setCuriosityCamera = curiosityCameraSelection.value
    requestCuriosityView()
})

function requestCuriosityView () {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${setCuriosityRover}/photos?api_key=JHdB5Rdk7d8gcc7HSTXEAjo3P7d2dMNk44p6HVfu&earth_date=${setCuriosityDate}&camera=${setCuriosityCamera}`)
    .then((data) => data.json())
    .then((dataPic) => {
        if (dataPic.photos.length > 0) {
            curiosityImgLocation.src = dataPic.photos[0].img_src
        } else {
            curiosityImgLocation.src = "https://www.wired.com/images_blogs/wiredscience/2012/08/curiosoitycameras2.jpg"
            
        }
    }) 
}

////////////////////Spirit/////////////////////////

let spiritDateLocation = document.querySelector('#spiritDate')
let spiritImgLocation = document.querySelector(`#spiritImg`)
let spiritSelectionLocation = document.querySelector("#spiritID").textContent
let spiritCameraSelection = document.querySelector("#spiritCameraSelection")

let setSpiritRover = spiritSelectionLocation
let setSpiritDate = spiritDateLocation.value
let setSpiritCamera = spiritCameraSelection.value

spiritDateLocation.addEventListener('change', (e) => {
    e.preventDefault()
    setSpiritDate = spiritDateLocation.value
    requestSpiritView()
})

spiritCameraSelection.addEventListener('change', (e) => {
    e.preventDefault()
    setSpiritCamera = spiritCameraSelection.value
    requestSpiritView()
})

function requestSpiritView () {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${setSpiritRover}/photos?api_key=JHdB5Rdk7d8gcc7HSTXEAjo3P7d2dMNk44p6HVfu&earth_date=${setSpiritDate}&camera=${setSpiritCamera}`)
    .then((data1) => data1.json())
    .then((dataPic1) => {
       if (dataPic1.photos.length > 0) {
            spiritImgLocation.src = dataPic1.photos[0].img_src
        } else {
            spiritImgLocation.src = "https://mars.nasa.gov/system/resources/detail_files/8896_mer-instruments-diagram-full2.png"
            
        }
    }) 
}