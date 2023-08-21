async function getBreweryData(){
try {
  const URL = "https://api.openbrewerydb.org/v1/breweries";
  const response = await fetch(URL);
  const result = await response.json();
  printData(result);
} catch (error) {
  console.log("Error", error);
}
}
function printData(data = {}){
  renderBrewery(data);
}
function renderBrewery(data){
  const cardsArr = [];
  const breweryContainer = 
  document.getElementsByClassName("container card-container")[0];
  if (data.length > 0){
    data.forEach(element => {console.log(element);
      const breweries = `<div class="card" style="width: 18rem; height: 400px; border-radius: 40px">
      <div class="card-body">
        <h5 class="card-name">Name: ${element.name}</h5>
        <h6 class="card-type mb-2">Brewery Type: ${element.brewery_type}</h6>
        <p class="card-address">Address: ${element.address_1}
        </p>
        <p class="card-address">City: ${element.city}
        </p>
        <p class="card-address">State: ${element.state_province}
        </p>
        <p class="card-address">Zipcode: ${element.postal_code}
        </p>
        <p class="card-address">Country: ${element.country}
        </p>
        <p class="card-phoneNo">Phone No: ${element.phone}
        </p>
        <a href="${element.website_url}" class="card-link">click here for the link</a>
      </div>
    </div>`;
    cardsArr.push(breweries);
    });
  }
  breweryContainer.innerHTML = cardsArr;
}

getBreweryData();
