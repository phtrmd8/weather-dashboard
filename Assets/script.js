let searchCity;
//function to search for city when button is clicked
document.getElementById('submit').addEventListener('click', event => {
    //prevents page from refreshing when button is clicked
    event.preventDefault()
    searchCity = document.getElementById('searchCity').value

    //if statement to check if something was typed into input field
    if (document.getElementById('searchCity').value.length > 1) {
        //fetch request
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=47608707e05f67ebaf784557838d1ce2&units=imperial`)
            .then(r => r.json())
            .then(data => {
                //console logging the name of the city to see if fetch request is working 
                console.log(data)

                let latitude = data.coord.lat
                let longitude = data.coord.lon
                console.log(latitude, longitude)

              fetch(`https://api.openweathermap.org/data/2.5/uvi?appid=47608707e05f67ebaf784557838d1ce2&lat=${data.coord.lat}&lon=${data.coord.lon}`)
                    .then(r => r.json())
                    .then(uvIndex => {
                        console.log('uvIndex')

                        let backgroundColor = ' '
                        if (uvIndex.value <= 2) {
                            backgroundColor = "green"
                            console.log("green")
                        } else if (uvIndex.value <= 5) {
                            backgroundColor = "yellow"
                            console.log("yellow")
                        } else if (uvIndex.value <= 7) {
                            backgroundColor = "orange"
                            console.log("orange")
                        } else if (uvIndex.value <= 10) {
                            backgroundColor = "red"
                            console.log("red")
                        } else {
                            backgroundColor = "purple"
                            console.log("purple")
                        }

                      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=47608707e05f67ebaf784557838d1ce2&units=imperial`)
                            .then(r => r.json())
                            .then(forecast => {
                                //console logging string to check if fetch request worked
                                console.log('forecast')

                                //creating a div to display current info for city 
                                let presentDay = Date()
                                let cityCurrent = document.createElement('div')
                                cityCurrent.className = 'card text-white bg-warning mb-3 w-75'
                                cityCurrent.style = 'display: inline-block; max-width: 50rem;'
                                cityCurrent.innerHTML = `
              <div> 
              <div class="card-header">
                <h5 class="card-title">
                  ${data.name}
                  <br>
                  ${presentDay}
                </h5>
             </div>
              <div class="card-body">
                      <p="card-text">
                         <span><img src=http://openweathermap.org/img/w/${data.weather[0].icon}.png>
                         </span>
                      </p>
                      <p ="card-text">
                        Temperature: ${data.main.temp}\xB0 F
                      </p>
                      <p ="card-text">
                        Humidity:  ${data.main.humidity}%
                      </p>
                      <p ="card-text">
                        Windspeed: ${data.wind.speed} mph
                      </p>
                      <p id=''uvColor" style="background-color: ${backgroundColor}">
                        UV Index: ${uvIndex.value}
                      </p>
              </div >
            `

                                //function to clear out currentCity div
                                document.getElementById('currentCity').innerHTML = ' '
                                //function to append the cityCurrent into the currentCity div
                                document.getElementById('currentCity').append(cityCurrent)

                                let nextDay = document.createElement('div')
                                nextDay.className = 'card text-white bg-primary mb-3'
                                nextDay.style = style = 'max-width: 18rem; display: inline-block;'
                                nextDay.innerHTML = `
            <div class="card-header">
            <h5 class="card-title">
              ${forecast.list[0].dt_txt}
            </h5>
             </div >
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li>
                  <span><img src=http://openweathermap.org/img/w/${forecast.list[0].weather[0].icon}.png></span>
                </li>
                <li>
                  Temperature: ${forecast.list[0].main.temp}\xB0 F
                </li>
                <li>
                  Humidity: ${forecast.list[0].main.humidity}%
                </li>
              </ul>
            </div>
            `
                                //function to clear out dayOne div
                                document.getElementById('dayOne').innerHTML = ' '
                                // function to append the nextDay into the dayOne div
                                document.getElementById('dayOne').append(nextDay)

                                let secondDay = document.createElement('div')
                                secondDay.className = 'card text-white bg-primary mb-3'
                                secondDay.style = style = 'max-width: 18rem; display: inline-block;'
                                secondDay.innerHTML = `
            <div class="card-header">
            <h5 class="card-title">
              ${forecast.list[11].dt_txt}
            </h5>
             </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li>
                  <span><img src=http://openweathermap.org/img/w/${forecast.list[8].weather[0].icon}.png></span>
                </li>
                <li>
                  Temperature: ${forecast.list[8].main.temp}\xB0 F
                </li>
                <li>
                  Humidity: ${forecast.list[8].main.humidity}%
                </li>
              </ul>
            </div>
            `
                                //function to clear out dayTwo div
                                document.getElementById('dayTwo').innerHTML = ' '
                                // function to append the secondDay forecast into the dayTwo div
                                document.getElementById('dayTwo').append(secondDay)

                                let thirdDay = document.createElement('div')
                                thirdDay.className = 'card text-white bg-primary mb-3'
                                thirdDay.style = style = 'max-width: 18rem; display: inline-block;'
                                thirdDay.innerHTML = `
            <div class="card-header">
            <h5 class="card-title">
              ${forecast.list[16].dt_txt}
            </h5>
             </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li>
                  <span><img src=http://openweathermap.org/img/w/${forecast.list[16].weather[0].icon}.png></span>
                </li>
                <li>
                  Temperature: ${forecast.list[16].main.temp}\xB0 F
                </li>
                <li>
                Humidity: ${forecast.list[16].main.humidity}%
                </li>
              </ul>
            </div>
            `

                                //function to clear out dayThree div
                                document.getElementById('dayThree').innerHTML = ' '
                                // function to append the thirdDay forecast into the dayThree div
                                document.getElementById('dayThree').append(thirdDay)

                                let fourthDay = document.createElement('div')
                                fourthDay.className = 'card text-white bg-primary mb-3'
                                fourthDay.style = style = 'max-width: 18rem; display: inline-block;'
                                fourthDay.innerHTML = `
            <div class="card-header">
            <h5 class="card-title">
              ${forecast.list[24].dt_txt}
            </h5>
             </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li>
                  <span><img src=http://openweathermap.org/img/w/${forecast.list[24].weather[0].icon}.png></span>
                </li>
                <li>
                  Temperature: ${forecast.list[24].main.temp}\xB0 F
                </li>
                <li>
                  Humidity: ${forecast.list[24].main.humidity}%
                </li>
              </ul>
            </div>
            `
                                //function to clear out dayFour div
                                document.getElementById('dayFour').innerHTML = ' '
                                // function to append the fourthDay forecast into the dayFour div
                                document.getElementById('dayFour').append(fourthDay)

                                let fifthDay = document.createElement('div')
                                fifthDay.className = 'card text-white bg-primary mb-3'
                                fifthDay.style = style = 'max-width: 50rem; display: inline-block;'
                                fifthDay.innerHTML = `
                <div class="card-header">
            <h5 class="card-title">
              ${forecast.list[32].dt_txt}
            </h5>
             </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li>
                  <span><img src=http://openweathermap.org/img/w/${forecast.list[32].weather[0].icon}.png></span>
                </li>
                <li>
                  Temperature: ${forecast.list[32].main.temp}\xB0 F
                </li>
                <li>
                  Humidity: ${forecast.list[32].main.humidity}%
                </li>
              </ul>
            </div>
            `

                                //function to clear out dayFive div
                                document.getElementById('dayFive').innerHTML = ' '
                                // function to append the fifthDay forecast into the div for dayFive
                                document.getElementById('dayFive').append(fifthDay)

                                //function to clear the input value for city in the city search bar
                                document.getElementById('searchCity').value = ' '
                            })

                    })
                    .catch(e => {
                        console.log(e)
                    })
                    .catch(e => {
                        console.log(e)
                    })

                    .catch(e => {
                        console.log(e)
                        alert('City not found')
                        document.getElementById('searchCity').value = ' '
                    })
            })
    }
})

//calling the function to change the color of the UV Index to correspond to its value


document.getElementById('save').addEventListener('click', () => {
    if (searchCity.length > 0) {
        let pastSearches = JSON.parse(localStorage.getItem("pastSearches"))
        if (pastSearches) {
            pastSearches.push(searchCity)
        } else {
            pastSearches = [searchCity]
        }
        localStorage.setItem('pastSearches', JSON.stringify(pastSearches))

        let getSearches = document.createElement('button')
        getSearches.className = 'btn btn-text-info'
        getSearches.style = 'display:block;'
        getSearches.textContent = `${searchCity}`
        document.getElementById('recentSearches').appendChild(getSearches)


        document.addEventListener('click', (event) => {
            if (event.target.className === 'btn btn-text-info') {
                let retrieveCity = event.target.textContent
                //fetch request
              fetch(`https://api.openweathermap.org/data/2.5/weather?q=${retrieveCity}&appid=47608707e05f67ebaf784557838d1ce2&units=imperial`)
                    .then(r => r.json())
                    .then(data => {
                        //console logging the name of the city to see if fetch request is working 
                        console.log(data)

                        let latitude = data.coord.lat
                        let longitude = data.coord.lon
                        console.log(latitude, longitude)

                      fetch(`https://api.openweathermap.org/data/2.5/uvi?appid=47608707e05f67ebaf784557838d1ce2&lat=${data.coord.lat}&lon=${data.coord.lon}`)
                            .then(r => r.json())
                            .then(uvIndex => {
                                console.log('uvIndex')

                                let backgroundColor = ' '
                                if (uvIndex.value <= 2) {
                                    backgroundColor = "green"
                                    console.log("green")
                                } else if (uvIndex.value <= 5) {
                                    backgroundColor = "yellow"
                                    console.log("yellow")
                                } else if (uvIndex.value <= 7) {
                                    backgroundColor = "orange"
                                    console.log("orange")
                                } else if (uvIndex.value <= 10) {
                                    backgroundColor = "red"
                                    console.log("red")
                                } else {
                                    backgroundColor = "purple"
                                    console.log("purple")
                                }

                              fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=47608707e05f67ebaf784557838d1ce2&units=imperial`)
                                    .then(r => r.json())
                                    .then(forecast => {
                                        //console logging string to check if fetch request worked
                                        console.log('forecast')

                                        //creating a div to display current info for city 
                                        let presentDay = Date()
                                        let cityCurrent = document.createElement('div')
                                        cityCurrent.className = 'card text-white bg-warning mb-3'
                                        cityCurrent.style = 'display: inline-block; max-width: 50rem;'
                                        cityCurrent.innerHTML = `
              <div> 
              <div class="card-header">
                <h5>
                  ${data.name}
                  <br>
                  ${presentDay}
                </h5>
             </div>
              <div class="card-body">
                      <p="card-text">
                         <span><img src=http://openweathermap.org/img/w/${data.weather[0].icon}.png></span>
                      </p>
                      <p ="card-text">
                        Temperature: ${data.main.temp}\xB0 F
                      </p>
                      <p ="card-text">
                        Humidity:  ${data.main.humidity}%
                      </p>
                      <p ="card-text">
                        Windspeed: ${data.wind.speed} mph
                      </p>
                      <p id=''uvColor" style="background-color: ${backgroundColor}">
                        UV Index: ${uvIndex.value}
                      </p>
              </div>
            `
                                        //calling the function to change the color of the UV Index to correspond to its value
                                        // colorUv()
                                        //function to clear out currentCity div
                                        document.getElementById('currentCity').innerHTML = ' '
                                        //function to append the cityCurrent into the currentCity div
                                        document.getElementById('currentCity').append(cityCurrent)

                                        let nextDay = document.createElement('div')
                                        nextDay.className = 'card text-white bg-primary mb-3'
                                        nextDay.style = style = 'max-width: 18rem; display: inline-block;'
                                        nextDay.innerHTML = `
            <div class="card-header">
            <h5 class="card-title">
              ${forecast.list[0].dt_txt}
            </h5>
             </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li>
                  <span><img src=http://openweathermap.org/img/w/${forecast.list[0].weather[0].icon}.png></span>
                </li>
                <li>
                  Temperature: ${forecast.list[0].main.temp}\xB0 F
                </li>
                <li>
                  Humidity: ${forecast.list[0].main.humidity}%
                </li>
              </ul>
            </div>
            `
                                        //function to clear out dayOne div
                                        document.getElementById('dayOne').innerHTML = ' '
                                        // function to append the nextDay into the dayOne div
                                        document.getElementById('dayOne').append(nextDay)

                                        let secondDay = document.createElement('div')
                                        secondDay.className = 'card text-white bg-primary mb-3'
                                        secondDay.style = style = 'max-width: 18rem; display: inline-block;'
                                        secondDay.innerHTML = `
            <div class="card-header">
            <h5 class="card-title">
              ${forecast.list[11].dt_txt}
            </h5>
             </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li>
                  <span><img src=http://openweathermap.org/img/w/${forecast.list[8].weather[0].icon}.png></span>
                </li>
                <li>
                  Temperature: ${forecast.list[8].main.temp}\xB0 F
                </li>
                <li>
                  Humidity: ${forecast.list[8].main.humidity}%
                </li>
              </ul>
            </div>
            `
                                        //function to clear out dayTwo div
                                        document.getElementById('dayTwo').innerHTML = ' '
                                        // function to append the secondDay forecast into the dayTwo div
                                        document.getElementById('dayTwo').append(secondDay)

                                        let thirdDay = document.createElement('div')
                                        thirdDay.className = 'card text-white bg-primary mb-3'
                                        thirdDay.style = style = 'max-width: 18rem; display: inline-block;'
                                        thirdDay.innerHTML = `
            <div class="card-header">
            <h5 class="card-title">
              ${forecast.list[16].dt_txt}
            </h5>
             </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li>
                  <span><img src=http://openweathermap.org/img/w/${forecast.list[16].weather[0].icon}.png></span>
                </li>
                <li>
                  Temperature: ${forecast.list[16].main.temp}\xB0 F
                </li>
                <li>
                Humidity: ${forecast.list[16].main.humidity}%
                </li>
              </ul>
            </div>
            `

                                        //function to clear out dayThree div
                                        document.getElementById('dayThree').innerHTML = ' '
                                        // function to append the thirdDay forecast into the dayThree div
                                        document.getElementById('dayThree').append(thirdDay)

                                        let fourthDay = document.createElement('div')
                                        fourthDay.className = 'card text-white bg-primary mb-3'
                                        fourthDay.style = style = 'max-width: 18rem; display: inline-block;'
                                        fourthDay.innerHTML = `
            <div class="card-header">
            <h5 class="card-title">
              ${forecast.list[24].dt_txt}
            </h5>
             </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li>
                  <span><img src=http://openweathermap.org/img/w/${forecast.list[24].weather[0].icon}.png></span>
                </li>
                <li>
                  Temperature: ${forecast.list[24].main.temp}\xB0 F
                </li>
                <li>
                  Humidity: ${forecast.list[24].main.humidity}%
                </li>
              </ul>
            </div>
            `
                                        //function to clear out dayFour div
                                        document.getElementById('dayFour').innerHTML = ' '
                                        // function to append the fourthDay forecast into the dayFour div
                                        document.getElementById('dayFour').append(fourthDay)

                                        let fifthDay = document.createElement('div')
                                        fifthDay.className = 'card text-white bg-primary mb-3'
                                        fifthDay.style = style = 'max-width: 50rem; display: inline-block;'
                                        fifthDay.innerHTML = `
                <div class="card-header">
            <h5 class="card-title">
              ${forecast.list[32].dt_txt}
            </h5>
             </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li>
                  <span><img src=http://openweathermap.org/img/w/${forecast.list[32].weather[0].icon}.png></span>
                </li>
                <li>
                  Temperature: ${forecast.list[32].main.temp}\xB0 F
                </li>
                <li>
                  Humidity: ${forecast.list[32].main.humidity}%
                </li>
              </ul>
            </div>
            `
                                        //function to clear out dayFive div
                                        document.getElementById('dayFive').innerHTML = ' '
                                        // function to append the fifthDay forecast into the div for dayFive
                                        document.getElementById('dayFive').append(fifthDay)

                                        //function to clear the input value for city in the city search bar
                                        document.getElementById('searchCity').value = ' '
                                    })

                            })
                            .catch(e => {
                                console.log(e)
                            })
                            .catch(e => {
                                console.log(e)
                            })

                            .catch(e => {
                                console.log(e)
                                alert('City not found')
                                document.getElementById('searchCity').value = ' '
                            })
                    })

            }
        })
    }
})