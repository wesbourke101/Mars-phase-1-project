// https://github.com/chrisccerami/mars-photo-api
// an edit to check my branch
let dateInput =document.querySelector('#date').value
const imgContainer = document.getElementsByClassName('imgContainer')

let date ="2015-11-03"
const calendarFormLocation = document.querySelector('#calendarDate')

fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&earth_date=${dateInput}`)
.then((data) => data.json())
.then((rovers) => getPicOfRover(rovers))


//do we need this
function getPicOfRover(rovers) {
    const imgLocation = document.querySelector('.img')
    imgLocation.src = rovers.photos[0].img_src
}
calendarFormLocation.addEventListener('input', callBackForm)

function callBackForm(event) {
    event.preventDefault();
    //get the values
    dateInput =document.querySelector('#date').value
    console.log(event.target.value)
    return dateInput
    //date = dateInput
    //format
    //submit user input into date value
}