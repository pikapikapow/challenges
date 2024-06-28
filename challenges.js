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
  console.log(new_array);
}

clear();

const stringWithSpaces = "r o l l s";
const stringWithoutSpaces = stringWithSpaces.replace(/\s/g, "");
console.log(stringWithoutSpaces);

function tens_checker(num) {
  if (num % 10 == 0) {
    console.log("True");
  } else {
    console.log("False");
  }
}
tens_checker(20);

function max_finder(array) {
  let big = 0;
  for (let i = 0; i <= array.length; i++) {
    if (array[i] > big) {
      big = array[i];
    }
  }
  console.log(big);
}

max_finder([2, 5, -6, 8, 3]);

function palindrome_finder(word) {
  let new_word = word;
  let split_word = new_word.split();
  let reverse_word = split_word.reverse();
  let join_word = reverse_word.join();
  if (join_word === word) {
    console.log("True");
  } else {
    console.log("False");
  }
}

palindrome_finder("kayak");
