/* 6. Repeat a String */

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a        positive number.

//Solution 1 Built-in method repeat()

function repeatStringNumTimes(str, num) {
    return num >0 ? str.repeat(num): "";
}

repeatStringNumTimes("abc", 3);

//Solution 2 reursive method
function repeatStringNumTimes(str,num) {
    if(num<0) {
        return '';
    } else if(num===1) {
        return str;
    } else {
        return str + repeatStringNumTimes(str,num-1);
    }
}

//Solution 3
function repeatStringNumTimes(str, num) {
    let result="";
    while (num>0) {
       result += str;
       num--;
   } 
  return result;
}

/* 7. Truncate a String */

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the      truncated string with a ... ending.

function truncateString(str, num) {
    while (str.length > num.length || str.length > num) {
         return str.substring(0,num) + "...";
     }
    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

/* 8. Finders Keepers */

// Create a function that looks through an array (first argument) and returns the first element in the array that passes a       truth test (second argument). If no element passes the test, return undefined.

function findElement(arr, func) {
    return arr.filter(func)[0];
} 

findElement([1, 2, 3, 4], num => num % 2 === 0);

function findElement(arr, func) {
    return arr.filter(ele => func(ele))[0];
} 

/* 9. Boo who */

// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
    return (bool=== true || bool===false) ? true: false;
}

booWho(null);

/* 10. Title Case a Sentence */

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

//Solution 1 map() slice() join()
function titleCase(str) {
    return str.toLowerCase().split('')
        .map(e => e[0].toUpperCase() + e.slice(1))
        .join('');
}

titleCase("I'm a little tea pot");

//Solution 2 map() replace() join()
function titleCase(str) {
    return str.toLowerCase().split('')
        .map(e => e.replace(e[0], e[0].toUpperCase()))
        .join('');
}
