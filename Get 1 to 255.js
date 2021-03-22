/*Write a function that returns an array with all the numbers from 1 to 255. You may use the push() function for this exercise.
Escribe una funcion que retorne un arreglo junto a todos los numeros desde el 1 al 255. Tu puedes usar la funcion push() para este ejercicios.
*/

//Option1

function get_array() {
      var arr = [];
    
      for(var i=1; i<=255; i++){
           arr.push(i)
    }
    return arr;
    
}

//Option2

function get_array() {
      
      var arr = [];
      
      var i=1;
      
        while (i<=255){
        arr.push(i)
        i=i+1
    }
    return arr;
    
}
