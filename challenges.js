for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

function multiplication_Table() {
  for (let i = 1; i <= 10; i++) {
    for (let num = 1; num <= 10; num++) {
      console.log(num * i);
    }
  }
}

multiplication_Table();

// km = int(input("Insert a number: "));

// function length_converter() {
//   console.log(km * 0.621);
// }

const array = [3, -5, 7, -7, 9, 2];

function array_adder() {
  big_num = 0;
  for (let i = 0; i <= array.length; i++) {
    big_num = big_num + array[i];
  }
}

array_adder();

array.reverse();

console.log(array);

const points = [40, 100, 1, 5, 25, 10, -7, -9];
points.sort(function (a, b) {
  return a - b;
});

console.log(points);

function clear() {
  let new_array = [];
  for (let i = 0; i <= points.length; i++) {
    if (points[i] >= 0) {
      new_array.push(points[i]);
    }
  }
}

clear();
