function totalBirdCount(array){
let birdsCounted = 0
    for (let i = 0; i< array.length; i++){
       birdsCounted += array[i];
    }
    console.log(birdsCounted)
    return birdsCounted
}

totalBirdCount([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]) 

