//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.getElementById('hd1').innerText = data.drinks[0].strDrink
      document.getElementById('img1').src = data.drinks[0].strDrinkThumb
      document.getElementById('hd2').innerText = data.drinks[1].strDrink
      document.getElementById('img2').src = data.drinks[1].strDrinkThumb
      document.getElementById('hd3').innerText = data.drinks[2].strDrink
      document.getElementById('img3').src = data.drinks[2].strDrinkThumb
      document.getElementById('hd4').innerText = data.drinks[3].strDrink
      document.getElementById('img4').src = data.drinks[3].strDrinkThumb
      document.getElementById('hd5').innerText = data.drinks[4].strDrink
      document.getElementById('img5').src = data.drinks[4].strDrinkThumb
      document.getElementById('hd6').innerText = data.drinks[5].strDrink
      document.getElementById('img6').src = data.drinks[5].strDrinkThumb
      document.getElementById('hd7').innerText = data.drinks[6].strDrink
      document.getElementById('img7').src = data.drinks[6].strDrinkThumb
      document.getElementById('hd8').innerText = data.drinks[7].strDrink
      document.getElementById('img8').src = data.drinks[7].strDrinkThumb
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

