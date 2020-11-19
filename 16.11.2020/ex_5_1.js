/*
  w pliku ex_5.html znajduje sie lista ul.

  Napisz funkcje ktora przyjmie dowolny element (w naszym przypadku obiekt elementu ul)
  i znajdzie w nim elementy o klasie green i wpisze za pomoca style kolor
  czcionki o wartosci #0f0 i tło o wartoci #eee.

  funkcja powinna zwrocic liste zmodyfikowanych elementow
*/

const editElementsWithClass = (selektor) => {
    const elements = [...document.querySelector(selektor).children];
    return elements.filter(item => {
        return item.classList.contains("green");
    }).map(item => {
        item.style.color = "#0f0";
        item.style.backgroundColor = "#eee";
        return item;
    });
};