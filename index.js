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
                            webImgLocation.alt =`Image from ${setCamera} on ${rover} on ${setDate}`       
                        } else {
                            webImgLocation.src = "https://c8.alamy.com/zooms/9/f68a5370d7aa46af9d5c89f3378e9964/2a14gb4.jpg"
                            webImgLocation.alt =`Image from ${setCamera} on ${rover} on ${setDate} not found!`                             
                        }
                    }) 
                })
            roverForm.append(roverFormDateInput, roverCameraSelect, formSubmitBTN)
        ///////////////////////////////////
            const imgLocation = document.createElement('img')
                imgLocation.className ='img'
                imgLocation.id =`${rover}Img`
                imgLocation.src = 'https://spaceplace.nasa.gov/mars-rovers/en/mars-rovers_metal-plate.en.jpg'
                imgLocation.alt ="Mars Rovers sillhouette"

            const paragraphTag = document.createElement('p')
                paragraphTag.className ="paragraph"
                if (rover === "perseverance"){
                    paragraphTag.innerHTML = '<strong>Launch Date:</strong> July 30, 2020, Cape Canaveral Air Force Station, Florida <br><strong>Date Landed:</strong> Feb. 18, 2021 <br><strong>Mission Status:</strong> Active <br><strong>Mission Name:</strong> Mars 2020 <br><strong>Mission Goals:</strong> The Perseverance rover will seek signs of ancient life and collect rock and soil samples for possible return to Earth. <br><strong>Mission Duration:</strong> At least one Mars year (roughly 687 Earth days) Where Perseverance Traveled: 4.49 KM from the Jezero crater, Mars.'             
                } else if (rover === "curiosity") {
                    paragraphTag.innerHTML = '<strong>Launch Date:</strong> 26 November 2011, 15:02 UTC from Cape Canaveral <br><strong>Mission Name:</strong> Mars Science Laboratory<br><strong>Mission Goals:</strong> To contribute to the four science goals and meet its specific goal of determining Mars habitability, Mars Science Laboratory has the following science objectives.<br><strong>Where Curiosity Traveled:</strong> 27.14 km (16.86 mi) on Mars as of 9 February 2022'
                } else if (rover === "opportunity") {
                    paragraphTag.innerHTML = "<strong>Launch Date:</strong> July 8, 2003 UTC<br><strong>Date Landed:</strong> January 25, 2004<br><strong>Mission Status:</strong> Retired<br><strong>Completed:</strong> February 13, 2019<br><strong>Mission Goals:</strong> determine whether life as we know it could ever have arisen on Mar(focusing particularly on searching for ancient water) and characterizing the climate and geology of Mars.<br><strong>Where Opportunity Traveled:</strong> 45.16 km (28.06 mi) from Eagle, Meridiani Planum"
                } else if (rover === "spirit") {
                    paragraphTag.innerHTML = "<strong>Launch Date:</strong> June 10, 2003 UTC<br><strong>Date Landed:</strong> January 4, 2004 Mission Status:<br><strong>Completed:</strong> Retired, February 13, 2019<br><strong>Mission Goals:</strong> determine whether life as we know it could ever have arisen on Mars (focusing particularly on searching for ancient water) and characterizing the climate and geology of Mars.<br><strong>Where Spirit Traveled:</strong> 7.73 km (4.8 mi) from the GPS position 14.5684°S 175.472636°E"
                }



        roverDiv.append(roverH2, roverForm, imgLocation, paragraphTag)
    marsRoverContainer.append(roverDiv)
    }); 
})