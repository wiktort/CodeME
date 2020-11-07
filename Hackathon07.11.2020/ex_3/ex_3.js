/**
 * 1. Napisz funkcje ktora jako parametr przyjmie kolekcje taka jak w stalej data
 * i zwroci obiekt w ktorym kluczem bedzie wartosc wlasnosci "code" a wartoscia
 * bedzie wartosc wlasnosci "mid"
 *
 * czyli
 *
 * {
 *  RUB: 0.1266,
 *  IDR: 3.8234,
 *  ...
 * }
 *
 * 2. napisz funkcje, ktora jako parametr przyjmie obiekt zwrocony przez funkcje z pt1
 * i zwroci najmnijesza wartosc mid z listy
 */
const data = [
    {"currency": "rubel rosyjski", "code": "RUB", "mid": 0.0578},
    {"currency": "rupia indonezyjska", "code": "IDR","mid": 0.00028213},
    {"currency": "rupia indyjska", "code": "INR","mid": 0.054581},
    {"currency": "won południowokoreański", "code": "KRW","mid": 0.003345},{"currency": "yuan renminbi (Chiny)", "code": "CNY","mid": 0.5812},
    {"currency": "SDR (MFW)", "code": "XDR", "mid": 5.6168}
];


// pt.1
const getData = function(data){
    const currencies = new Object();
    data.forEach(item => {
        return currencies[item.code] = item.mid;
    });
    return currencies;
};

// pt.1 sposób 2 

const getData1 = function(data){
    return data.reduce((acc,item) => {
        const code = item.code;
        const mid = item.mid;
        acc[code] = mid;

        return acc;
    }, {});
};

// pt.2

const minValue = function (data){
    return Math.min(...Object.values(data));
 };

 // pt.2 sposób 2

 const minValue1 = function(data){
    const values = Object.values(data);
    return values.reduce((acc,current) => {
        return Math.min(acc, current);
    });
 };

