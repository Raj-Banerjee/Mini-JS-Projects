let container = document.getElementById("container");

let API_KEY = 'c371194';

async function findmovie(){
    let movie = document.getElementById("movie").value;
    let res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}`);
    let data = await res.json();
    console.log(data);
}