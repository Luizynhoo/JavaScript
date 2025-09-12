/*LetCode*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    let str = x.toString(); //Convertendo em String
  
    let reversed = str.split('').reverse().join(''); //Criando o reversed onde ele separa todos os numeros e depois inverte eles
  
    return str === reversed; //Com os numeros invertidos os dois resultados são comparados
};
