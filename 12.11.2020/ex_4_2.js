/*
  Napisz funkcje, która przyjmie dowolna liste skladajaca sie z elementow, ktore te są lista,
  i zwroci listę z elementami które są na jednym poziomie. Czyli np.

  przekazujemy funkcji listę ['a', 23, ['b', 54], [{}, 'lol', [56, 'gra']]],
  a funkcja zwroci ['a', 23, 'b', 54, {}, 'lol', 56, 'gra']
*/


const flattenArray = (data) => {
    let hadArray = false;
    
    makeNewOne = (data) => {
        hadArray = false;

        return data.reduce((acc, current) => {

            if(Array.isArray(current)){
                acc.push(...current);
                hadArray = true;
            } else {
                acc.push(current);
            };

            if(hadArray){
                return makeNewOne(acc);
            } else {
                return acc;
            }
        },[]);
    };
    return makeNewOne(data);
};