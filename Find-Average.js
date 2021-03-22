//Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
//Dada una matriz con varios valores, escriba una función que devuelva el promedio de los valores de la matriz. (por ejemplo, para [1,3,5,7,20] el promedio es 7,2)




function findAvg(arr) {
    
    var sum=0;
     
    for (var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
            
    var avg=sum/arr.length;            
     
    return avg; 
}
