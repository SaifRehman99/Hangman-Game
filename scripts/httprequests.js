// // callback abstraction here which is async call

// const getLetters = (wordCount , callback) => {

//     //creating API request
//     const apiRqst = new XMLHttpRequest();

//     // using event listner to listen and load the info and details
//     apiRqst.addEventListener('readystatechange', (e) => {

//         if (e.target.readyState === 4 && e.target.status === 200) {
//             let data = JSON.parse(e.target.responseText)
//             callback(undefined, data.puzzle);
//         } else if (e.target.readyState === 4) {
//             callback('Error While Fetching', undefined)
//         }

//     })

//     //where to get the request to load
//     apiRqst.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);


//     // it initiate the process
//     apiRqst.send()
// }



// Using Promises here for above code
// const getLetters = (wordCount) => new Promise((res, rej) => {


//     //creating API request
//     const apiRqst = new XMLHttpRequest();

//     // using event listner to listen and load the info and details
//     apiRqst.addEventListener('readystatechange', (e) => {

//         if (e.target.readyState === 4 && e.target.status === 200) {
//             let data = JSON.parse(e.target.responseText)
//             res(data.puzzle)
//         } else if (e.target.readyState === 4) {
//             rej('Error')
//         }

//     })

//     //where to get the request to load
//     apiRqst.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);

//     // it initiate the process
//     apiRqst.send();

// })


//using fetch API
// const getLetters = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((res) => {
//         if (res.status === 200) {
//             return res.json()

//         } else {
//             throw new Error('Error');
//         }
//     }).then((res) => {
//         return res.puzzle;
//     })
// }



// using async
const getLetters = async (wordCount) => {

    const res = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (res.status === 200) {
        const data = await res.json();
        return data.puzzle

    } else {
        throw new Error('Error Here')
    }
}





// // Here the sync call of the function
// const getPuzzelSync = () => {

//     //creating API request
//     const apiRqst = new XMLHttpRequest();

//     //where to get the request to load
//     apiRqst.open('GET', 'http://puzzle.mead.io/puzzle', false);


//     // it initiate the process
//     apiRqst.send();

//     if (apiRqst.readyState === 4 && apiRqst.status === 200) {
//         let data = JSON.parse(apiRqst.responseText)
//         return data.puzzle;
//     } else if (apiRqst.readyState === 4) {
//         throw new Error("Error While Fetching the file")
//     }

// }



// //callback to fetch the country data
// const countryData = (code, callbck) => {


//     const countryRqst = new XMLHttpRequest();

//     countryRqst.addEventListener('readystatechange', (e) => {

//         if (e.target.readyState === 4 && e.target.status === 200) {

//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === code)
//             callbck(undefined, country)

//         } else if (e.target.readyState === 4) {
//             callbck('Error While Fetching Data', undefined);
//         }
//     })

//     countryRqst.open('GET', 'http://restcountries.eu/rest/v2/all');
//     countryRqst.send();

// }



// Using Promises for above
// const countryData = (code) => new Promise((res, rej) => {

//     const countryRqst = new XMLHttpRequest();

//     countryRqst.addEventListener('readystatechange', (e) => {

//         if (e.target.readyState === 4 && e.target.status === 200) {

//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === code)
//             res(country)

//         } else if (e.target.readyState === 4) {
//             rej('Error While Fetching Data');
//         }
//     })

//     countryRqst.open('GET', 'http://restcountries.eu/rest/v2/all');
//     countryRqst.send();
// })



// Using Fetch here
// const countryData = (code) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((res) => {
//         if (res.status === 200) {
//             return res.json();

//         } else {
//             throw new Error('Error');
//         }
//     }).then((res) => country = res.find((country) => country.alpha2Code === code))
// }


// const getLocation = () => {
//     return fetch('https://ipinfo.io/json?token=a1e3271d7f11a1').then((res) => {
//         if(res.status === 200){
//             return res.json()

//         }
//         else{
//             throw new Error ('Error Here');
//         }
//     })
// }





// using async here
const countryData = async (code) => {
    const res = await fetch('http://restcountries.eu/rest/v2/all')
    if (res.status === 200) {

        let data = await res.json();

        return data.find((country) => country.alpha2Code === code)

    } else {
        throw new Error('Error');
    }

}

// .then((res) => country = res.find((country) => country.alpha2Code === code))



// using async 
const getLocation = async () => {
    let res = await fetch('https://ipinfo.io/json?token=a1e3271d7f11a1')
    if (res.status === 200) {
        return res.json();
    } else {
        throw new Error('Error Here');
    }

}