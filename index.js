// https://github.com/chrisccerami/mars-photo-api

let dateValue = document.querySelector('#curiosityDate')
let formLocation = document.querySelector('#calendarDate')
let imageLocation = document.querySelector(`#curiosityImg`)
let roverSelectionLocation = document.querySelector("#curiosityID").textContent
let cameraSelection = document.querySelector("#curiosityCameraSelection")



function findDate () {
    dateValue.addEventListener('input', (e) => {
            e.preventDefault
            let setRover = roverSelectionLocation
            let setDate = dateValue.value
            let setCamera = cameraSelection.value
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${setRover}/photos?api_key=JHdB5Rdk7d8gcc7HSTXEAjo3P7d2dMNk44p6HVfu&earth_date=${setDate}&camera=${setCamera}`)
        .then((data) => data.json())
        .then((dataPic) => {
            console.log(dataPic)
            imageLocation.src = dataPic.photos[0].img_src
        })  
        cameraSelection.addEventListener('change', (e) => {
            console.log('camera selectionValue after click:', cameraSelection.value)
        })
    })
    roverSelectionLocation.addEventListener('input', (e) => {
        console.log('you made it here')
    })  
}

findDate()
