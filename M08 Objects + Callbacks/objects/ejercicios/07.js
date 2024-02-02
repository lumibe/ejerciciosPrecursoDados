// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    code:"1111",
    nombe:"Luis",
    nota:"2.8",
    getNota:function(){return this.nota}
}
console.log(objetoAnidado.getNota());
module.exports = objetoAnidado;
