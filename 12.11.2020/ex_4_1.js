/*
Napisz funkcje która jako argument przyjmie dowolne słowo (ciag znaków).
Funkcja domyslnie, jezeli nie zostanie podany ciąg w parametrze powinna przyjąć słowo
'koparka'.
Funkcja powinna zwrocic obiekt w ktorym kluczem bedzie pojedynczy znak a wartościa będzie
ilość wystąpien danego znaku

np. fn('koparka')

{
  a: 2,
  k: 2,
  o: 1,
  p: 1,
  r: 1
}
*/


const splitToObj = (word) => {
  return [...word].reduce((acc, current) => {
    acc[current] = (acc[current]  || 0) + 1;
      return acc;
  }, {})
};