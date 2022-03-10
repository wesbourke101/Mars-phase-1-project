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
                    paragraphTag.innerHTML = '<strong>Launch Date:</strong> July 30, 2020, Cape Canaveral Air Force Station, Florida <br><strong>Date Landed:</strong> February 18, 2021 <br><strong>Mission Status:</strong> Active <br><strong>Mission Name:</strong> Mars 2020 <br><strong>Mission Goals:</strong> The Perseverance rover will seek signs of ancient life and collect rock and soil samples for possible return to Earth. <br><strong>Mission Duration:</strong> At least one Mars year (roughly 687 Earth days). In December 2012, Curiosity\'s two-year mission was extended indefinitely. <br><strong>Where Perseverance Traveled:</strong> 4.49 KM from the Jezero crater, Mars.'             
                } else if (rover === "curiosity") {
                    paragraphTag.innerHTML = '<strong>Launch Date:</strong> 26 November 2011, 15:02 UTC from Cape Canaveral <br><strong>Date Landed:</strong> August 6, 2012 <br><strong>Mission Status:</strong> Active <br><strong>Mission Name:</strong> Mars Science Laboratory<br><strong>Mission Goals:</strong> Investigation of the Martian climate and geology, assessment of whether the selected field site inside Gale has ever offered environmental conditions favorable for microbial life (including investigation of the role of water), and planetary habitability studies in preparation for human exploration.<br><strong>Where Curiosity Traveled:</strong> 27.14 km (16.86 mi) on Mars as of 9 February 2022 from Aeolis Palus inside Gale crater.'
                } else if (rover === "opportunity") {
                    paragraphTag.innerHTML = "<strong>Launch Date:</strong> July 8, 2003 <br><strong>Date Landed:</strong> January 25, 2004<br><strong>Mission Status:</strong> Retired<br><strong>Completed:</strong> February 13, 2019<br><strong>Mission Name: </strong>Mars Exploration Rover - B <br><strong>Mission Goals:</strong> Determine whether life as we know it could ever have arisen on Mars(focusing particularly on searching for ancient water) and characterizing the climate and geology of Mars.<br><strong>Mission Duration:</strong> Planned 90-sol duration of activity (slightly less than 92.5 Earth days). Opportunity was able to stay operation for 5111 sols after landing (14 years, 46 days in Earth Time)<br><strong>Where Opportunity Traveled:</strong> 45.16 km (28.06 mi) from Eagle, Meridiani Planum"

                    //launch date, landed, status, (completed), name, goals, duration, where
                } else if (rover === "spirit") {
                    paragraphTag.innerHTML = "<strong>Launch Date:</strong> June 10, 2003 UTC<br><strong>Date Landed:</strong> January 4, 2004 <br><strong>Mission Status:</strong>  Retired <br><strong>Completed:</strong>February 13, 2019 <br><strong>Mission Name:</strong> Mars Exploration Rover - A <br><strong>Mission Goals:</strong> Determine whether life as we know it could ever have arisen on Mars (focusing particularly on searching for ancient water) and characterizing the climate and geology of Mars.<br><strong>Mission Duration:</strong> lanned 90-sol duration of activity (slightly less than 92.5 Earth days). Spirit was opperational for an additional 2208 sols (2269 Earth Days).<br><strong>Where Spirit Traveled:</strong> 7.73 km (4.8 mi) from the Gusev crater."
                }



        roverDiv.append(roverH2, roverForm, imgLocation, paragraphTag)
    marsRoverContainer.append(roverDiv)
    }); 
})