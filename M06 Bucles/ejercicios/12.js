function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  msg="";
  if (num%3===0 && num%5===0)
      msg="fizzbuzz";
  else if (num%3===0)
    msg="fizz";
  else if (num%5===0)
    msg="buzz";
  else
    msg="En ninguno..."
  return msg;
}
console.log(fizzBuzz(16))
module.exports = fizzBuzz;
