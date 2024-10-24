// Write your code here!

// Remove the <main> element with the id main
document.getElementById('main').remove();

// create a new <h1> element
const newHeader = document.createElement('h1');

// Assign an id of victory to the new header
newHeader.id = 'victory';

// Set the text content of the new header
newHeader.textContent = 'Brandon Ogola is the champion';

// Append the new header to the body
document.body.appendChild(newHeader);