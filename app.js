console.log("HI!");

const getAllCountries = async () => {

    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    //console.log(jsonData);

    const countryNames = jsonData.map((country) => country.name.common);
    //console.log(countryNames);

    const countriesList = document.querySelector("ul");
    countryNames.forEach((countryName) => {
        // generate li elements for each country object
        const textContent = document.createElement("li");
        // add the name of each country to the element's textContent value
        textContent.innerText = countryName;
        // append li elements to the ul element to display a list of country names
        countriesList.appendChild(textContent);
    })

}

getAllCountries();