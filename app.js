
  fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Egypt?unitGroup=metric&include=current&key=GJ8G92AAJWEUZQ3HAA26UL5Z9&contentType=json', {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => response.text())
    .then(data => {
      let show = document.querySelector(".temp");
      let humd = document.querySelector(".wind")
      let cond = document.querySelector(".rain")
      let my = JSON.parse(data);
      console.log(my.currentConditions)
    show.textContent =my.currentConditions.temp
    humd.textContent = `${my.currentConditions.windspeed} Km/H`;
    cond.textContent = my.currentConditions.conditions;
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });