//This JavaScript file will handle the fetching of the geolocation of the user when they use button to detect their location
const findMyArea = () => {
  const siteLocInputField = document.querySelector(".siteLoc");

  const success = (position) => {
      console.log(position);
      //Saves the latitude co-ordinates
      const latitude = position.coords.latitude;
      //Saves the longitude co-ordinates
      const longitude = position.coords.longitude;
      console.log(latitude + " " + longitude);

      const geoApiUrl =
          "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en";

      //Makes requests to the geolocation api
      fetch(geoApiUrl)
          .then((res) => res.json())
          .then((data) => {
              //The principal subdivision and principal subdivision code will be written in into the input field of the record form with an ID of nmRegionSubdiv
              document.getElementById("nmRegionSubdiv").value =
                  data.principalSubdivision + " " + data.principalSubdivisionCode;
              let caseRegion =
                  data.principalSubdivision + " " + data.principalSubdivisionCode;
              console.log(data);
              console.log(caseRegion);
          });
  };

  //This will throw an error if the user has disabled the location permission of the webpage
  const error = () => {
      siteLocInputField.textContent = "Unable to retrieve your location";
  };

  navigator.geolocation.getCurrentPosition(success, error);
};

document.querySelector(".find-geolocation").addEventListener("click", findMyArea);