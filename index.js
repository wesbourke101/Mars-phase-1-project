// https://github.com/chrisccerami/mars-photo-api
let date = "2015-03-03"
const formLocation = document.querySelector('#date')
const imageLocation = document.querySelector('#fistImg')
const roverSelectionLocation = document.querySelector('#roverSelection')

function findDate () {
    formLocation.addEventListener('input', (e) => {
        e.preventDefault
        let setRover = roverSelectionLocation.value
        let setDate = formLocation.value
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${setRover}/photos?api_key=JHdB5Rdk7d8gcc7HSTXEAjo3P7d2dMNk44p6HVfu&earth_date=${setDate}`)
        .then((data) => data.json())
        .then((dataPic) => {
            console.log(dataPic)
            imageLocation.src = dataPic.photos[0].img_src
        })
    })
    roverSelectionLocation.addEventListener('submit', (e) => {
        console.log('you made it here')
    })  
}
//Run all functions
findDate()