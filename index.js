console.log('anything')

fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&earth_date=2015-11-3')
.then((data) => data.json())
.then((rovers) => getPicOfRover(rovers))

function getPicOfRover(rovers) {
    console.log('Test ', rovers)
    console.log("photos ", rovers.photos)
    console.log("1st img_src ", rovers.photos[0].img_src)
    //console.log("date ", rovers[earth_date]);

    //const imgLocation = document.querySelector('')
    const imgLocation = document.querySelector('.img')
    console.log("first img element", imgLocation)
    const imgContainer = document.getElementsByClassName('imgContainer')
    console.log("image container div", imgContainer)
    imgLocation.src = rovers.photos[0].img_src
    //imgContainer.append(imgLocation)
    console.log(imgLocation)
    /////////////

}