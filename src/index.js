// write your code here
let addRamen = false;
const url = 'http://localhost:3000';

const addNewRamen = () => {
    const addBtn = document.querySelector('#new-ramen-button');
    const ramenForm = document.querySelector('.container')
    addBtn.addEventListener("click", () => {
        addRamen = !addRamen;
        if (addRamen) {
            ramenForm.style.display = "block";
        } else {
            ramenForm.style.display = "none";
        }
    });
}

const fetchImages = () => {
    fetch(url)
        .then(resp => resp.json())
        .then(json => {
            renderRamenImages(json)
            console.log(json)
        })
}

const renderRamenImages = (ramens) => {
    const ramenDiv = document.getElementById('ramen-menu')
    ramens.forEach(ramen => {
        const ramenCard = makeRamenCard(ramen);
    })
}

const listenForFormSubmit = () => {
    const form = document.querySelector('.add-ramen-form')
    form.addEventListener('submit', e => {
        e.preventDefault();
        const ramenName = e.target[0].value;
        const ramenRestaurantName = e.target[1].value;

        const newRamen = {
            name: ramenName,
            restaurantName: ramenRestaurantName
        };
    })
}

const makeRamenCard = ramen => {
    const ramenCard = document.createElement('div')
    const ramenName = document.createElement('h2')
    const ramenImage = document.createElement('img')
    const ramenRating = document.createElement('rating-display')
    const ramenComment = document.createElement('comment-display')

    ramenCard.className = 'card'
    ramenImage.className = 'ramen-image'
    ramenName.textContent = ramen.name,
        ramenRestaurant.textContent = ramen.restaurantName,
        ramenImage.src = ramen.image,
        ramenRating.textContent = ramen.rating,
        ramenComment.textContent = ramen.comment

    ramenCard.append(ramenName, ramenRestaurantName, ramenRating, ramenComment);
    const ramenCollection = document.getElementById('ramen-menu')
    ramenCollection.append(ramenCard)
}

const init = () => {
    addNewRamen();
    fetchImages();
    listenForFormSubmit();
}

init();
