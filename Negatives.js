//Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
//Dada una matriz con múltiples valores, escriba una función que reemplace cualquier número negativo dentro de la matriz con el valor de 0. Cuando el programa haya terminado, la matriz no debe contener valores negativos. (p. ej., [1,5,10, -2] se convertirá en [1,5,10,0])



function noNeg(arr) {
    
    for(var i=0; i<=arr.length;i++){
          if(arr[i]<0){
            arr[i]=0;
          }
    }
    
    return arr; 
}
