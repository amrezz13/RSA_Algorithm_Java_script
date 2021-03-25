let message

RSAb.onclick=function(){
    
    filter(message);
    filtered_message= filter(message);
    arr= converter(filtered_message);
    arr_numbers= RSAalgorithm(arr);
    ciphermessage =cipher_message(arr_numbers);
    document.getElementById("chipherarea").value=ciphermessage;
    
    
    if (document.getElementById('mainhow')) {

        if (document.getElementById('mainhow').style.display == 'none') {
            document.getElementById('mainhow').style.display = 'block';
            document.getElementById('RSA').style.display = 'none';
        }
        else {
            document.getElementById('mainhow').style.display = 'none';
            document.getElementById('RSA').style.display = 'block';
        }
    }


}


transb.onclick= function(){

}

pfb.onclick= function(){

}


/*
filtering message to contaon only Alphanumeric*/
function filter(message){
    var plain = document.getElementById("ptext").value;
    if((plain==null)||(plain.length=="0")){
      window.alert("please enter some text");
    }
    else{
       message =plain.replace(/[^A-Za-z]/g, '');
     }
    return message;
}




/*convert message to Arrary of Characters and array of Numbers*/
function converter(message){
    arr= message.split('');
    
    for(i=0; i< arr.length;i++)
    {
        arr[i]=arr[i].charCodeAt(0);
    }
    return arr;
 }

 
/*
RSA Algorithm implemntation
*/
function RSAalgorithm(arr){

    /* a very helpful tool in this link
    RSA calculator make it easier to find the values
    https://www.cs.drexel.edu/~jpopyack/Courses/CSP/Fa17/notes/10.1_Cryptography/RSAWorksheetv4e.html
    */

    //generat two large primes
    var p =3;
    var q=11;
    // calculating n the first part of the public key
    var n =p*q;
    var a=(p-1)*(q-1);
    // choosing E which haave no comon factors with a
    var e=7;
    //finding integer d with 1 < D < A such that D ×E −1 is a multiple of A
    var d=3

    // first encryption step to make it power of e
    for(i=0; i<arr.length; i++){
        // convert ASCII to the power of e
        arr[i]= Math.pow(arr[i],e)
    }
    
    //second step is to divid it to n
    for (i=0; i< arr.length; i++){
        arr[i] = (arr[i]/n);
    }
    return arr;
}



// convert numbers to alphabet
function cipher_message(arr_numbers){

    for(i=0; i<arr_numbers; i++){
        arr_numbers[i]=String.fromCharCode(arr_numbers[i]);
    }
    return arr_numbers;
}
