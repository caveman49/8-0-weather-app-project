document.querySelector(".display form").addEventListener("submit", (event) => {
    event.preventDefault();
    const city = event.target.search.value;
    fetch(`https://wttr.in/${city}?format=j1`)
      .then((response) => response.json())
      .then((weather) => {
        //current information container
        const area = weather.nearest_area[0].areaName[0].value;
        const region = weather.nearest_area[0].region[0].value;
        const country = weather.nearest_area[0].country[0].value;
        const currentlyFeelsLikeF = weather.current_condition[0].FeelsLikeF;
  
        const h2 = document.querySelector("h2");
        h2.textContent = area;
        const areaSpan = document.querySelector("#areaP .bold");
        const areaValue = document.querySelector("#area");
        areaSpan.textContent = "Area: ";
        areaValue.textContent = area;
        const regionSpan = document.querySelector("#regionP .bold");
        const regionValue = document.querySelector("#region");
        regionSpan.textContent = "Region: ";
        regionValue.textContent = region;
        const countrySpan = document.querySelector("#countryP .bold");
        const countryValue = document.querySelector("#country");
        countrySpan.textContent = "Country: ";
        countryValue.textContent = country;
        const feelsLikeSpan = document.querySelector("#feelsP .bold");
        const feelsLikeValue = document.querySelector("#feels");
        feelsLikeSpan.textContent = "Currently: ";
        feelsLikeValue.textContent = `Feels like ${currentlyFeelsLikeF}°F`;
  
        // console.log(weather);
      })
      .catch((error) => {
        console.log(error);
      });
  });