/*
  Za pomoca funkcji przegladarki prompt i alert oraz znanych Ci mechanizmow (instrukcji)
  jezyka javascript napisz tekstowa wersje gry szubienica. Gra ma polegać na tym, ze program
  losowo wybiera słowo z kolekcji slow. Program ukrywa to słowo za pomoca znakow _ i wyswietla
  graczowi to ukryte slowo z prośbą o wpisanie litery.
  Jezeli wpisana litera istnieje w slowie, znak _ zamieniany jest na litere i wyswietlone zostanie
  slowo ukryte z odslonientymi literami ktore zostaly odgadniete + prosba o wpisanie kolejnej litery.
  Jezeli odgadniete zostanie slowo konczy sie gra z komunikatem (alert) zwyciestwo.

  Proponuje dodatkowo zrobic mechanizm, ktory bedzie zliczal bledne proby - ilosc blednych prob niech okresla liczba, ktora bedzie okreslona przez ilosc znakow w wybranym slowie. Niech to bedzie liczba calkowita stanowiaca 1/4 dlugosci lancucha zgadywanego slowa. Jezeli limit ten zostanie osiagniety konczy sie gra (GAME OVER)
*/

const app = document.querySelector("#app");
const lifes =  document.querySelector("#lifes");

//obiekt zawierający baze słów i funckcję odpowiadająca za wylosowanie jednego z nich
const randomWord = {

    wordBase: ["domek", "kaczka", "latawiec", "poduszka", "choinka", "krzesło"],

    word: [],

    lifes: 0,

    getWord(){
        return this.wordBase[Math.floor(Math.random()*this.wordBase.length)];
    },

};

//utworzenie elementu p i input, dodanie atrybutów i umieszczenie ich w DOM
const wordBox = document.createElement("p");
const input = document.createElement("input");
input.setAttribute("placeholder", "Podaj literę");
input.setAttribute("maxlength", 1);
app.appendChild(wordBox);
app.appendChild(input);

const insertWord = () =>{
    
    // przypisanie tablicy z wysolowanym słowem i przypisanie liczby żyć oraz jej wyświetlenie
    randomWord.word = Array.prototype.slice.call(randomWord.getWord());
    randomWord.lifes = Math.round(randomWord.word.length/4);
    lifes.textContent = randomWord.lifes;

    //wyczyszcznie dotychczasowej wartości p i input oraz wstawienie podkreślników zamiast liter wylosowanego słowa
    wordBox.innerHTML = "";
    input.value = "";
    randomWord.word.forEach((letter, index)=> { wordBox.innerHTML += `<span id="letter${index}">_ </span>`; });

};
insertWord();

//sprawdzanie litery i ewentualne jej wstawienie zamiast odpowiedniego podkreślnika
const letterCheck = function(element){
        // stworzenie tablicy z indexami liter
        const index = this.word.reduce((acc, letter, index)=>{
            letter === element.value 
               ? acc.push(index)
               : "brak";
            return acc;
        }, []);
        //jeżeli podana litera jest w słowie to wstaw ją zamiast podkreślinika i wyczyść input
        if(index.length > 0){
            index.forEach((letterIndex) => {
                document.querySelector(`#letter${letterIndex}`).textContent = this.word[letterIndex];
            });
            element.value = "";
            // jeżeli wszystkie litery zostały podane to wyświetl alert
            wordBox.textContent === this.word.join("") ? alert("Zwycięstwo!!!") : 0;
        } else {
            //w przypadku podania błędnej litery zmiejsz ilość żyć, wyświetl ją i wyczyść input
            this.lifes -= 1;
            lifes.textContent = this.lifes;
            element.value = "";
            //jeżeli życia zostały wyczerpane to wyświetl alert i odśwież grę
            if(randomWord.lifes <= 0){
                insertWord(); 
                alert("Game Over");
            } ;  
        };
    };


//obsługa eventów
const buttons = (e) => {
    if(e.target.id === "check"){
        letterCheck.call(randomWord, input)
    };

    if(e.target.id === "again"){
        insertWord();
    };
};

document.addEventListener("click", buttons);