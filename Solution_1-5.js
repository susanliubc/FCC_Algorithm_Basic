/* 1. Reverse a String */

// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

//Solution 1 built-in reverse method
function reverseString(str) { 
    return str.split('').reverse().join('');
}

reverseString("hello");

//Solution 2 recursive method
function reverseString(str) {
    return str===''? '':reverseString.slice(1) + str.charAt(0);
}

/* 2. Factorialize a Number */
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

// Solution 1 Although not define num===0, but the default a=1 bypass this situation and return the right result
function factionalize(num) {
    let a=1, i=1;
    while(i<=num) {
        a*=i;
        i++;
    }
    return a;
}

factorialize(5);

// Solution 2 recursive method
function factionalize(num) {
    if(num===0) {
        return 1;
    } else if(num > 0) {
        return num * factionalize(num-1);
    }
}

//Solution 3
function factionalize(num) {
    let result = num;
    if(num===0 || num === 1) {
        return 1;
    }
    while(num > 1) {
        num--;
        result *= num;
    }
    return result;
}

/* 3.Find the Longest Word in a String */

// Return the length of the longest word in the provided sentence.

// Your response should be a number.

//Solution 1 split() & sort()
function findLongestWord(str) {
    return str.split('').sort((a,b) => b.length-a.length)[0].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Solution 2 reduce()
function findLongestWord(str) {
    return str.split('').reduce((a,b) => Math.max(a, b.length),0);
}

//Solution 3 reduce()
function findLongestWordLength(str) {
    const long=str.split('').reduce((a,b) => {
        return a.length<b.length? b: a;
    });
    return long.length;
}

/* 4. Return Largest Numbers in Arrays */

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]

//Solution 1 map() reduce()

function largestOfFour(arr) {
    return arr.map(item => {
        return item.reduce((a,b) => Math.max(a,b))
    });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Solution 2 map() apply()
function largestOfFour(arr) {
    return arguments.map(item => Math.max.apply(null, item));
}

/* 5. Confirm the Ending */

// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method,which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

//Solution 1 endWith()
function confirmEnding(str, target) {
    return str.endsWith(target);
}

confirmEnding("Bastian", "n");

//Solution 2 slice()
function confirmEnding(str, target) {
    return str.slice(str.length-target.length)===target?true:false;
}

//Solution 2 substr()
function confirmEnding(str, target) {
    return str.substr(str.length-target.length)===target?true:false;
}
