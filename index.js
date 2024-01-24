document.querySelector('.bt').addEventListener('click', () => {
    document.querySelector("#navBar").style.marginLeft = '-3vw'

});


document.querySelector('.btMenu').addEventListener('click', () => {
    document.querySelector("#navBar").style.marginLeft = '-3vw'

})



document.querySelector('#close').addEventListener('click', () => {
    document.querySelector("#navBar").style.marginLeft = '-100vw'

});


document.querySelector('.main').addEventListener('click', (event) => {
    if(event.target.id !== "bt" && event.target.textContent !== "menu"){
        document.querySelector("#navBar").style.marginLeft = '-100vw'
    }
    

});


document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault()
    const celular = document.querySelector('#cel');
    const email = document.querySelector('#email')

    if(celular.value !== "" && email.value !== ""){
        alert('Pedido Aceito Com Sucesso!')
    }else{
        alert(' Forneça os dados Por favor ')
    }
});

document.querySelector('#img-content-open ').addEventListener('click', () => {
    let card = document.querySelector('#content-card')

    if(card.style.display === 'none'){
        card.style.display = 'block'
    }
    else{
        (card.style.display === 'block')
        card.style.display = 'none'
    }
})

document.querySelector('#img-content-open-2 ').addEventListener('click', () => {
   
    let cardTwo = document.querySelector('#content-card-two')

    if(cardTwo.style.display === 'none'){
        cardTwo.style.display = 'block'
    }
    else{
        (cardTwo.style.display === 'block')
        cardTwo.style.display = 'none'
    }
    
});


document.querySelector('#img-content-open-3 ').addEventListener('click', (event) => {
    event.target.style.cursor = 'pointer'
    let cardThree = document.querySelector('#content-card-three')

    if(cardThree.style.display === 'none'){
        cardThree.style.display = 'block'
    }
    else{
        (cardThree.style.display === 'block')
        cardThree.style.display = 'none'
    }
    
});


document.querySelector('#img-content-open-4 ').addEventListener('click', (event) => {
    event.target.style.cursor = 'pointer'
    let cardFour = document.querySelector('#content-card-four')

    if(cardFour.style.display === 'none'){
        cardFour.style.display = 'block'
    }
    else{
        (cardFour.style.display === 'block')
        cardFour.style.display = 'none'
    }
    
});