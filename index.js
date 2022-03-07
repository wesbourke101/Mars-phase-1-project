// https://github.com/chrisccerami/mars-photo-api

let date = "2015-03-03"
const formLocation = document.querySelector('#date')
const imageLocation = document.querySelector('#fistImg')

function findDate () {
    formLocation.addEventListener('input', (e) => {
        e.preventDefault
        let test = formLocation.value
        console.log(test)
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=JHdB5Rdk7d8gcc7HSTXEAjo3P7d2dMNk44p6HVfu&earth_date=${test}`)
        .then((data) => data.json())
        //.then((dataPic) => console.log(dataPic.img_src))
        .then((dataPic) => {
           //console.log(dataPic.photos[0].img_src)
            imageLocation.src = dataPic.photos[0].img_src
        })
        
    })  
}
//Run all functions
findDate()