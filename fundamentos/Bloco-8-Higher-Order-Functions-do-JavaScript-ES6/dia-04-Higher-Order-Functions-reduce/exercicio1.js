//1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    return arrays.reduce((accumulator, element) => accumulator.concat(element));
    // return arrays.flat()
  }

  console.log(flatten());