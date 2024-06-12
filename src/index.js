// index.js
document.addEventListener(DomContentLoaded,function(){});

const targetUl = document.querySelector('ul#list')




getData ('http://localhost:3000')



//fetch
//arrow let myFunction = (a, b) => a * b;
fetch (url)
.then(resp=> resp .json())   //! problem here expected '' ??? fixed i forgot the . before json
.then(renderRamens => renderRamens. forEach(displayRamens)); //should run the renderRoman function that and pass it through the json data that was fetched
try {error => console.log (error)} //asking for a "try"??
catch {error => console.log (error)}


targetUl.append(li)   //put the ramen on the page


function displayRamens (ramenMenu) {
const li = document.createElement(li)
const displayRamen = ["ramenMenu"] 
li.textContent = ramenMenu
li.addEventListener ('click',function(event)
 const img = document.createElement ('img')   //add elements to the click function
img.alt = displayRamen
img.src = ramenMenu.img
)
}

const ramenMenuDiv = getElementById('romen-menu')
const ramenImage = document.createElement('img');
 ramenImage.src = ramen.img
ramenMenuDiv.append(ramenImage); // send image to the host

 function createNewRamen( element) {
 function preventDefault ();
 

 const newRamen = {
name: element targetName Value
rating: element targetRating Value
restaurant: element targetResturant value
image: element targetImage value
comment: element target ['new-comment'] value
 };

 }


// Callbacks
function handleClick(ramen) {   //<button onclick="myFunction()">Click me</button>
  <button onclick = Function (ramen) ">Click me< </button">
}

const addSubmitListener = () => {
 const addSubmitListener =() =>{ document. getElementById('myButton'); button.
}}



const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
