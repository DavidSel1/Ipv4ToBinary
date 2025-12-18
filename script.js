function calcBinary() {
    //gets the values from the html
    let octetOne = document.getElementById("firstOctet").value;
    let octetTwo = document.getElementById("secondOctet").value;
    let octetThree = document.getElementById("thirdOctet").value;
    let octetFour = document.getElementById("fourthOctet").value;

    // storing the html values in an array 
    let octArray = [];
    octArray = [octetOne, octetTwo, octetThree, octetFour];


    //numbers used store to determine the binary number 
    const minusArray = [128, 64, 32, 16, 8, 4, 2, 1];

    //used to store the actual binary answers
    let binaryArray = [];


    for (let octIndex = 0; octIndex < octArray.length; ++octIndex){
        if (octArray[octIndex] >= 0 && octArray[octIndex] <= 255 ){

             binaryArray[octIndex] = [];

            //uses minus array to minus the 8 numbers from octet array
            for (let minusIndex = 0; minusIndex < minusArray.length; ++minusIndex){
                if (octArray[octIndex] >= minusArray[minusIndex]){
                
                    
                    octArray[octIndex] -= minusArray[minusIndex];
                    binaryArray[octIndex][minusIndex] = 1;
                }
                else{
                    
                    binaryArray[octIndex][minusIndex] = 0;
                }
            }
        }
          
         else { 
            alert("Octet number must not be more 255");
        }
    }


    let output = "";
   for (let i = 0; i < binaryArray.length; ++i){
        for (let j = 0; j < binaryArray[i].length; j++) {
            
            output += binaryArray[i][j];
            console.log(binaryArray[i][j]);
        }
        
        output += ".";
       
    }
    document.getElementById('binaryOutput').textContent = output;


     //document.getElementById("oot").innerHTML = '*';**/

     
}


