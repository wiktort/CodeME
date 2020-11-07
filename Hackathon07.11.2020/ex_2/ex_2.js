/**
 * Ponizej znajduje się kolekcja.
 *
 * 1. napisz funkcje która przyjmie paramet z taka kolekcja i zwroci
 * liste wszystkich elementow gdzie cena (pole mid) jest mniejsza od 5.1
 *
 * 2. napisz funkcje, która przyjmie jako parametr liste zwrocona przez funkcje z pt1
 * i zwroci liste z odwrotna kolejnoscia czyli np [229.30, 233.94, ...]
 *
 * 3. to co zwroci funkcja z pt2 wypisz za pomoca console.table()
 */
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
  
// pt. 1
const elements = function (data){

   return data.filter(arr => {
      return  arr.mid < 5.1;
    });
    
};

// pt. 2
const reverse = function (data){
    return data.map(item=>{
        return item;
    }).reverse();
};

// pt. 3

console.table(
    reverse(
        elements(collection)
    )
);