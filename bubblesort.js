function bubbleSort(array) {
  /* your code here */

  if (array.length === 1) {
    return array;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] && array[i] > array[i + 1]) {
      // swap(array[i], array[i + 1]);
      console.log('swapping', array);
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      console.log('swapped', array);
    }
  }
  debugger;
  let result = bubbleSort(array.slice(0, array.length - 1));
  result.push(array[length]);
  return result;
}

function swap(num1, num2) {}
