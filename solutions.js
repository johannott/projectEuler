// Project Euler Solutions

//	Multiples of 3 and 5 - Done

var count = 0;
for (x=1; x < 1000; x++){
  if( x % 3 == 0 || x % 5 == 0){
  count = count + x;
  }
}

console.log(count);

// Even Fibonacci numbers

var array = [1,1];
var count = 0;

for (i=1; i < 4000000; i++){
	array[i + 1] = array[i] + array [i - 1];
  if (array[i + 1] % 2 == 0) {
  	count = count + array[i+1];
  }
  if ( array[i] > 4000000 ){
  	break;
  }
}
console.log(array);
console.log(count);


//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143 ?


function cal(num){
  var arr = [];
  //Need to do a loop from 1 to number
  for(var i = 1; i <= num; i++){
    //if num % i == 0 - it is a prime factor
    if(num % i == 0 && (i != 1)) {
      //divide num by i
      arr.push(i);
      num = num / i;
    }
  }

  return arr;
}

console.log(cal(600851475143));


//The sum of the squares of the first ten natural numbers is,

//12 + 22 + ... + 102 = 385
//The square of the sum of the first ten natural numbers is,

//(1 + 2 + ... + 10)2 = 552 = 3025
//Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

var sum = 0;
var square = 0;

for (var i=0; i<=100; i++) {

        sum = sum + i;
  square = square + (i * i);
   console.log(square);
}

console.log(sum);
var sum_total = sum * sum;

console.log(sum_total - square);


//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

for (var i=1; i <=10000000; i++) {
debugger;
   for (var j=1; j <=20; j++) {
   debugger;
        if (i % j == 0) {
        debugger;
        return;
        }

   }
}

//
