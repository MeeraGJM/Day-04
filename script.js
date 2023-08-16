//Anonymous Print Odd Numbers
//*****************************\\
var oddnumbers=function(array)
    {
 console.log("Odd Numbers");

    for(var i=0; i<array.length; i++)
        {
            if(array[i]%2!=0)
                {
                    console.log( array[i]);
                }
        }

    }
oddnumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//Print Odd Numbers using Arrow Function\\
//********************************************\\
var Odd=(numbers)=>{
  console.log("Odd Numbers");

  for(var i=0; i<numbers.length; i++)
      {
          if(numbers[i]%2!=0)
              {
                  console.log( numbers[i]);
              }
      }
}
Odd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//IIFE\\(Print Odd Numbers)
  //***************************\\
  (function(numbers){
    console.log("Odd Numbers");

    for(var i=0; i<numbers.length; i++)
        {
            if(numbers[i]%2!=0)
                {
                    console.log(numbers[i]);
                }
        }

})
([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);



//Anonymous -String to titlt Caps\\
//**********************************\\
var Cars=function (str){
 
    for(var i=0; i<str.length; i++){
      str[i]=str[i].toUpperCase();
      console.log(str[i]);
    }
  return str.join('');
  }
  Cars(["Saab", "Volvo", "BMW"]);


  
    //Arrow Function-String to titlt Caps\\
  //***************************************\\
  var String=(str)=>{
 
    for(var i=0; i<str.length; i++){
      str[i]=str[i].toUpperCase();
      console.log(str[i]);
    }
  //return str.join('');
  
  }
  String(["Saab", "Volvo", "BMW"]);


  //IIFE-String to title Caps\\
//***********************************\\

(function (str){
 
  for(var i=0; i<str.length; i++){
    str[i]=str[i].toUpperCase();
    console.log(str[i]);
  }
return str.join('');

})(["Saab", "Volvo", "BMW"]);



   //Anonymous-Sum of All numbers\\
//********************************\\
var numbers=function(array){
    var sum=0;
 
   for(var i=0; i<array.length; i++)
   {
    sum=sum+array[i];
 }
     console.log(sum);
 
 }
 numbers([1, 2, 3, 4, 5, 5]);


 
   //Arrow Function-Sum of all numbers\\
 //*************************************\\
 var numbers=(array)=>{
  var sum=0;

 for(var i=0; i<array.length; i++)
 {
  sum=sum+array[i];
}
   console.log(sum);

}
numbers([1, 2, 3, 4, 5, 5]);


 //IIFE-Sum of All numbers\\
  //*****************************\\
  (function(array){
    var sum=0;
 
   for(var i=0; i<array.length; i++)
   {
    sum=sum+array[i];
 }
     console.log(sum);
 
 })([1, 2, 3, 4, 5, 5]);


  //Anonymous function- Print Prime Numbers\\
//*******************************************\\
var prime=function (num){
    for(let i=0; i<=num.length; i++)
    {
     var sum=0;
     for(var j=1;j<=i; j++)
     {
       if(i%j==0)
       {
         sum=sum+1;
       }
    }
    if(sum==2)
    {
      console.log(i);
    }
  } 
  }
  prime([2, 3, 4, 5, 6, 7, 8, 9]);

    //Arrow Function- Print Prime Number\\
  //**************************************\\
  var prime=(num)=>{
    for(let i=0; i<=num.length; i++)
    {
     var sum=0;
     for(var j=1;j<=i; j++)
     {
       if(i%j==0)
       {
         sum=sum+1;
       }
    }
    if(sum==2)
    {
      console.log(i);
    }
  } 
  }
  prime([2, 3, 4, 5, 6, 7, 8, 9]);


  //IIFE- print Prime Numbers\\
//**************************\\
(function (num){
  for(let i=0; i<=num.length; i++)
  {
   var sum=0;
   for(var j=1;j<=i; j++)
   {
     if(i%j==0)
     {
       sum=sum+1;
     }
  }
  if(sum==2)
  {
    console.log(i);
  }
}
})([2, 3, 4, 5, 6, 7, 8, 9]);




  //Anonymous function- Palindromes\\
  //***********************************\\
  function isPalindrome(N){
    var str=""+N;
    var len=str.length;
    for(var i=0; i<parseInt(len/2); i++)
    {
  var palindrome=function(arr, n){
    for(var j=0; j<n; j++)
    {
      //var ans=
      isPalindrome(arr[i]);
      
      console.log(arr[i]);
      
   }
  }
  palindrome();
  }
    
  }
  isPalindrome(["wow", "nitin"]);


    //Arrow Function- Palindromes\\
  //*******************************\\
  function isPalindrome(N)
  {
    var str=""+N;
    var len=str.length;
    for(var i=0; i<parseInt(len/2); i++)
    {
  var palindrome=(arr, n)=>
  {
    for(var j=0; j<n; j++)
    {
      //var ans=
      isPalindrome(arr[i]);
      
      console.log(arr[i]);
      
    }
  }
    palindrome();
   }
}
isPalindrome(["wow", "nitin"]);


    //IIFE-Palindrome\\
  //*******************\\
  function isPalindrome(N){
    var str=""+N;
    var len=str.length;
    for(var i=0; i<parseInt(len/2); i++)
    {
  (function(arr, n){
    for(var j=0; j<n; j++)
    {
      //var ans=
      isPalindrome(arr[i]);
      
      console.log(arr[i]);
      
   }
  })();
  }
    
  }
  isPalindrome(["wow", "nitin"]);



   //Anonymous-Remove Duplicates\\
  //*******************************\\

var removeDuplicates=function (arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
  }
  console.log(removeDuplicates(["apple", "mango", "apple",
          "orange", "mango", "mango"]));


   
       
  //Arrow Function-Remove duplicate item\\
 //****************************************\\
   var removeDuplicates= (arr)=> {
    return arr.filter((item,
     index) => arr.indexOf(item) === index);
}
   console.log(removeDuplicates(["apple", "mango", "apple",
       "orange", "mango", "mango"]));


        //AnonymousFunction-Rotate an array by k times\\
        //**********************************************\\
        var RightRotate=function (a, n, k)
        {
            k = k % n;
            for (let i = 0; i < n; i++)
             {
                if (i < k) 
                {
                    console.log(a[n + i - k] + " ");
                }
                 else 
                {
          
                    console.log((a[i - k]) + " ");
                }
               
            }
        }
        let array = [1, 2, 3, 4, 5];
        let n= Array.length;
        let k = 2;
          
        RightRotate(Array, n, K);



  //Arrow Function-Rotate an array by k times\\
//*********************************************\\
var RightRotate=(a, n, k)=>
{
    k = k % n;
    for (let i = 0; i < n; i++) {
        if (i < k) {
            console.log(a[n + i - k] + " ");
        }
         else {
  
            console.log((a[i - k]) + " ");
        }
       
    }

}
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
  
RightRotate(Array, N, K);



          
  