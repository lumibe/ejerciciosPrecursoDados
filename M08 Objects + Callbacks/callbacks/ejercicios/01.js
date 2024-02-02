function invocarCallback(cb) {
  // Invoca/ejecuta el callback `cb`.
  // NOTA: no debes retornar nada.
  // Tu código:
  cb()
}
function cb(){
  console.log("Hola..!")
}
invocarCallback(cb)
module.exports = invocarCallback;
