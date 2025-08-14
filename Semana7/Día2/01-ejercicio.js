/*
https://adventjs.dev/es/challenges/2024/1
Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.

const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]
*/

function prepareGifts(gifts) {
  if(gifts.length === 0){
    return [];
  }

  let notDuplicates = [];
  //eliminar duplicados
  for(let i = 0; i < gifts.length; i++){ //aqui revisamos uno x uno dentro de gifts
    let exists = false;
    // debugger;
    for(let j = 0; j < notDuplicates.length; j++){ //aqui revisamos que no este dentro de los que quiero (los que ya existen)
      console.log(`Comparando ${gifts[i]} vs ${notDuplicates[j]} `)
      if(gifts[i] === notDuplicates[j]){
        console.log("Encontrado!!!")
        exists = true;
        break; //se salta todo porque ya lo encontró

        // debugger;
      }
    }
    // debugger;
    if(exists === false){ //si no existe lo agrego a notDuplicates
      notDuplicates.push(gifts[i])
    }
  }

  let orderedGifts = notDuplicates.sort(); //ordena de forma ascendente ya sea por A-Z 0-9
  console.log("Ordered:", orderedGifts);

  return orderedGifts;
}

let whitoutDuplicates = prepareGifts([3, 1, 2, 3, 4, 2, 5]);


console.log(whitoutDuplicates);
