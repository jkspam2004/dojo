/* Fib + Nacci 
 Use closures to make the Fib function
*/


function fib() {
  var prev_prev = 0; // x(n-2)
  var prev = 1;      // x(n-1)
  var n = 0;
  function nacci() {
    n++;
    if (n == 1) {
      console.log(1);
      return;
    }
    fib = prev_prev + prev; // x(n) = x(n-1) + x(n-2)
    console.log(fib);
    prev_prev = prev;
    prev = fib;
  }
  return nacci;
}

var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
