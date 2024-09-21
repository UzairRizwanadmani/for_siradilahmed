function pa() {
    // input
    var typeyinput= document.getElementById('ifield').value;
    // reverse
    var checkingofplin = typeyinput.split('').reverse().join('');
    // Answer
    document.getElementById('ans').textContent =  typeyinput === checkingofplin ? `"${typeyinput}" Is A Palindrome!` : `"${typeyinput}" Is Not A Palindrome.`;
   }
