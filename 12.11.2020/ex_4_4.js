/*
Utwórz obiekt shape (kształt), który ma właściwość type (typ) oraz metodę getType() (pobierz typ).
Zdefiniuj funkcję konstruktora Triangle() (trójkąt), którego prototypem jest shape. Obiekty tworzone za pomocą Triangle() powinny mieć trzy właściwości własne: a, b i c, przechowujące długość boków trójkąta.
Dodaj do prototypu nową metodę o nazwie getPerimeter() (pobierz obwód).
Przetestuj poprawność implementacji za pomocą następującego kodu:
> var t = new Triangle(1, 2, 3);
> t.constructor === Triangle;
true
> shape.isPrototypeOf(t);
true
> t.getPerimeter();
6
> t.getType();
"triangle"
*/

const shape = {
    type: "triangle",
    getType(){
        return this.type;
    },
};

function Triangle(a = 1, b = 1, c = 1){
    this.a = a;
    this.b = b;
    this.c = c;

};

Object.setPrototypeOf(Triangle.prototype, shape);

Triangle.prototype.getPerimeter = function(){
         return this.a + this.b + this.c;
};

