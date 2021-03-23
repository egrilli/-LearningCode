//Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
//Dada una matriz con varios valores, escriba una función que devuelva una nueva matriz que solo contenga los valores máximo, mínimo y promedio de la matriz original. (p. ej., [1,5,10, -2] devolverá [10, -2,3.5])


function maxMinAvg(arr) {
   
  var max=arr[0];
  var min=arr[0];
  var sum=arr[0];
  
  
  for(var i=1; i<arr.length;i++){
       if(arr[i]>max){
           max=arr[i];  
       }
    
        if(arr[i]<min){
           min=arr[i];  
       }
    
    sum=sum+arr[i];
  
  }
  var avg= sum/arr.length;
   
  var arrnew=[max,min,avg];
 
    return arrnew; 
}


