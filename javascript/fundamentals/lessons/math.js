// Math functions: floor, ceiling, round

number = Math.random()*9;
console.log(number);

floored = Math.floor(number);
console.log("floor:", floored);

ceiling = Math.ceil(number);
console.log("ceiling:", ceiling);

round = Math.round(number);
console.log("round:", round);

console.log(" ~~~~~~~~~~~~~start~~~~~~~~~~~~~~~~~~ ");
var count = 0;
while (count < 20) {
  number = Math.random()*10;
  console.log(number);

  floored = Math.floor(number);
  console.log(count, " floor:", floored);
 
  count++;
}
