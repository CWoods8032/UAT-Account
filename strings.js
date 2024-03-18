//For assignment 3.1: Palindrome Checker
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
// For assignment 3.2: User Input Validation
function validateForm(){
    // Made values from input fields
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const zipCode = document.getElementById("zipcode").value;

    // Combine first name and last name
    var fullName = firstName + " " + lastName;

    // Check if the full name has more than 20 characters
    if (fullName.length > 20) {
        alert("Your full name is greater than 20 characters! Please Retry!");
        return;
    }

    // Check if the zip code has exactly 5 digits
    if (zipCode.length > 5) {
        alert("Zip code can only be 5 digits! Please Retry!");
        return;
    }

    if(zipCode.length < 5) {
       alert("Zip code can not be less than 5 digits! Please Retry!");
       return;
    }

    // If all validations pass, display a secret message
    else{
        alert("Welcome to the Leaderboard!")
    }

}