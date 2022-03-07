// https://github.com/chrisccerami/mars-photo-api
// // an edit to check my branch
let date = '2015-03-03'
const formLocation = document.querySelector('#date')
const imageLocation = document.querySelector('#firstImg')

function findDate () {
    formLocation.addEventListener('input', (e) => {
        e.preventDefault
        let test = formLocation.value
        console.log("value input from calendar", test)
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=JHdB5Rdk7d8gcc7HSTXEAjo3P7d2dMNk44p6HVfu&earth_date=${test}`)
        .then((data) => data.json())
        .then((dataPic) => {
            imageLocation.src = dataPic.photos[0].img_src

        })
    })
}

findDate()




































// let dateInput =document.querySelector('#date').value
// const imgContainer = document.getElementsByClassName('imgContainer')

// let date ="2015-11-03"
// const calendarFormLocation = document.querySelector('#calendarDate')

// fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=JHdB5Rdk7d8gcc7HSTXEAjo3P7d2dMNk44p6HVfu&earth_date=${date}`)
// .then(data => data.json())
// .then((rovers) => {
//     getPicOfRover(rovers)
//     console.log("data array", rovers)
// })

// //do we need this
// function getPicOfRover(rovers) {
//     const imgLocation = document.querySelector('.img')
//     imgLocation.src = rovers.photos[0].img_src
// }
// calendarFormLocation.addEventListener('input', (event) => {
//     event.preventDefault();
//     //get the values
//     dateInput =document.querySelector('#date').value
//     console.log(dateInput)
//     return dateInput
//     //date = dateInput
//     //format
//     //submit user input into date value
// })