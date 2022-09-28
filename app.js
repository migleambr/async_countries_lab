console.log("HI!");

const getAllCountries = async () => {

    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    //console.log(jsonData);

    const countryNames = jsonData.map((country) => country.name.common);
    //console.log(countryNames);

    const countryFlags = jsonData.map((country) => country.flag);
    console.log(countryFlags);

    const countriesList = document.querySelector("ul");
    countryNames.forEach((countryName) => {
        // generate li elements for each country object
        const textContent = document.createElement("li");
        // add the name of each country to the element's textContent value
        textContent.innerText = countryName;
        // append li elements to the ul element to display a list of country names
        countriesList.appendChild(textContent);
    })

    // managed to get all flags appended to the main list, but not alongside their respective country
    for(let i = 0; i < countryFlags.length; i++) {
        const imageContent = document.createElement("li");
        imageContent.innerText = countryFlags[i];
        countriesList.appendChild(imageContent);
        console.log(imageContent);
    }

    // calculate the total population of all the countries
    const countryPopulations = jsonData.map((country) => country.population);
    // console.log(countryPopulations);
    let totalPopulation = 0;
    countryPopulations.forEach((population) => {
        totalPopulation += population;
    })
    // console.log(totalPopulation);
    
    const worldPopulation = document.querySelector("h2");
    worldPopulation.innerText = "Total Population: " + totalPopulation;
    
}

getAllCountries();