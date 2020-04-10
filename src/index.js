//implement the bubble sort method
let bubblesort = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let a = arr[j];
        let b = arr[i];
        arr[i] = a;
        arr[j] = b;
      }
    }
  }
  return arr;
};

console.log(bubblesort([1, 5, 2, 7, 8]));
console.log(bubblesort([11, 10, 9, 8]));

//is arr[0]<arr[1]?
//yes? they stay the same
//no? they switch
//1<5? yes, so they stay the same
//is arr[1]<arr[2]?
//no, so arr[1]=arr[2] and arr[2]=arr[1]
//i don't actually know how to switch
//arr = [1, 2, 5, 7, 8]
//5<7? yes so it stays the same
//7<8? yes so it stays the same
