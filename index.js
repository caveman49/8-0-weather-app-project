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
  
        //today, tomorrow, & day after container
        const todayAverageTemp = weather.weather[0].avgtempF;
        const todayMaxTemp = weather.weather[0].maxtempF;
        const todayMinTemp = weather.weather[0].mintempF;
        const tomorrowAverageTemp = weather.weather[1].avgtempF;
        const tomorrowMaxTemp = weather.weather[1].maxtempF;
        const tomorrowMinTemp = weather.weather[1].mintempF;
        const dayAfterAverageTemp = weather.weather[2].avgtempF
        const dayAfterMaxTemp = weather.weather[2].maxtempF;
        const dayAfterMinTemp = weather.weather[2].mintempF;
  
        const today = document.querySelector("#today");
        today.textContent = "Today";
        const todayAverageSpan = document.querySelector(".todayAverageP .bold");
        const todayValue = document.querySelector("#todayAverage");
        todayAverageSpan.textContent = "Average Temperature: ";
        todayValue.textContent = `${todayAverageTemp}°F`;
        const todayMaxSpan = document.querySelector(".todayMaxP .bold");
        const todayMaxValue = document.querySelector("#todayMax");
        todayMaxSpan.textContent = "Max Temperature: ";
        todayMaxValue.textContent = `${todayMaxTemp}°F`;
        const todayMinSpan = document.querySelector(".todayMinP .bold");
        const todayMinValue = document.querySelector("#todayMin");
        todayMinSpan.textContent = "Min Temperature: ";
        todayMinValue.textContent = `${todayMinTemp}°F`;
  
        const tomorrow = document.querySelector("#tomorrow");
        tomorrow.textContent = "Tomorrow";
        const tomorrowAverageSpan = document.querySelector(".tomAverageP .bold");
        const tomorrowAverageValue = document.querySelector("#tomorrowAverage");
        tomorrowAverageSpan.textContent = "Average Temperature: ";
        tomorrowAverageValue.textContent = `${tomorrowAverageTemp}°F`;
        const tomorrowMaxSpan = document.querySelector(".tomMaxP .bold");
        const tomorrowMaxValue = document.querySelector("#tomorrowMax");
        tomorrowMaxSpan.textContent = "Max Temperature: ";
        tomorrowMaxValue.textContent = `${tomorrowMaxTemp}°F`;
        const tomorrowMinSpan = document.querySelector(".tomMinP .bold");
        const tomorrowMinValue = document.querySelector("#tomorrowMin");
        tomorrowMinSpan.textContent = "Min Temperature: ";
        tomorrowMinValue.textContent = `${tomorrowMinTemp}°F`;
  
        const dayAfter = document.querySelector("#dayAfter");
        dayAfter.textContent = "Day After";
        const afterAverageSpan = document.querySelector(".afterAverageP .bold");
        const afterAverageValue = document.querySelector("#afterAverage");
        afterAverageSpan.textContent = "Average Temperature: ";
        afterAverageValue.textContent = `${dayAfterAverageTemp}°F`;
        const afterMaxSpan = document.querySelector(".afterMaxP .bold");
        const afterMaxValue = document.querySelector("#afterMax");
        afterMaxSpan.textContent = "Max Temperature: ";
        afterMaxValue.textContent = `${dayAfterMaxTemp}°F`;
        const afterMinSpan = document.querySelector(".afterMinP .bold");
        const afterMinValue = document.querySelector("#afterMin");
        afterMinSpan.textContent = "Min Temperature: ";
        afterMinValue.textContent = `${dayAfterMinTemp}°F`;
  
        // console.log(weather);
      })
      .catch((error) => {
        console.log(error);
      });
  });