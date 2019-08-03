var maxNumber = function (numArr) {

var maxNum = numArr[0]; // assuming that 0 element is our maximum number.

for (var i=0; i<numArr.length; i++)
{

if  (numArr[i] > maxNum) {
     
    maxNum = numArr[i];
}

}

return maxNum;

}


// write a function that takes in an array of numbers and outputs the maximum number. 

// Ex: 

