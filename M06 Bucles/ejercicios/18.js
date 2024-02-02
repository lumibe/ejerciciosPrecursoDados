function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  produc=1;
  for (i=a;i<=b;i++)
  {
    produc=produc*i;    
  }
  return produc;
}
console.log(productoEntreNúmeros(1,5));
module.exports = productoEntreNúmeros;