function myFilter(arr, cb) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
      if (cb(arr[i], i, arr)) {
          result.push(arr[i]);
      }
  }
  return result;
}

function myMap(arr, cb) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
      result.push(cb(arr[i], i, arr));
  }
  return result;
}

function myIncludes(arr, val) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
          return true;
      }
  }
  return false;
}

function myIndexOf(arr, val) {

  // find first occurrence of val
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
          return i;
      }
  }
  return -1;
}

function myReduce(arr, cb, init) {
  let acc;
  let startIndex;
  
  // use default if not given
  if (init !== undefined) {
      acc = init;
      startIndex = 0;
  }
  else {
      acc = arr[0];
      startIndex = 1;
  }

  // accumulator and callback
  for (let i = startIndex; i < arr.length; i++) {
      acc = cb(acc, arr[i], i, arr);
  }
  return acc;
}

function mySlice(arr, start, end) {
  const result = [];
  let adjustedStart;
  let adjustedEnd;

  // mark start
  if (start < 0) {
      adjustedStart = arr.length + start;
  }
  else {
      adjustedStart = start;
  }

  // mark end
  if (end < 0) {
      adjustedEnd = arr.length + end;
  }
  else {
      adjustedEnd = end;
  }

  // chop array using marks
  for (let i = adjustedStart; i < adjustedEnd && i < arr.length; i++) {
      result.push(arr[i]);
  }

  return result;
}


function mySplice(arr, start, count, ...items) {
  const removedItems = [];
  const remainingItems = [];
  const result = [];

  // gather items before start index
  for (let i = 0; i < start && i < arr.length; i++) {
      remainingItems.push(arr[i]);
  }

  // gather items to be removed
  for (let i = start; i < start + count && i < arr.length; i++) {
      removedItems.push(arr[i]);
  }

  // gather items after the removal section
  for (let i = start + count; i < arr.length; i++) {
      remainingItems.push(arr[i]);
  }

  // add remaining items and new items
  result.push(...remainingItems.slice(0, start));
  result.push(...items);
  result.push(...remainingItems.slice(start));

  // empty the original array and add the new items
  arr.length = 0;
  arr.push(...result);

  return removedItems;
}

const arr1 = [2, 4, 4, 3, 1];
const isEven = num => num % 2 === 0;
console.log("filter:", arr1.filter(isEven));
console.log("myFilter:", myFilter(arr1, isEven));

const arr2 = [0, 1, 3, 2, 5, -2];
const square = num => num * num;
console.log("map:", arr2.map(square));
console.log("myMap:", myMap(arr2, square));

const arr3 = [1, 3, 3, 2];
const valueToFind = 3;
console.log("includes:", arr3.includes(valueToFind));
console.log("myIncludes:", myIncludes(arr3, valueToFind));

const arr4 = [1, 3, 3, 2];
const valueToFindIndex = 3;
console.log("indexOf:", arr4.indexOf(valueToFindIndex));
console.log("myIndexOf:", myIndexOf(arr4, valueToFindIndex));

const arr5 = [10, 55, 25, 35, 75];
const sum = (acc, num) => acc + num;
const init = 0;
console.log("reduce:", arr5.reduce(sum, init));
console.log("myReduce:", myReduce(arr5, sum, init));

const arr6 = [1, 2, 3, 4, 5];
const start = 1;
const end = 4;
console.log("slice:", arr6.slice(start, end));
console.log("mySlice: ", mySlice(arr6, start, end));

const arr7 = [1, 2, 3, 4, 5];
const startSplice = 1;
const countSplice = 2;
const newItems = [6, 7];
const arr7Copy = arr7.slice();
console.log("splice:", arr7Copy.splice(startSplice, countSplice, ...newItems));
console.log("splice result:", arr7Copy);

const arr7Custom = [1, 2, 3, 4, 5];
console.log("mySplice:", mySplice(arr7Custom, startSplice, countSplice, ...newItems));
console.log("mySplice result:", arr7Custom);