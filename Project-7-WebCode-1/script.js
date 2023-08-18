async function getBreweryData(){
try {
  const URL = "https://api.openbrewerydb.org/v1/breweries";
  const response = await fetch(URL);
  const result = await response.json();
  var BreweryData =  document.getElementsByClassName("container container-card")[0];
  result.forEach(element => {
    let data = document.createElement("div");
    data.innerHTML = `<div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-name">${element.name}</h5>
      <h6 class="card-type mb-2">${element.brewery_type}</h6>
      <p class="card-address">${element.address_1.city.state_province.postal_code.country}
      </p>
      <p class="card-phoneNo">${element.phone}
      </p>
      <a href="${element.website_url}" class="card-link">website/a>
    </div>
  </div>`;
    BreweryData.appendChild(data);
  });
} catch (error) {
  console.log("Error", error);
}
}
getBreweryData();
