//** Get references to the text area and button
const textArea = document.getElementById("myTextArea");
const sampleTextButton = document.getElementById("sampleTextButton");

let typingTimer; //** Variable to hold the timer for detecting typing

//** Function to show sample text and hide the button
sampleTextButton.addEventListener("click", () => {
    //** Add your sample text here
    const sampleText = "This is a sample text paragraph.";
    
    //** Append the sample text to the text area
    textArea.value = sampleText;
    
    //** Hide the button
    sampleTextButton.style.display = "none";
    
    //** Clear the typing timer if it's active
    clearTimeout(typingTimer);
});

//** Event listener to show the button when text is cleared
textArea.addEventListener("input", () => {
    if (textArea.value === "") {
        //** Set a timer to hide the button after 1 second of inactivity
        typingTimer = setTimeout(() => {
            sampleTextButton.style.display = "block";
        }, 1000);
    } else {
        //** If the user is typing, hide the button immediately
        sampleTextButton.style.display = "none";
    }
});

