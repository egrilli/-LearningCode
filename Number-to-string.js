//Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
//Escriba una función que tome una matriz de números y reemplace cualquier valor negativo dentro de la matriz con la cadena 'Dojo'. Por ejemplo, si array = [-1, -3,2], su función devolverá ['Dojo', 'Dojo', 2].


function numToStr(arr) {
    
    var remplazo='Dojo';
    
    for(var i=0; i<arr.length;i++){
        if(arr[i]<0)
        arr[i]=remplazo;
    }
    
    return arr; 
}
