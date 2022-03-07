console.log('anything')

fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&earth_date=2015-11-3')
.then((data) => data.json())
.then((rovers) => console.log(rovers))