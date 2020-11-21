/*
Napisz konstruktor (VolumeButton) tworzący corową funkcjonalnosc buttona volume.
Obiekt prototypu tego konstruktora powinine zawierac wlasnoci
delta: 0,
min: 0,
max: 15,
i metodę changeVolume(volume), ktora przyjmie aktualne volume
i zwróci volume powiekszone o delte,
oraz metodę mute() ktora zwroci zawsze 0

Napisz Konstruktor (VolumeButtonUp), tak aby obiekty utworzone przez ten konstruktor tworzyly lancuch prototypowy z konstruktora VolumeButton i wywolując metodę changeVolume podnosily aktualna wartosc volume o 1, ale nie wiecej niz max okreslony
w prototypie VolumeButton.

Napisz Konstruktor (VolumeButtonDown), tak aby obiekty utworzone przez ten konstruktor tworzyly lancuch prototypowy z konstruktora VolumeButton i wywolując metodę changeVolume zmniejszały aktualna wartosc volume o 1, ale nie mniej niz min okreslone
w prototypie VolumeButton.

Jak napisać taka tresc za pomoca tylko obiektów i dziedziczenia prototypowego?
*/


//
// Dziedziczenie prototypowe
//

const VolumeButton = function(){

};

VolumeButton.prototype = {
    delta: 0,
    min: 0,
    max: 15,
    mute(){
        return 0;
    },
    changeVolume(volume){
        return Math.min(this.max, Math.max(volume + this.delta, this.min));
    },
}


const VolumeButtonUp = function(){
};

VolumeButtonUp.prototype = Object.assign(
    Object.create(VolumeButton.prototype),
    {delta: 1},
);


const VolumeButtonDown = function(){
};

VolumeButtonDown.prototype = Object.assign(
    Object.create(VolumeButton.prototype),
    {delta: -1},
);

//
// Tylko obiekty
//

const volume_button = {
    elta: 0,
    min: 0,
    max: 15,
    mute(){
        return 0;
    },
    changeVolume(volume){
        return Math.min(this.max, Math.max(volume + this.delta, this.min));
    },
};

const volume_button_up = Object.create(volume_button);
volume_button_up.delta = 1;

const volume_button_down = Object.create(volume_button);
volume_button_down.delta = -1;