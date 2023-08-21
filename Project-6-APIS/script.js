const perPage = 5;
let pageNumber = 1;
let start = calcStart(pageNumber, perPage);
let end = calcEnd(pageNumber, perPage);
let result = [];

const nextbtn = document.getElementById("next");
const prevbtn = document.getElementById("prev");

nextbtn.addEventListener("click", () => {
  pageNumber += 1;
  start = calcStart(pageNumber, perPage);
  end = calcEnd(pageNumber, perPage);
  console.log(categories);
  getSlicedData(categories, start, end);
});

prevbtn.addEventListener("click", () => {
  pageNumber -= 1;
  start = calcStart(pageNumber, perPage);
  end = calcEnd(pageNumber, perPage);
  console.log(categories);
  getSlicedData(categories, start, end);
});

function calcStart(pageNumber = 0, perPage = 0){
  return (pageNumber -1) * perPage;
}

function calcEnd(pageNumber = 0, perPage = 0){
  return pageNumber * perPage;
}

function getSlicedData(data = [], start = 0, end = 0){
  renderCategoriesCard(data.slice(start, end));
}

function fetchCategoriesData() {
  const URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
  fetch(URL)
    .then((response) => response.json())
    .then((result) => {
      categories = result.categories;
      getSlicedData(categories, start, end);
    })
    .catch((error) => console.log(error));
}
function renderCategoriesCard(data) {
  console.log(data);
  const cards = [];
  data.forEach((d) => {
    cards.push(createCategoryCard(d));
  });
  populateCardContainer(cards);
}
function populateCardContainer(data = []) {
  const container = document.getElementsByClassName("card-container")[0];
  container.innerHTML = "";
  container.append(...data);
}
function createCategoryCard(data = {}) {
  const card = document.createElement("div");
  card.setAttribute("class", "categoriesCard");
  card.innerHTML = `
    <img src=${data.strCategoryThumb} />
    <div class = "category-content">    
        <h3>${data.strCategory}</h3>
        <p>${data.strCategoryDescription}</p>  
    </div>`;
  return card;
}

fetchCategoriesData();


