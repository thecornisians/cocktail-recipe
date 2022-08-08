    document.querySelector('button').addEventListener('click', getDrink)

    function getDrink(){
        const drink = document.querySelector('input').value
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            document.querySelector('.header').innerText = data.strDrink
            document.querySelector('#images').src = data.strDrinkThumb
            document.querySelector('#description').innerText = data.strInstructions
    
           
        })
        .catch(err => console.log(`error ${err}`))

    }
 