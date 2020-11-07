/**
 * Napisz funkcje get, ktora jako parametry przyjmie odpowiednio
 * szukane zagniezdzenie w drzewie obiektu (path).
 * obiekt (object).
 * Funkcja ma zwrocic wartosc w szukanej sciezce
 *
 * const obj = {a: {b: {c: { d: ['super', 'slabo]} } } };
 *
 * get('a.b.c.d', obj);
 * // zwroci 'super'
 *
 * get('e.f.g.h', obj);
 * // zwroci undefined;
 *
 * get('a.b', obj);
 * // zwroci { c: { d: 'super' } }
 */

const obj = {a: {b: {c: { d: ['super', 'slabo']} } } };

get = (path, object) => {

   return path.split(".").reduce((acc, item) => {
        return acc[item];
    },object);
};