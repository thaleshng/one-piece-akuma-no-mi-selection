/*

  O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

    OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

        passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        passo 2 - alterar a imagem do personagem grande
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem grande

*/

// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
//passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const fruits = document.querySelectorAll('.fruit');

// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

fruits.forEach((fruit) => {
    fruit.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo ({top: 0, behavior: 'smooth'});
        }

        // passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

        characterSelectionRemove();
        fruit.classList.add('selected');

        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        
        // passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        changeImageCharacterDraft(fruit);

        // passo 3 - alterar o nome do personagem grande

        changeNameCharacterDraft(fruit);

        // passo 4 - alterar a descrição do personagem grande

        changeDescriptionCharacterDraft(fruit);
    })
})


function changeDescriptionCharacterDraft(fruit) {
    const fruitDescription = document.getElementById('fruit-description');
    fruitDescription.innerText = fruit.getAttribute('data-description');
}

function changeNameCharacterDraft(fruit) {
    const fruitName = document.getElementById('fruit-name');
    fruitName.innerText = fruit.getAttribute('data-name');
}

function changeImageCharacterDraft(fruit) {
    const fruitDraftImage = document.querySelector('.fruit-draft');
    // passo 2 - alterar a imagem do personagem grande
    const fruitId = fruit.attributes.id.value;
    fruitDraftImage.src = `./src/images/${fruitId}.png`;
}

function characterSelectionRemove() {
    const fruitSelected = document.querySelector('.selected');
    fruitSelected.classList.remove('selected');
}

