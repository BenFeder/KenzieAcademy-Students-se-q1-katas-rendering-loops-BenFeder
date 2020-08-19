let assignmentTitle = document.createElement("h1");
assignmentTitle.innerText = "Katas - Rendering Loops";

document.body.appendChild(assignmentTitle);

const sampleArray = [
  469,
  755,
  244,
  245,
  758,
  450,
  302,
  20,
  712,
  71,
  456,
  21,
  398,
  339,
  882,
  848,
  179,
  535,
  940,
  472,
];

// Kata One ---------------------------------------
// Display num 1 to 25
function func1to25() {
  let kata1 = document.createElement("h3");
  kata1.innerText = "Kata 1: Display 1 to 25";
  let display1to25 = document.createElement("p");
  document.body.appendChild(kata1);
  document.body.appendChild(display1to25);
  for (i = 1; i <= 25; i++) {
    if (i < 25) {
      display1to25.innerText += i + ", ";
    } else if (i == 25) {
      display1to25.innerText += i;
    }
  }
}
func1to25();
// Your Code Here

// Kata Two ---------------------------------------
// Display num 25 to 1
function func25to1() {
  let kata2 = document.createElement("h3");
  kata2.innerText = "Kata 2: Display 25 to 1";
  let display25to1 = document.createElement("p");
  document.body.appendChild(kata2);
  document.body.appendChild(display25to1);
  for (i = 25; i >= 1; i--) {
    if (i > 1) {
      display25to1.innerText += i + ", ";
    } else if (i == 1) {
      display25to1.innerText += i;
    }
  }
}
func25to1();

// Kata Three ---------------------------------------
// Display num -1 to -25
function Neg1to25() {
  let kata3 = document.createElement("h3");
  kata3.innerText = "Kata 3: Display -1 to -25";
  let displayNeg1to25 = document.createElement("p");
  document.body.appendChild(kata3);
  document.body.appendChild(displayNeg1to25);
  for (i = -1; i >= -25; i--) {
    if (i > -25) {
      displayNeg1to25.innerText += i + ", ";
    } else if (i == -25) {
      displayNeg1to25.innerText += i;
    }
  }
}
Neg1to25();

// Kata Four ---------------------------------------
// Display num -25 to -1
function Neg25to1() {
  let kata4 = document.createElement("h3");
  kata4.innerText = "Kata 4: Display -25 to -1";
  let displayNeg25to1 = document.createElement("p");
  document.body.appendChild(kata4);
  document.body.appendChild(displayNeg25to1);
  for (i = -25; i <= -1; i++) {
    if (i < -1) {
      displayNeg25to1.innerText += i + ", ";
    } else if (i == -1) {
      displayNeg25to1.innerText += i;
    }
  }
}
Neg25to1();

// Kata Five ---------------------------------------
// Display odd num 25 to -25
function func25toNeg25() {
  let kata5 = document.createElement("h3");
  kata5.innerText = "Kata 5: Display 25 to -25";
  let display25toNeg25 = document.createElement("p");
  document.body.appendChild(kata5);
  document.body.appendChild(display25toNeg25);
  for (i = 25; i >= -25; i -= 2) {
    if (i > -25) {
      display25toNeg25.innerText += i + ", ";
    } else if (i == -25) {
      display25toNeg25.innerText += i;
    }
  }
}
func25toNeg25();

// Kata Six ---------------------------------------
// Display divisible by 3 up to 100
function divis3() {
  let kata6 = document.createElement("h3");
  kata6.innerText = "Kata 6: Display divisble by 3 up to 100";
  let display1to100by3 = document.createElement("p");
  document.body.appendChild(kata6);
  document.body.appendChild(display1to100by3);
  for (i = 3; i < 100; i += 3) {
    if (i < 99) {
      display1to100by3.innerText += i + ", ";
    } else if (i == 99) {
      display1to100by3.innerText += i;
    }
  }
}

divis3();

// Kata Seven ---------------------------------------
// Display divisible by 7 up to 100
function divis7() {
  let kata7 = document.createElement("h3");
  kata7.innerText = "Kata 7: Display divisble by 7 up to 100";
  let display1to100by7 = document.createElement("p");
  document.body.appendChild(kata7);
  document.body.appendChild(display1to100by7);
  for (i = 7; i < 100; i += 7) {
    if (i < 98) {
      display1to100by7.innerText += i + ", ";
    } else if (i == 98) {
      display1to100by7.innerText += i;
    }
  }
}

divis7();

// Kata Eight ---------------------------------------
// Display divisible by 3 and 7 from 100 to 0
function divis3_7() {
  let kata8 = document.createElement("h3");
  kata8.innerText = "Kata 8: Display divisble by 3 & 7 from 100 to 0";
  let display100to0by3_7 = document.createElement("p");
  document.body.appendChild(kata8);
  document.body.appendChild(display100to0by3_7);
  for (i = 100; i > 0; i--) {
    if (i % 3 == 0 || i % 7 == 0) {
      display100to0by3_7.innerText += i + ", ";
    } else if (i == 3) {
      display1to100by7.innerText += i;
    }
  }
}

divis3_7();

// Kata Nine ---------------------------------------
// Display odd num divisible by 5 up to 100
function divis5() {
  let kata9 = document.createElement("h3");
  kata9.innerText = "Kata 9: Display odd numbers divisble by 5 up to 100";
  let displayBy5odd = document.createElement("p");
  document.body.appendChild(kata9);
  document.body.appendChild(displayBy5odd);
  for (i = 5; i <= 100; i += 10) {
    if (i < 95) {
      displayBy5odd.innerText += i + ", ";
    } else if (i == 95) {
      displayBy5odd.innerText += i;
    }
  }
}

divis5();

// Kata Ten ---------------------------------------
// Display all elements in sampleArray
function sampleArrayElements() {
  let kata10 = document.createElement("h3");
  kata10.innerText = "Kata 10: Display all elements of sampleArray";
  let displayWholeArray = document.createElement("p");
  document.body.appendChild(kata10);
  document.body.appendChild(displayWholeArray);
  for (i = 0; i <= sampleArray.length - 1; i++) {
    if (i < sampleArray.length - 1) {
      displayWholeArray.innerText += sampleArray[i] + ", ";
    } else if (i == sampleArray.length - 1) {
      displayWholeArray.innerText += sampleArray[i];
    }
  }
}

sampleArrayElements();

// Kata Eleven ---------------------------------------
// Display all even numbers in sampleArray
function sampleArrayEvens() {
  let kata11 = document.createElement("h3");
  kata11.innerText = "Kata 11: Display all even numbers of sampleArray";
  let displayArrayEvens = document.createElement("p");
  document.body.appendChild(kata11);
  document.body.appendChild(displayArrayEvens);
  for (i = 0; i <= sampleArray.length - 1; i++) {
    if (sampleArray[i] % 2 == 0 && i < sampleArray.length - 1) {
      displayArrayEvens.innerText += sampleArray[i] + ", ";
    } else if (sampleArray[i] % 2 == 0 && i == sampleArray.length - 1) {
      displayArrayEvens.innerText += sampleArray[i];
    }
  }
}

sampleArrayEvens();

// Kata Twelve ---------------------------------------
// Display all odd numbers in sampleArray
function sampleArrayOdds() {
  let kata12 = document.createElement("h3");
  kata12.innerText = "Kata 12: Display all odd numbers of sampleArray";
  let displayArrayOdds = document.createElement("p");
  document.body.appendChild(kata12);
  document.body.appendChild(displayArrayOdds);
  for (i = 0; i <= sampleArray.length - 1; i++) {
    if (sampleArray[i] % 2 !== 0 && i < sampleArray.length - 1) {
      displayArrayOdds.innerText += sampleArray[i] + ", ";
    } else if (sampleArray[i] % 2 !== 0 && i == sampleArray.length - 1) {
      displayArrayOdds.innerText += sampleArray[i];
    }
  }
}

sampleArrayOdds();

// Kata Thirteen ---------------------------------------
// Display all odd numbers in sampleArray
function sampleArrayBy8() {
  let kata13 = document.createElement("h3");
  kata13.innerText =
    "Kata 13: Display all numbers divisible by 8 of sampleArray";
  let displayArrayBy8 = document.createElement("p");
  document.body.appendChild(kata13);
  document.body.appendChild(displayArrayBy8);
  for (i = 0; i <= sampleArray.length - 1; i++) {
    if (sampleArray[i] % 8 == 0 && i < sampleArray.length - 1) {
      displayArrayBy8.innerText += sampleArray[i] + ", ";
    } else if (sampleArray[i] % 8 == 0 && i == sampleArray.length - 1) {
      displayArrayBy8.innerText += sampleArray[i];
    }
  }
}

sampleArrayBy8();

// Kata Fourteen ---------------------------------------
// Display the square of each element in sampleArray
function sampleArraySquares() {
  let kata14 = document.createElement("h3");
  kata14.innerText =
    "Kata 14: Display the square of all elements in sampleArray";
  let displayArraySquares = document.createElement("p");
  document.body.appendChild(kata14);
  document.body.appendChild(displayArraySquares);
  for (i = 0; i <= sampleArray.length - 1; i++) {
    if (i < sampleArray.length - 1) {
      displayArraySquares.innerText += sampleArray[i] ** 2 + ", ";
    } else if (i == sampleArray.length - 1) {
      displayArraySquares.innerText += sampleArray[i] ** 2;
    }
  }
}

sampleArraySquares();

// Kata Fifteen ---------------------------------------
// Display the sum of all numbers from 1 to 20

function printSum1to20() {
  let kata15 = document.createElement("h3");
  kata15.innerText = "Kata 15: Display the sum of all numbers 1 to 20";
  let displaySum1to20 = document.createElement("p");
  document.body.appendChild(kata15);
  document.body.appendChild(displaySum1to20);
  let sum1to20 = 0;
  for (i = 1; i <= 20; i++) {
    sum1to20 += i;
  }
  displaySum1to20.innerText = sum1to20;
}

printSum1to20();

// Kata Sixteen ---------------------------------------
// Display the sum of all numbers from sampleArray

function printSumSampleArray() {
  let kata16 = document.createElement("h3");
  kata16.innerText = "Kata 16: Display the sum of all numbers from sampleArray";
  let displaySampleArraySum = document.createElement("p");
  document.body.appendChild(kata16);
  document.body.appendChild(displaySampleArraySum);
  let sumSampleArray = 0;
  for (i = 0; i <= sampleArray.length - 1; i++) {
    sumSampleArray += sampleArray[i];
  }
  displaySampleArraySum.innerText = sumSampleArray;
}

printSumSampleArray();

// Kata Seventeen ---------------------------------------
// Display the smallest element from sampleArray

function printSmallestElement() {
  let kata17 = document.createElement("h3");
  kata17.innerText = "Kata 17: Display the smallest element from sampleArray";
  let displaySmallestElement = document.createElement("p");
  document.body.appendChild(kata17);
  document.body.appendChild(displaySmallestElement);
  let smallestElement = sampleArray[0];
  for (i = 0; i <= sampleArray.length - 1; i++) {
    if (sampleArray[i] < smallestElement) {
      smallestElement = sampleArray[i];
    }
  }
  displaySmallestElement.innerText = smallestElement;
}

printSmallestElement();

// Kata Eighteen ---------------------------------------
// Display the largest element from sampleArray

function printLargestElement() {
  let kata18 = document.createElement("h3");
  kata18.innerText = "Kata 18: Display the largest element from sampleArray";
  let displayLargestElement = document.createElement("p");
  document.body.appendChild(kata18);
  document.body.appendChild(displayLargestElement);
  let largestElement = sampleArray[0];
  for (i = 0; i <= sampleArray.length - 1; i++) {
    if (sampleArray[i] > largestElement) {
      largestElement = sampleArray[i];
    }
  }
  displayLargestElement.innerText = largestElement;
}

printLargestElement();
