let container = document.getElementById("container");

let API_KEY = "c371194";

async function findmovie() {
  let movie = document.getElementById("movie").value;
  let res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}`);
  let data = await res.json();
  //   console.log(data);
  displayData(data);
}

// {
//     "Title": "The Avengers",
//     "Year": "2012",
//     "Rated": "PG-13",
//     "Released": "04 May 2012",
//     "Runtime": "143 min",
//     "Genre": "Action, Adventure, Sci-Fi",
//     "Director": "Joss Whedon",
//     "Writer": "Joss Whedon, Zak Penn",
//     "Actors": "Robert Downey Jr., Chris Evans, Scarlett Johansson",
//     "Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
//     "Language": "English, Russian, Hindi",
//     "Country": "United States",
//     "Awards": "Nominated for 1 Oscar. 38 wins & 80 nominations total",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
//     "Ratings": [
//         {
//             "Source": "Internet Movie Database",
//             "Value": "8.0/10"
//         },
//         {
//             "Source": "Rotten Tomatoes",
//             "Value": "91%"
//         },
//         {
//             "Source": "Metacritic",
//             "Value": "69/100"
//         }
//     ],
//     "Metascore": "69",
//     "imdbRating": "8.0",
//     "imdbVotes": "1,350,699",
//     "imdbID": "tt0848228",
//     "Type": "movie",
//     "DVD": "25 Sep 2012",
//     "BoxOffice": "$623,357,910",
//     "Production": "N/A",
//     "Website": "N/A",
//     "Response": "True"
// }

function displayData(data) {
  //   data.forEach(function (product) {
  let productcard = document.createElement("div");

  let Poster = document.createElement("img");
  Poster.src = data.Poster;

  let Title = document.createElement("p");
  Title.textContent = data.Title;

  let year = document.createElement("p");
  year.textContent = data.Year;

  productcard.append(Poster, Title, year);

  let container = document.getElementById("container");
  // console.log(container);
  // container.innerHTML = "hhhhhhhhhhhh";
  container.append(productcard);
  // console.log(container);
  //   });
}
