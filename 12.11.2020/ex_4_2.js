/*
  Napisz funkcje, która przyjmie dowolna liste skladajaca sie z elementow, ktore te są lista,
  i zwroci listę z elementami które są na jednym poziomie. Czyli np.

  przekazujemy funkcji listę ['a', 23, ['b', 54], [{}, 'lol', [56, 'gra']]],
  a funkcja zwroci ['a', 23, 'b', 54, {}, 'lol', 56, 'gra']
*/

const flattenArray = (data) => {
  let hadArray = true;

    while(hadArray){
      hadArray = false;
        data.reduce((acc, current, index) => {
        if(Array.isArray(current)){
          acc.splice(index, 1, ...current);
          hadArray = true;
        } else {
          acc[index] = current;
        };
        return acc;
        },data);
    };
    return data;
};

