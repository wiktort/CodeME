/*
W dokumencie index.html w elemencie div#app utwórz element div#ex-3
a w nim strukturę tabelaryczna w której pierwsza kolumne będzie stanowiła
wartość daty (effectiveDate), a drugą kolumne będzie stanowiła odpowiednio cena (mid)

czyli:

____________________________
|    Date    |    Price    |
----------------------------
| 2020-10-26 |    5.0579   |
----------------------------
...
*/

//
// Variables
//
const collection = [
    {"no":"209/A/NBP/2020","effectiveDate":"2020-10-26","mid":5.0579},
    {"no":"210/A/NBP/2020","effectiveDate":"2020-10-27","mid":5.0607},
    {"no":"211/A/NBP/2020","effectiveDate":"2020-10-28","mid":5.0998},
    {"no":"212/A/NBP/2020","effectiveDate":"2020-10-29","mid":5.1404},
    {"no":"213/A/NBP/2020","effectiveDate":"2020-10-30","mid":5.1269},
    {"no":"214/A/NBP/2020","effectiveDate":"2020-11-02","mid":5.1076},
    {"no":"215/A/NBP/2020","effectiveDate":"2020-11-03","mid":5.0760},
    {"no":"216/A/NBP/2020","effectiveDate":"2020-11-04","mid":5.0585},
    {"no":"217/A/NBP/2020","effectiveDate":"2020-11-05","mid":5.0042},
    {"no":"218/A/NBP/2020","effectiveDate":"2020-11-06","mid":5.0196}
  ];

const divApp = document.querySelector("div#app");
//
// Functions
//


const listener = (e)=>{
    // if(e.target.closest.tagName === "TR" && e.target.tagName === "TD" ){
    //     console.log(e.target.closest("tr").rowIndex)
    //    const index = e.target.closest("tr").rowIndex - 1;
       alert(`wybrana cena: ${collection[e.target.closest("tr").dataset.number]["mid"]}`);
        // alert(`wybrana cena: ${collection[e.target.parentNode.dataset.number]["mid"]}`);
    // };
};
  
const createTable = (data, element) => {

   
    const table = document.createElement("table");

    table.innerHTML = "<thead><tr><th>Date</th><th>Price</th></tr></thead>"; 
    
    const tbody = document.createElement("tbody");

    tbody.innerHTML += collection.map((item, index) => {
        return `<tr data-number="${index}"><td>${item["effectiveDate"]}</td><td>${item["mid"]}</td></tr>`; 
    }).join("");

    table.appendChild(tbody);
    element.appendChild(table);

    tbody.addEventListener("click", listener);
};




//
// Inits
//
/* document.addEventListener("DOMContentLoaded", function(){
    createTable(collection, divApp);
});
 */





 // Funkcyjne rozwiązanie Marcina

 /* 

const colls = ['Date', 'Price'];

const createTHeadCells = list => list.map(name => `<th>${name}</th>`).join('');

const createTHead = cells => `<thead><tr>${cells}</tr></thead>`;

const createTBodyRows = createTBodyCells => list => list
  .map(item => `<tr data-price="${item[1]}" data-no-go="lol">${createTBodyCells(item)}</tr>`)
  .join('');

const createTBodyCells = list => list.map(item => `<td><span>${item}</span></td>`).join('');

const createTBody = rows => `<tbody>${rows}</tbody>`;

const selector = data => data.map(({effectiveDate, mid}) => [effectiveDate, mid]);

document.addEventListener('DOMContentLoaded', function () {
  const appElement = document.getElementById('app');

  const ex3Element = document.createElement('div');
  ex3Element.id = 'ex-3';

  const table = document.createElement('table');

  const prepareRows = createTBodyRows(createTBodyCells);

  table.innerHTML = createTHead(createTHeadCells(colls)) + createTBody(
    prepareRows(selector(collection))
  );

  table.tBodies[0].addEventListener('click', function (e) {
    //const index = e.target.closest('tr').rowIndex - 1;

    //alert(`Klik: ${collection[index].mid}`);

    const tr = e.target.closest('tr');
    alert(`Klik: ${tr.dataset.price}`);
  });

  ex3Element.appendChild(table);
  appElement.appendChild(ex3Element);
});




 */

