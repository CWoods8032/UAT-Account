//Get the image element
const imageMovement = document.getElementById('meme');
//Initialize the horizontal position
let positionX = 0;
//Variable to store the animation request id
let animationId = null;

//Function to animate the image horizontally
function animateImage() {
    //Move the image one pixel to the right
    positionX += 1;
    //Apply the new position
    imageMovement.style.left = positionX + 'px';
    //Request the next animation frame
    animationId = requestAnimationFrame(animateImage);
}
//Function to start the image animation
function startImage() {
    //Check if the animation is not already running
    if (!animationId) {
        //Start the animation
       animateImage();
    }
}
//Function to stop the image animation
function stopImage() {
    //Check if the animation is running
    if (animationId) {
        //Stop the animation
        cancelAnimationFrame(animationId);
        //Reset animation id
        animationId = null;
    }
}