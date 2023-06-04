//Title: harper-palindrome-app.js
//Author: James Harper
//Date: 6/2/2023
//Description: Web 330 - Assignment 2.2

function getTodaysDate() {
  const date = new Date();
  const current = date.toLocaleDateString('en-US');
  return current;
}

function getLength(string) {
  return string.length;
}

function reverse(string) {
  const split = string.split('');
  const reverse = split.reverse();
  const convert = reverse.join('');
  return convert;
}

function isPalindrome(string) {

  const reversed = reverse(string);

  if (reversed === string) {
    return true;
  } else {
    return false;
  }
}

document.getElementById('btnCheckPhrase').onclick = function() {results()}

function results() {
  let txtPhrase = document.getElementById('txtPhrase').value;
  const assignResults = document.getElementById('assign-results');
  const today = getTodaysDate();
  const len = getLength(txtPhrase);
  const reversedPhrase = reverse(txtPhrase);
  const header = `
    Date: ${today} <br>
    Original Phrase: ${txtPhrase} <br>
    Reversed Phrase: ${reversedPhrase} <br>
    Phrase Length: ${len}
  `
  document.getElementById('assign-header').innerHTML = header;


  const phraseLowercase = txtPhrase.toLowerCase();

  if (isPalindrome(phraseLowercase) === true) {
    return assignResults.innerHTML = `<b>${txtPhrase} <u>is</u> a palindrome!</b>`;
  } else {
    return assignResults.innerHTML = `<b/>${txtPhrase} <u>is not</u> a palindrome!</b>`;
  }
}
