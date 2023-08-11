fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    country = document.getElementsByClassName("container container-card")[0];
    data.forEach(element => {
      var restcountries = document.createElement("div");
      restcountries.innerHTML = `
    <div class="row">
      <div class="col-lg-4 col-sm-12">
        <div class="card border-0" style="width: 20rem;">
           <div class="card-header">
            <div class="p-3" style="text-align: center; background-color: black; color: white;"><h1 id="title" class="text-center">${element.name.common}</h1>
            </div>
               <div class="card-body">
        <img src="${element.flags.png}" class="card-img-top" alt="...">
           <div class="card-body" style="text-align: center;">
             <div class="card-text">captial:${element.capital}</div>
               <div class="card-text">Region:${element.region}</div>
                 <div class="card-text">Country Code:${element.cca3}</div>
                 <div class="card-text"> LatAng  ${element.latlng}</div>
                  <div class="mt-3">
                    <a href="#" class="btn btn-primary">Click For Weather</a>
                </div>
             </div>
         </div>
      </div>
    </div>
  </div>
</div>`;
      country.appendChild(restcountries);
    });
  })
  .catch((error) => {
    console.log("Error", error);
  });
