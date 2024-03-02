//Function to check if a word is a palindrome
function palindromeCheck() {
    var word, copy, i;
    //Prompt user to enter a word
    word = prompt("Enter a word:");
    //Check if the user clicked "Cancel" or closed the prompt
    if (word == null) {
        //Exit the function if no input is provided
        return;
    }
    //Convert the input to lowercase
    word = word.toLowerCase();
    //Start an empty string for the reversed word
    copy = "";
    //Start a counter for the loop
    i = 0;
    //Loop to reverse the input word
    while (i < word.length) {
        copy = word.charAt(i) + copy;
        i = i + 1;
    }
    //Check if the original and reversed words are the same
    if (word == copy) {
        //Display a message if it's a palindrome
           alert(word + " is a palindrome!");
    } else {
        //Display a message if it's not a palindrome
            alert(word + " is not a palindrome!");
    }
    //Ask the user if they want to continue
    var continueInput = confirm("Do you want to continue?")
    if(!continueInput) {
        //If the user clicks "Cancel" or closes the prompt, exit the loop
        //Clear the output
        document.getElementById("divOutput").innerHTML = "";
    } else {
        //Recursively call the function to check the next word
        palindromeCheck();
    }
}