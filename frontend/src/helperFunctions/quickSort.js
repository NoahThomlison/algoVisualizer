import changeColor from './changeColor';
import timer from './timer'


function partition(array, left, right) {
  let holder
  var pivot   = array[Math.floor((right + left) / 2)], //middle element
      i       = left, //left pointer
      j       = right; //right pointer
  while (i <= j) {
      while (array[i] < pivot) {
          i++;
      }
      while (array[j] > pivot) {
          j--;
      }
      if (i <= j) {
        holder = array[j]
        array[j] = array[i]
        array[i] = holder
          i++;
          j--;
      }
  }
  return i;
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
      index = partition(items, left, right); //index returned from partition
      if (left < index - 1) { //more elements on the left side of the pivot
          quickSort(items, left, index - 1);
      }
      if (index < right) { //more elements on the right side of the pivot
          quickSort(items, index, right);
      }
  }
  return items;
}

export default quickSort;