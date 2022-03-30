let btn = document.getElementById("button");
    let body = document.getElementById("body");
    // window.addEventListener('load',displaypage);   //Window Loading syntax
    btn.addEventListener('click',displaypage);   //Page setup

    function displaypage(){
        console.log("Working")
        let outerbox = document.createElement('div');
        outerbox.setAttribute("id",'box1');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
