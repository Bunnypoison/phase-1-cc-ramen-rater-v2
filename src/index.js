
const url = 'http://localhost:3000/ramens'
const ramenMenu = document.querySelector('#ramen-menu')
const ramenImage = document.querySelector('.detail-image')
const ramenName = document.querySelector('.name')
const ramenRestaurant = document.querySelector('.restaurant')
const ramenRating = document.querySelector('#rating-display')
const ramenComment = document.querySelector('#comment-display')
const ramenForm = document.querySelector('#new-ramen')


function getRamens() {
  return fetch(url)
  .then(resp => resp.json())
  .then(ramensData => {
    ramensData.forEach(ramen => displayRamens(ramen))
  })
  .catch(err => console.log(err))

}


const addSubmitListener = () => ramenForm.addEventListener('submit', handleFormSubmit);
  
const handleFormSubmit = e => { 
  e.preventDefault()
  const newRamen = {
    name: document.querySelector('#new-name').value,
    restaurant: document.querySelector('#new-restaurant').value,
    image: document.querySelector('#new-image').value,
    rating: document.querySelector('#new-rating').value,
    comment: document.querySelector('#new-comment').value,
  }
  displayRamens(newRamen);
}

const displayRamens = (ramen) => {
  const img = document.createElement('img')
  img.src = ramen.image
  img.alt = ramen.name
  img.className = "ramen-menu-items"
  img.addEventListener("click", e => handleClick(ramen)) 
  ramenMenu.append(img)
};

const handleClick = (ramen) => {
  ramenImage.src = ramen.image
  ramenImage.alt = ramen.name
  ramenName.innerText = ramen.name
  ramenRestaurant.innerText = ramen.restaurant
  ramenRating.innerText = ramen.rating
  ramenComment.innerText = ramen.comment
};


const main = () => {
 
  getRamens();
  // Invoke addSubmitListener here
  addSubmitListener();
}

main()
// Export functions for testing
// export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// };
