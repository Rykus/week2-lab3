// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const moviesDirector = moviesArray.map((elemento) => {
        return elemento.director;
    });
    return moviesDirector
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    counter = 0 
    const modif = moviesArray.filter((tag) =>{
        return tag.director == 'Steven Spielberg' 
    })
    //console.log(modif)

    const modif2 = modif.filter((elemento) =>{
        return elemento.genre.includes('Drama')
    })
    //console.log(modif2)

    return modif2.length
}
    



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      } else {
        let result = moviesArray.reduce((currentValue, previousValue) => {
          if (!previousValue.score) {
            return currentValue;
          } else {
            return currentValue + previousValue.score;
          }
        }, 0);
        return parseFloat((result / moviesArray.length).toFixed(2));
      }
    }    

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      } 
    const modif = moviesArray.filter((tag) =>{         
        return tag.genre.includes('Drama')  
    })
    if (modif.length === 0){
        return 0;
    }
        //console.log(modif)
        let result = modif.reduce((currentValue, previousValue) => {
          if (!previousValue.score) {
            return currentValue;
          } else {
            return currentValue + previousValue.score;
          }
        }, 0);
        return parseFloat((result / modif.length).toFixed(2));
      

    }    



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const movies = moviesArray.map((elemento) => elemento);
    let AAA = movies.sort((despues,antes) =>{
        if (despues.year == antes.year){
            if(despues.title > antes.title) return 1 
            return -1
        } 
        return (despues.year - antes.year)
 })
 console.log(AAA)
 return AAA
 }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
     
    
    let movies = moviesArray.sort((a,b) =>{
        
            if(a.title > b.title) return 1 
            return -1
              
 })
    const AAA = movies.slice(0,20).map((elemento) => {
        return elemento;
});

    const BBB = AAA.map((elemento) => {
    return elemento.title;  
    })

    return BBB


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
