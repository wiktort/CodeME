/*
  w pliku ex_5.html znajduje sie lista ul.

  Napisz funkcje ktora przyjmie dowolny element (w naszym przypadku obiekt elementu ul)
  i znajdzie w nim elementy o atrybucie data-uid, ktorych wartosc zaczyna sie od list...
  i zmieni kolor tla tych elementow na #ccc.

  funkcja powinna zwrocic ilosc zmodyfikowanych elementow
*/

// const editElementsWithData = (selektor) => {
//     const elements = [...document.querySelector(selektor).children];
//     return elements.reduce((acc, item) => {
//         if(item.dataset.uid && item.dataset.uid.startsWith("list")) {
//             item.style.backgroundColor = "#ccc";
//             acc += 1;
//         };  
//         return acc;
//     },0);
// };

const editElementsWithData = (element) => {
    const elements = [...document.querySelectorAll(`${element.tagName} [data-uid|='list']`)];
    return elements.reduce((acc, item) => {
            item.style.backgroundColor = "#ccc";
        return acc += 1;
    },0);
};