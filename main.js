// this is for question 1 (print all even numbers )
var myNum = document.getElementById("numbers-bottom");
var myInput = document.getElementById("myInp");
var submitting = document.getElementById("submitInp");
var numbTab = document.createElement('div');
numbTab.classList.add("listing");

submitting.onclick = function () {


    numbTab.innerHTML = ""
    var n = myInput.value;
    for (var i = 1; i <= n; i++) {

        if (i % 2 == 0) {

            const pText = document.createElement('p');
            pText.textContent = i;
            pText.classList.add("evens");
            numbTab.appendChild(pText);
            myNum.appendChild(numbTab);

        } else if (i % 2 != 0) {

            const pText = document.createElement('p');
            pText.textContent = i;
            pText.classList.add("odds");
            numbTab.appendChild(pText);
            myNum.appendChild(numbTab);
        }
    }

    //appendChild works fine with getElementById 
    //but we should add index ([0]) in case we use getElementsByClassName


}


//------------------------------------------------------------//




//------------------------------------------------------------//


//this is for question 2 (print multiplication table)

var multInput = document.getElementById("multInp");
var multInsert = document.getElementById("submInp");
var multSection = document.getElementById("mult-bottom");

multInsert.onclick = function () {

    multSection.innerHTML = "";
    var n = multInput.value;
    for (i = 1; i <= n; i++) {
        var multtab = document.createElement('div');
        multtab.classList.add("myList");

        for (j = 1; j <= 10; j++) {
            var multT = document.createElement('p');
            multT.innerText = i + " x " + j + " = " + i * j;
            multtab.appendChild(multT);
            multSection.appendChild(multtab);

        }
    }
}


//------------------------------------------------------------//


//------------------------------------------------------------//


//this is for question 3 (converter) 

var converter = document.getElementById("converter-bottom")
var kmInput = document.getElementById("kmInput");
var kmSubmit = document.getElementById("kmSubmit");

kmSubmit.onclick = function () {

    converter.innerHTML = "";
    var kilometers = kmInput.value;

    var outputMiles = document.createElement('p');
    // outputMiles.classList.add(/)
    outputMiles.innerText = +kilometers + " kilometers in miles : " + kilometers * 0.62;
    converter.appendChild(outputMiles);
}


//------------------------------------------------------------//



//------------------------------------------------------------//

//this is for question 4 (sum the numbers in array)

var myArr = [5, -4, 3.1, 2, 10];

var sum = 0;
for (var i = 0; i < myArr.length; i++) {
    // console.log(myArr[i])    
    sum += myArr[i];
}
console.log("The sum is : " + sum);

//------------------------------------------------------------//



//------------------------------------------------------------//
//this is for question 5 (reverse array)


var normalArr = [5, 8, 12, 55, 9, 43]
var reversedArray = [];
for (var j = normalArr.length - 1; j >= 0; j--) {

    reversedArray.push(normalArr[j])
    // console.log(reversedArray)

}
console.log("The reverse of {" + normalArr + "} is {" + reversedArray + "}")
//------------------------------------------------------------//




//------------------------------------------------------------//
//this is for question 6 (sort array)

var arrNorm = [4, 7, 2, 9, 15, 1, 3, 12, 6, 5];


var done = false;

while (!done) {
    done = true;
    for (var i = 1; i < arrNorm.length; i++) {

        if (arrNorm[i - 1] > arrNorm[i]) {
            done = false;

            var temp = arrNorm[i - 1]
            arrNorm[i - 1] = arrNorm[i]
            arrNorm[i] = temp;
        }

    }
}


console.log("sorted: {" + arrNorm + "}");
//------------------------------------------------------------//





//------------------------------------------------------------//
//this is for question 7 (filter array)


var arrOld = [5, 6, -2, 4, 9, -25, 56, 22, -8]
var filteredArr = [];

for (var i = 0; i < arrOld.length; i++) {

    if (arrOld[i] > 0) {
        filteredArr.push(arrOld[i])

    }
}

console.log("The filtered version of {" + arrOld + "} is {" + filteredArr + "}");
//------------------------------------------------------------//




//------------------------------------------------------------//
//this is for question 8 (remove spaces)

var myStr = "Hello Everyone, Today we are learning";
var nospaceStr = myStr.replaceAll(" ", "");

console.log(nospaceStr);


//------------------------------------------------------------//




//------------------------------------------------------------//
//this is for question 9 (return boolean)

var numberInput = document.getElementById("numberInput");
var numberSubmit = document.getElementById("numberSubmit");
var numberDiv = document.getElementById("divisions-bottom");
var myBool = false;
numberSubmit.onclick = function () {
    var checkNum = numberInput.value;
    var newP = document.createElement("p");
    numberDiv.innerHTML = "";


    if (checkNum % 10 == 0 && checkNum != 0) {

        myBool = true;
        newP.innerText = "True";
        newP.classList.add("trueP")
        numberDiv.appendChild(newP)
    } else {
        newP.innerText = "False";
        newP.classList.add("falseP")

        numberDiv.appendChild(newP)
    }




}


//------------------------------------------------------------//






//------------------------------------------------------------//
//this is for question 10 (return vowels)

var fullStr = "Hello Everyone";

//you should either consider all vowels with their uppercase versions
//or you can use toLoweCase function to make all chars in first string lower and then check
// var vowels = "a,e,i,o,u,A,E,I,O,U"
var vowels = "a,e,i,o,u,A,E,I,O,U"

var count = 0;

for (var i = 0; i < fullStr.length; i++) {

    for (var j = 0; j < vowels.length; j++) {
        if (fullStr[i] == vowels[j]) {
            count++;
        }
    }
}

console.log("The number of vowels in given string is " + count)


//------------------------------------------------------------//




//------------------------------------------------------------//
//this is for question 11 ( Calculate the sum of digits of a positive integer )


var num = 2540155;
var numStr = num.toString();
var sumNum = 0;

for (var i = 0; i < numStr.length; i++) {
    // console.log(numStr[i]);
    var strToNum = Number(numStr[i]);
    sumNum += strToNum;
}

console.log("The sum of digits in the given number is : " + sumNum)
//------------------------------------------------------------//



//------------------------------------------------------------//
//this is for question 12(Find the maximum number in an array of numbers)

var normArr = [10, 2, 5, 7, 3, 25, 12, 1];

var min = normArr[0];

var max = normArr[0];

for (var i = 0; i < normArr.length; i++) {

    if (min > normArr[i]) {
        min = normArr[i]
    }

    if (max < normArr[i]) {
        max = normArr[i];
    }
}

console.log("The minimum of given array is: " + min)
console.log("The maximum of given array is: " + max)
//------------------------------------------------------------//


//------------------------------------------------------------//
//this is for question 13 (find the average of the given numbers in an array)


var numArr = [1, 5, 10, 4]

var sum13 = 0;
var numberOfDigits = 0
for (var i = 0; i < numArr.length; i++) {

    sum13 += numArr[i];
    numberOfDigits++;
}

console.log("The averge of the numbers in the given array is: " + sum13 / numberOfDigits)


//------------------------------------------------------------//



//------------------------------------------------------------//
//this is for question 14 (calculate the factorial)


var num14 = 4;

var factorial = 1;
for (var i = 1; i <= num14; i++) {
    factorial *= i;
}


console.log("The " + num14 + "! is: " + factorial)

//------------------------------------------------------------//