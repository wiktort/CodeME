/*
 Mamy listę data.
 Utwórz mechanizm zakładek, gdzie nazwą zakładki będzie pole {{ title }},
 a panelem wyświetlanym przez zakładkę będzie treść w postaci
 
 Artist: {{ artist }}
 Album: {{ album }}
 Title: {{ title }}
 
 ---------------------------
 {{ liric }}
*/

//
// Variables
//
const data = [
    {
        "id": 4001,
        "title": "Spalaj się",
        "artist": "Kazik",
        "album": "Na Żywo, Ale w Studio",
        "lyric": "Płoń, płoń, nie ma litości dla tych, co czynią ohydę \nPłoń, płoń, koniec radości gdy ognie się ślizgają po ohydy wstydzie \nUważaj, tu trwa ohydy przewalanie \nPolityczne frakcje dzielą się, jednoczą\nDrewniane ławy nad rozumne rozmowy - to trupy żywe bełkoczą \nNie pytaj o bełkotu logikę \nJest celem samym w sobie, mówię poważnie \nSzmer i okrzyki dla oszustwa ludności \nW imię równości, w imię wolności\n\nPłoń, płoń, płoń parlamencie \nNiech spali cię ogień na historii zakręcie \nNiech zginą pod dachem posiadania władzy żądze\nTrupy się bawią też za twoje pieniądze \nPłoń, płoń, płoń parlamencie \nNiech spali cię ogień na historii zakręcie \nNiech zginą pod dachem posiadania władzy żądze \nTo wszystko się dzieje też za twoje pieniądze \n\nTa rozmowa trwa od wieczora do rana \nNikogo nie widać, nagle krzyk w oddali \nAlkohol tu piliśmy już przed rokiem \nBędziesz skakać, ruro, z hotelowych okien? \nGdy się przyjrzycie, znajdziecie pijanego \nLeżącego w bramie, zarzyganego \nSpójrz, on ma parlamentu dokument \nJest sługą ludu, tylko zbłądził na moment \n\nPłoń, płoń, płoń parlamencie \nNiech spali cię ogień na historii zakręcie \nNiech zginą pod dachem posiadania władzy żądze \nTrupy się bawią też za twoje pieniądze \n\nTracą już siódmą godzinę \nW jaki sposób się wzbogacić i swoją rodzinę \nJa jestem ustawodawcą i poniekąd rządzę \nRządzić chcę za coraz większe pieniądze \nJestem tu siedzący i ty mnie wybrałeś \nNawet jeśli nie głosowałeś \nI mam nadzieję, że wszystko rozumiesz \nŻe chcesz, czy nie chcesz, ale mnie utrzymujesz \n\nPłoń, płoń, płoń, parlamencie \nNiech spali cię ogień na historii zakręcie \nNiech zginą pod dachem posiadania władzy żądze \nTrupy się bawią też za moje pieniądze \n\nPłoń, płoń, nie ma litości \nDla tych, co czynią ohydę \nPłoń, płoń, koniec radości \nGdy ognie się ślizgają po ohydy wstydzie \nPłoń, płoń, to ogień z nieba \nUczyni to, co czujesz, że trzeba \nUczynić bez twojej aktywności \nPłoń, płoń ku wielkiej radości \n\nPłoń, płoń, płoń parlamencie! \nPłoń, płoń!\nPłoń, płoń, płoń parlamencie \nNiech spali cię ogień na historii zakręcie \nNiech zginą pod dachem posiadania władzy żądze \nTrupy się bawią też za twoje pieniądze"
    }, {
        "id": 424523,
        "title": "Tylko ty i ja",
        "artist": "Robert Kasprzycki",
        "album": "Niebo Do Wynajęcia",
        "lyric": "Wystarczy tylko zamknąć drzwi wyrzucić zbędny klucz,\npuścić muzykę głośniej i zapomnieć o tym głupim świecie,\na potem gdy już tylko ty i kiedy tylko ja\nbędziemy mogli razem być aż do białego dnia.\n\nRaz, dwa, trzy, pięć - mocniej obejmij mnie\ntrzy, pięć , sześć, dwa - kochaj mnie jeszcze raz.\n\nZa oknem już szarzeje świt, porannej kawy smak.\nW radiu podano \"właśnie dziś ktoś obrabował bank\"\nlecz moim bankiem jesteś ty, a twoim jestem ja\nprędzej skradnijmy z siebie więc ile się tylko da.\n\nSzczęście niestety kończy się i mija weekend nasz.\nTrzeba zwyczajny zacząć dzień, przeczekać aż się znowu zdarzy\ntaki jak ten sobotni dzień, inny niż wszystkie dni,\nkiedy spotkamy znowu się i znów zamkniemy drzwi."
    }, {
        "id": 6001,
        "title": "ZłoTo",
        "artist": "Hans Solo",
        "album": "8",
        "lyric": "Złoto to środek do celu\nZłoto to cel sam w sobie,\nZłoto nauczyło wielu,\nZłoto tez pokaże tobie,\nZłoto daje poziomym damom rozkosz,\nZłoto daje pozory władzy bożkom,\nZłoto ma moc, przyciąga jak magnes,\nZłoto jest piękne,\nZłoto jest powabne,\nZłoto sprawi, że będzie ci łatwiej,\nZłoto idiotom pobudza wyobraźnie do pragnień,\nZłoto ma moc, gdy mgła zaćmiewa umysł wściekły blask rozjaśnia noc,\nZłoto to cios, jedne serca kamienieją, inne broczą krwią (złoto, złoto, złoto)\n\nZło to błoto, w które wpadasz idąc za hołotą,\nZło to złoto, ozdobione ludzką głupotą,\nZło to posąg, do którego modląc się z ochota,\nZło to pociąg do rzeczy i ludzi, którzy błądzą\nZło to wiara, która pozwala ci podpalać,\nZło to czarna mara, którą pieścisz w nocnych koszmarach\nZło to myśl, która zamienia się w zły czyn\nZło to krzyż, którym piętnujesz inną myśl\nZło to piękno kryjące w sobie piekło\nZło to piętno przystrojone dekadencją\nZło to umysły zmieszane palcem iluzjonisty\nZło to błyszczyk, na ustach pełnych zgnilizny\nZło to tłumy sterowane jak instrument\nZło to trumny zabitych dla czyjejś fortuny\nZło to flaga, którą na tych trumnach się układa\nZło to plaga śmierci nazywanej odwaga\n\nZłoto to środek do celu\nZłoto to cel sam w sobie,\nZłoto nauczyło wielu,\nZłoto tez pokaże tobie,\nZłoto daje poziomym damom rozkosz,\nZłoto daje pozory władzy bożkom,\nZłoto ma moc, przyciąga jak magnes,\nZłoto jest piękne,\nZłoto jest powabne,\nZłoto sprawi, że będzie ci łatwiej,\nZłoto idiotom pobudza wyobraźnie do pragnień,\nZłoto ma moc, gdy mgła zaćmiewa umysł wściekły blask rozjaśnia noc,\nZłoto to cios, jedne serca kamienieją, inne broczą krwią (złoto, złoto, złoto)\nZłoto ma moc, gdy mgła zaćmiewa umysł wściekły blask rozjaśnia noc,\nZłoto to cios, jedne serca kamienieją, inne broczą krwią (złoto, złoto, złoto)\n\nZłoto /16x\n\nZło to idea, która stanowi tylko teatr,\nZło to teatr, gdy za kulisami jest afera,\nZło to państwo hołdujące kagańcom,\nZło to patrząc wzrok odwrócić, oczy zamknąć,\nZło to zawiść, której nie sposób jest nakarmić,\nZło to zabić wolną myśl nim ta zdąży zawyć,\nZło to dobro, uduszone nim urosło,\nZło to podłość wymierzona w ludzką godność,\nZło to niechęć, której przyglądasz się codziennie,\nZło to knebel, założony na sumienie,\nZło to pretekst by też być złym, bo zło jest wszędzie,\nZło to szczęście zbudowane na czyjejś biedzie,\nZło to doba, w której wyrzekłeś się dobra,\nZło to choroba, szerzona często w imię Boga,\nZło to potop zalewający nas zbyt mocno,\nZło to złoto, od wieków rozpala nas rządzą.\n\nZawsze z nim, przez nie, dlatego po to\nZawsze z nim, przez nie, dlatego po to\nZawsze z nim, przez nie, dlatego po to\nZło-to... to... to..."
    }
    ];

const div_app = document.getElementById("app");

//
// Functions 
//

const container = document.createElement("header");
container.id = "divWrapper";
const section = document.createElement("section");
section.id = "tabContent";

// create tabs
const createTabs = (data) => {
    data.forEach((item, index) => {
        container.innerHTML += `<button data-index="${index}">${item.title}</button>`
     });
};

//create sections 

const createSectionsContent = (data) => {
    section.innerHTML = `<h1>${data.artist}</h1><h2>${data.album}</h2><h3>${data.title}</h3>`
};





//
// Inits
//

document.addEventListener("DOMContentLoaded", function(){
    createTabs(data);
    div_app.appendChild(container);
    div_app.appendChild(section);
    createSectionsContent(data[0]);
});

container.addEventListener("click", function(e){
    if(e.target.dataset.index)
    createSectionsContent(data[e.target.dataset.index]);
});

