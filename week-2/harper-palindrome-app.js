//Title: harper-palindrome-app.js
//Author: James Harper
//Date: 6/2/2023
//Description: Web 330 - Assignment 2.2

//function that creates a new date object and assigns it the format of MM/DD/YYYY.
function getTodaysDate() {
  const date = new Date();
  const current = date.toLocaleDateString('en-US');
  return current;
}
//function that determines then length of a string and returns a count based on the number of characters used.
function getLength(string) {
  return string.length;
}
//function that receives a string input, splits each character and assigns it to an array, reverses the order of the
//characters, then rejoins the array into a string.
function reverse(string) {
  const split = string.split('');
  const reverse = split.reverse();
  const convert = reverse.join('');
  return convert;
}
//function that checks to see if the original string matches the reversed string.
function isPalindrome(string) {

  const reversed = reverse(string);

  if (reversed === string) {
    return true;
  } else {
    return false;
  }
}
//function triggered by clicking the button associated with btnCheckPhrase id.
document.getElementById('btnCheckPhrase').onclick = function() {results()}
//function that publishes the results of the prior functions to the HTML DOM.
function results() {
  let txtPhrase = document.getElementById('txtPhrase').value; //retrieves the user input value.
  const assignResults = document.getElementById('assign-results'); //variable that is linked to assign-results id.
  const today = getTodaysDate(); //variable that calls getTodaysDate() function.
  const len = getLength(txtPhrase); //variable that calls getLength() function.
  const reversedPhrase = reverse(txtPhrase); //variable that calls reverse() function.
  //variable that creates HTML data using the previous functions as information sources.
  const header = `
    Date: ${today} <br>
    Original Phrase: ${txtPhrase} <br>
    Reversed Phrase: ${reversedPhrase} <br>
    Phrase Length: ${len}
  `
  //assigns the header variable to the assign-header id in the HTML DOM.
  document.getElementById('assign-header').innerHTML = header;
  //ensures that the user input value test true or false, regardless of capitalization.
  const phraseLowercase = txtPhrase.toLowerCase();
  //if else statement that checks whether the user input matches the reversed string.
  //assigns the results to the HTML DOM.
  if (isPalindrome(phraseLowercase) === true) {
    return assignResults.innerHTML = `${txtPhrase} <u><b>is</b></u> a palindrome!`;
  } else {
    return assignResults.innerHTML = `${txtPhrase} <u><b>is not</b></u> a palindrome!`;
  }
}
