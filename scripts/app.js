//getting the refrences
const textEl = document.querySelector('#text');
const guessEl = document.querySelector('#noOfGuess');

//defining the instances
let game1;

// //event listner to add letter when a key was pressed
window.addEventListener('keypress', (e) => {

    //converting the press key code into letter
    let guess = String.fromCharCode(e.charCode);

    game1.makeGuess(guess);
    render()
})


const render = () => {

    textEl.textContent = game1.getGuess
    guessEl.textContent = game1.message;

}
const startGame = async () => {
    let puzzle = await getLetters('2');
    game1 = new Hangman(puzzle, 5);
    render()

}


document.querySelector('#reset').addEventListener('click', startGame);
startGame()


//using the promise by fetch
// getLetters('5').then((puzzle) => {
//     console.log(puzzle)

// }).catch((errr) => {
//     console.log(`Error: ${errr}`)
// })



//here the callback function was defined,it takes two arguments one for success and other for reject
// getLetters('1', (err, item) => {
//     if (err) {
//         console.log(`Error : ${err}`);

//     } else {
//         console.log(item);
//     }
// })


//Using the promise
// countryData('PK').then((res) => {
//     console.log(`Country Name : ${res.name}`)
// }).catch((err) => {
//     console.log(`Error:${err}`);
// })


//Using the Callbacks
// countryData('US', (err, item) => {
//     if (err) {
//         console.log(`Error : ${err}`);

//     } else {
//         console.log(`Country Name : ${item.name }`)

//     }
// })




// promise channing here

// getLocation().then((res) => {
//     return countryData(res.country)
// }).then((res) => {
//     console.log(`Country Name : ${res.name}`)
// }).catch((err) => {
//     console.log('Error!');
// })

//====================================================SYNC CALL==============================================//

// //this is a sync work
// const syncCall = getPuzzelSync();
// console.log(syncCall);

// //this console print after because of sync call
// console.log('Do Something Else');