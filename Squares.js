//Given an array with multiple values, write a function that replaces each value in the array with the product of the original value multiplied by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
//Dada una matriz con varios valores, escriba una función que reemplace cada valor en la matriz con el producto del valor original multiplicado por sí mismo. (p. ej., [1,5,10, -2] se convertirá en [1,25,100,4])


function squareVal(arr) {
    
    
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i]*arr[i];
    }
     
    return arr; 
}
