document.addEventListener("DOMContentLoaded", function(){
    const marsRoverContainer = document.querySelector('.roverContainer')
    const mars_rovers = ['perseverance', 'curiosity', 'opportunity', 'spirit'];


    mars_rovers.forEach(rover => {
        const cameraRoverArray =[['NAVCAM_LEFT', 'NAVCAM_RIGHT', 'MCZ_LEFT', 'MCZ_RIGHT'],['FHAZ', 'RHAZ', 'NAVCAM'],['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM'], ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM']]
        
        const roverDiv = document.createElement('div')
            roverDiv.className = `rover-class`
            roverDiv.id = `rover-${rover}-id`
        
            const roverH2 = document.createElement('h2')
                roverH2.id =`${rover}-h2`
                roverH2.textContent = `${rover}`

        ///////////////////////////////////
            const roverForm = document.createElement('form')
                roverForm.id = `${rover}-form`
                roverForm.className = `form`
        ///////////////////////////////////
                const roverFormDateInput = document.createElement('input')
                    roverFormDateInput.id =`${rover}-date`
                    roverFormDateInput.type ="date"
                    roverFormDateInput.className ="dateInput"
                    if (rover === "perseverance"){
                        roverFormDateInput.min = "2021-02-18"
                    } else if (rover === "curiosity") {
                        roverFormDateInput.min = "2012-08-06"
                    } else if (rover === "opportunity") {
                        roverFormDateInput.min = "2004-01-25"
                        roverFormDateInput.max = "2018-06-10"
                    } else if (rover === "spirit") {
                        roverFormDateInput.min = "2004-01-04"
                        roverFormDateInput.max = "2010-03-22"
                    }
        ///////////////////////////////////
                const roverCameraSelect = document.createElement('select')
                    roverCameraSelect.id = `${rover}-cameraSelect`
                    roverCameraSelect.className =`cameraSelection`
                    if (rover === "perseverance"){
                        for(let camera of cameraRoverArray[0]) {
                            const roverOption = document.createElement('option')
                                roverOption.value = camera
                                roverOption.textContent =camera
                            roverCameraSelect.append(roverOption)
                        }
                    } else if (rover === "curiosity") {
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
        ///////////////////////////////////
                const formSubmitBTN = document.createElement('button')
                    formSubmitBTN.className =`submitBTN`
                    formSubmitBTN.textContent = "Submit"
                formSubmitBTN.addEventListener("click", function (e) {
                    e.preventDefault()

                    const webImgLocation = document.querySelector(`#${rover}Img`)
                    const roverDate = document.querySelector(`#${rover}-date`)
                    const cameraLocation = document.querySelector(`#${rover}-cameraSelect`)

                    let setDate = roverDate.value
                    let setCamera = cameraLocation.value
                    
                    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?api_key=JHdB5Rdk7d8gcc7HSTXEAjo3P7d2dMNk44p6HVfu&earth_date=${setDate}&camera=${setCamera}`)
                    .then((data) => data.json())
                    .then((dataPic) => {
                        if (dataPic.photos.length > 0) {
                            webImgLocation.src = dataPic.photos[0].img_src
                        } else {
                            webImgLocation.src = "https://c8.alamy.com/zooms/9/f68a5370d7aa46af9d5c89f3378e9964/2a14gb4.jpg"
                        }
                    }) 
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
    marsRoverContainer.append(roverDiv)
    }); 
})