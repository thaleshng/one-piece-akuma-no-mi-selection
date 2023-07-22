const fruits = document.querySelectorAll('.fruit');

fruits.forEach((fruit) => {
    fruit.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo ({top: 0, behavior: 'smooth'});
        }

        fruitSelectionRemove();
        fruit.classList.add('selected');

        changeImageFruitDraft(fruit);

        changeNameFruitDraft(fruit);

        changeDescriptionFruitDraft(fruit);
    })
})


function changeDescriptionFruitDraft(fruit) {
    const fruitDescription = document.getElementById('fruit-description');
    fruitDescription.innerText = fruit.getAttribute('data-description');
}

function changeNameFruitDraft(fruit) {
    const fruitName = document.getElementById('fruit-name');
    fruitName.innerText = fruit.getAttribute('data-name');
}

function changeImageFruitDraft(fruit) {
    const fruitDraftImage = document.querySelector('.fruit-draft');
    const fruitId = fruit.attributes.id.value;
    fruitDraftImage.src = `./src/images/${fruitId}.png`;
}

function fruitSelectionRemove() {
    const fruitSelected = document.querySelector('.selected');
    fruitSelected.classList.remove('selected');
}

