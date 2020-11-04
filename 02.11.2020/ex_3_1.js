/**
  Do zadania ex_2_2 spróbuj utworzyć obiekt ktorego kluczem bedzie odpowiednio
  wartosc typeOfRoad (city, expressway, highway) a wartosciami tych kluczy bedzie
  obiekt z kluczami msgPrefix i maxSpeed z wartoscimi odpowiednio
  (miasto, eska, autostrada) i ( 50, 120, 140);

  sprobuj utworzyc liste dwuelementowa z elementami odpowiednio:
  0: 'przekroczyłeś prędkość'
  1: 'jedziesz prawidłowo'
 */

const values = {
    city: {
        msgPrefix: "miasto",
        maxSpeed: 50,
    },
    expressway: {
        msgPrefix: "eska",
        maxSpeed: 120,
    },
    highway: {
        msgPrefix: "autostrada",
        maxSpeed: 140,
    },
};

const messages = ['przekroczyłeś prędkość', 'jedziesz prawidłowo']

const speedTest = (speed, typeOfRoad = 'city') => {
    let result;

    if ( speed <= values[typeOfRoad].maxSpeed ){
        result = values[typeOfRoad].msgPrefix + ": " + messages[1];
    } else {
        result = values[typeOfRoad].msgPrefix + ": " + messages[0];
    };

    return result
};