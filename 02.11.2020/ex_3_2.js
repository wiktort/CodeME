/*
  Napisz funkcję fn(param) ktora przyjmie jedna liczbe jako parametr.
  liczba ta bedzie stanowila domkniecie przedzialu z lewej strony
  czyli liczbe minimalna w przedziale a liczba domykajaca przedzial
  z prawej strony to liczba podana w parametrze funkcji powiekszona o 10
  czyli zostanie ustanowiony przedzial [param, param + 10];

  funkcja ma wypisac kwadrat (liczba * liczba) kazdej liczby calkowitej
  z tego przedzialu
*/

const square = function(number){
    const min = Number.isInteger(number) ? number : Math.ceil(number);

    for(let i = min; i <= number + 10; i++){
        console.log(i*i);
    };
};