// Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
// Escribe una función que intercambie el primer y último valor de cualquier matriz dada. La longitud mínima predeterminada de la matriz es 2. (por ejemplo, [1,5,10, -2] se convertirá en [-2,5,10,1]).

//Option 1

function swap(arr) {
    
    var temp= arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    
    return arr; 
}


//Option 2

function swap(arr) {
    //your code here 
    var arrnew = arr.slice();
    var temp = arrnew[0];
    arrnew[0] = arrnew[arrnew.length-1];
    arrnew[arrnew.length-1] = temp;
    return arrnew; 
}
