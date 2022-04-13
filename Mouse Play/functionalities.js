let box1 = document.getElementById("box1");
    let innerbox = document.getElementById("innerbox");
    let button = document.getElementById("submitbutton");
    
    function changeColor(){
        button.style.backgroundColor = "green";
    }
    
    function defaultcolor(){
        button.style.backgroundColor = "yellow";

    }
    
    box1.addEventListener('mouseenter',changeColor);
    box1.addEventListener('mouseleave',defaultcolor);