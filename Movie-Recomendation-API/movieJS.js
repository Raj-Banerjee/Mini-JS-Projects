let container = document.getElementById("container");

let API_KEY = 'c371194';

async function findmovie(){
    let movie = document.getElementById("movie").value;
    let res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}`);
    let data = await res.json();
    console.log(data);
}


function displayData(data) {
    data.forEach(function (product){
        let productcard = document.createElement("div");

        let img = document.createElement("img");
        img.src = product.poster;

        let title = document.createElement("p");
        title.textContent = product.title;
        let price = document.createElement("p");
        price.textContent = product.price;

        productcard.append(img,title,price);
        let container = document.getElementById("container");
        container.appendChild(productcard);
    });
}