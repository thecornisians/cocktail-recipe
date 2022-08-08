//On page load fill the dom with the details about the different drinks
document.addEventListener('DOMContentLoaded', loadDrink)

const section = document.getElementById('userDrinks')




function loadDrink(){
    const cocktail = document.querySelector('input').value;
    fetch(`https:/www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.drinks.forEach(drink => {
            addToDOM(drink)
        });
    })
    .catch(err => console.log(err))
}



function addToDOM(drink) {
    const div = document.createElement('div');
    div.classList.add('cocktail')


    div.innerHTML = `
    <h2>${drink.strDrink}</h2>
    <img src="${drink.strDrinkThumb}" alt="${drink.strDrink} cocktail"/>

    <div>
        <h3>Ingredients:</h3>
        <p></p>
        <h3>Instructions:</h3>
        <p>${drink.strInstructions}</p>
    </div> 
    `
    section.appendChild(div)
}


