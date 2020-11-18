/*
  Wyobraź sobie, że nie istnieje Math. Utwórz obiekt MyMath, który posiada następujące metody:
  MojMath.rand(min, max, wlacznie) — losuje liczbę z przedziału od min do max, włącznie, jeśli wlacznie ma wartość true.
  MojMath.min(tablica) — zwraca najmniejszy element tablicy.
  MojMath.max(tablica) — zwraca największy element tablicy.
*/

const MyMath = {

};

MyMath.rand = function(min, max, including = false){

  if (min >= max) {
    throw new Error("max must be greater than min");
}

  const xorshift = () => {
    let state0 = parseInt(localStorage.getItem('state0')) || 325;
    let state1 = parseInt(localStorage.getItem('state1')) || 1789;
    let s1 = state0;
    let s0 = state1;
    getNumber = () => {
      state0 = s0;
      s1 ^= s1 << 23;
      s1 ^= s1 >> 17;
      s1 ^= s0;
      s1 ^= s0 >> 26;
      state1 = s1;
  
      localStorage.setItem('state0',state0);
      localStorage.setItem('state1',state1);
    
      const result = state0 + state1;
      const length = (result.toString().length);
      return (result.toString().slice(1,length))/10**(length - 1);
    };
   return getNumber;
  }
  
  const randomNumber = xorshift();
  
  if(including) return parseInt(randomNumber() * (max - min +1 ) + min);
  return parseInt(randomNumber() * ((max - 1 ) - (min + 1) + 1) + min + 1);
};

MyMath.sort = function(array){
    let nextRound = true;
    while(nextRound){
        nextRound = false;
        array.forEach((item, index, array) =>{
            if( item > array[index+1] ) {
                array[index] = array[index+1]; 
                array[index+1] = item;
                nextRound = true;
            };
        });
    };
    return array;
};

MyMath.min = function(...numbers){
    return MyMath.sort(numbers)[0];
};

MyMath.max = function(...numbers){
    return MyMath.sort(numbers)[numbers.length-1];
};








