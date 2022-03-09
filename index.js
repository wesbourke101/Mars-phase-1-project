// // https://github.com/chrisccerami/mars-photo-api
// ////////////////////Curiosity///////////////////////
// let curiosityDateLocation = document.querySelector('#curiosityDate')
// let curiosityImgLocation = document.querySelector(`#curiosityImg`)
// let curiositySelectionLocation = document.querySelector("#curiosityID").textContent
// let curiosityCameraSelection = document.querySelector("#curiosityCameraSelection")

// let setCuriosityRover = curiositySelectionLocation
// let setCuriosityDate = curiosityDateLocation.value
// let setCuriosityCamera = curiosityCameraSelection.value

// curiosityDateLocation.addEventListener('input', (e) => {
//     e.preventDefault()
//     setCuriosityDate = curiosityDateLocation.value
//     requestCuriosityView()
// })

// curiosityCameraSelection.addEventListener('change', (e) => {
//     e.preventDefault()
//     setCuriosityCamera = curiosityCameraSelection.value
//     requestCuriosityView()
// })

// function requestCuriosityView () {
//     fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${setCuriosityRover}/photos?api_key=JHdB5Rdk7d8gcc7HSTXEAjo3P7d2dMNk44p6HVfu&earth_date=${setCuriosityDate}&camera=${setCuriosityCamera}`)
//     .then((data) => data.json())
    // .then((dataPic) => {
    //     if (dataPic.photos.length > 0) {
    //         curiosityImgLocation.src = dataPic.photos[0].img_src
    //     } else {
    //         curiosityImgLocation.src = "https://www.wired.com/images_blogs/wiredscience/2012/08/curiosoitycameras2.jpg"
            
    //     }
    // }) 
// }

// ////////////////////Spirit/////////////////////////

// let spiritDateLocation = document.querySelector('#spiritDate')
// let spiritImgLocation = document.querySelector(`#spiritImg`)
// let spiritSelectionLocation = document.querySelector("#spiritID").textContent
// let spiritCameraSelection = document.querySelector("#spiritCameraSelection")

// let setSpiritRover = spiritSelectionLocation
// let setSpiritDate = spiritDateLocation.value
// let setSpiritCamera = spiritCameraSelection.value

// spiritDateLocation.addEventListener('change', (e) => {
//     e.preventDefault()
//     setSpiritDate = spiritDateLocation.value
//     requestSpiritView()
// })

// spiritCameraSelection.addEventListener('change', (e) => {
//     e.preventDefault()
//     setSpiritCamera = spiritCameraSelection.value
//     requestSpiritView()
// })

// function requestSpiritView () {
//     fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${setSpiritRover}/photos?api_key=JHdB5Rdk7d8gcc7HSTXEAjo3P7d2dMNk44p6HVfu&earth_date=${setSpiritDate}&camera=${setSpiritCamera}`)
//     .then((data1) => data1.json())
//     .then((dataPic1) => {
//        if (dataPic1.photos.length > 0) {
//             spiritImgLocation.src = dataPic1.photos[0].img_src
//         } else {
//             spiritImgLocation.src = "https://mars.nasa.gov/system/resources/detail_files/8896_mer-instruments-diagram-full2.png"
            
//         }
//     }) 
// }

document.addEventListener("DOMContentLoaded", function(){
    const marsRoverContainer = document.querySelector('.roverContainer')
    const mars_rovers = ['curiosity', 'perseverance', 'opportunity', 'spirit'];
    // create default card
        //add eventlisterns to cards
        //add all ablities the card will need
    mars_rovers.forEach(rover => {
        const cameraRoverArray =[['FHAZ', 'RHAZ', 'NAVCAM'],['NAVCAM_LEFT', 'NAVCAM_RIGHT', 'MCZ_LEFT', 'MCZ_RIGHT'],['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM'], ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM']]
        
        const roverDiv = document.createElement('div')
        roverDiv.className = `rover-class`
        roverDiv.id = `rover-${rover}-id`
        
        const roverH2 = document.createElement('h2')
        roverH2.id =`${rover}-h2`
        roverH2.textContent = `${rover}` //need to uppercase 1st letter

        ///////////////////////////////////
        const roverForm = document.createElement('form')
        roverForm.id = `${rover}-form`
        roverForm.className = `form`
        const roverFormDateInput = document.createElement('input')
        roverFormDateInput.id =`${rover}-date`
        roverFormDateInput.type ="date"
        roverFormDateInput.className ="dateInput"
        ///////////////////////////////////
        const roverCameraSelect = document.createElement('select')
        roverCameraSelect.id = `${rover}-cameraSelect`
        roverCameraSelect.className =`cameraSelection`
        if (rover === "curiosity"){
            for(let camera of cameraRoverArray[0]) {
                const roverOption = document.createElement('option')
                roverOption.value = camera
                roverOption.textContent =camera
                roverCameraSelect.append(roverOption)
            }
        } else if (rover === "perseverance") {
            for(let camera of cameraRoverArray[1]) {
                const roverOption = document.createElement('option')
                roverOption.value = camera
                roverOption.textContent =camera
                roverCameraSelect.append(roverOption)
            }           
        } else if (rover === "opportunity") {
            for(let camera of cameraRoverArray[2]) {
                const roverOption = document.createElement('option')
                roverOption.value = camera
                roverOption.textContent =camera
                roverCameraSelect.append(roverOption)
            }
        } else if (rover === "spirit") {
            for(let camera of cameraRoverArray[3]) {
                const roverOption = document.createElement('option')
                roverOption.value = camera
                roverOption.textContent =camera
                roverCameraSelect.append(roverOption)
            }
        }
        console.log(roverH2)
        ///////////////////////////////////
        const formSubmitBTN = document.createElement('button')
        formSubmitBTN.className =`submitBTN`
        formSubmitBTN.textContent = "Submit"
        formSubmitBTN.addEventListener("click", function (e, rover) {
            e.preventDefault()
            console.log('button eventlistener')
            const webImgLocation = document.querySelector(`#${rover}Img`)
            const RoverLocation = document.querySelector(`#${rover}-h2`).innerText
            console.log(RoverLocation)
            const roverDate = document.querySelector(`#${rover}-date`)
            const cameraLocation = document.querySelector(`${rover}-cameraSelect`)
            let setRover = RoverLocation
            let setDate = roverDate.value
            let setCamera = cameraLocation.value
            

            fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${setRover}/photos?api_key=JHdB5Rdk7d8gcc7HSTXEAjo3P7d2dMNk44p6HVfu&earth_date=${setDate}&camera=${setCamera}`)
            .then((data) => data.json())
            .then((dataPic) => {
                if (dataPic.photos.length > 0) {
                    webImgLocation.src = dataPic.photos[0].img_src
                } else {
                    webImgLocation.src = "https://www.wired.com/images_blogs/wiredscience/2012/08/curiosoitycameras2.jpg"
                }
            }) 
            roverForm.reset()
        })
        roverForm.append(roverFormDateInput, roverCameraSelect, formSubmitBTN)
        ///////////////////////////////////
        const imgLocation = document.createElement('img')
        imgLocation.className ='img'
        imgLocation.id =`${rover}Img`
        imgLocation.src = 'https://spaceplace.nasa.gov/mars-rovers/en/mars-rovers_metal-plate.en.jpg'

        const paragraphTag = document.createElement('p')
        paragraphTag.className ="paragraph"
        paragraphTag.textContent = "place holder text"

        roverDiv.append(roverH2, roverForm, imgLocation, paragraphTag)
        console.log(roverDiv)
        marsRoverContainer.append(roverDiv)
    }); 
    //what rover - comes from an H2- locate this- change this
    //what day - come from form- locate this- change this
    //what camera - come from form- locate this- change this

    //fetch
    //     fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${setCuriosityRover}/photos?api_key=JHdB5Rdk7d8gcc7HSTXEAjo3P7d2dMNk44p6HVfu&earth_date=${setCuriosityDate}&camera=${setCuriosityCamera}`)
    // .then((data) => data.json())
    // .then((dataPic) => {
    //     if (dataPic.photos.length > 0) {
    //         curiosityImgLocation.src = dataPic.photos[0].img_src
    //     } else {
    //         curiosityImgLocation.src = "https://www.wired.com/images_blogs/wiredscience/2012/08/curiosoitycameras2.jpg"
            
    //     }
    // }) 

})