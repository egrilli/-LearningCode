//Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
//Dado el valor de Y, escriba una función que tome una matriz y devuelva el número de valores que son mayores que Y. Por ejemplo, si arr = [1, 3, 5, 7] e Y = 3, su función devolverá 2. ( Hay dos valores en la matriz mayores que 3, que son 5, 7).


function greaterY(arr, Y) {
    
    var count=0;
    
    for(var i=0; i<arr.length;i++){
        if(Y<arr[i]){
            count=count+1
        }
    }
     
    return count; 
}
