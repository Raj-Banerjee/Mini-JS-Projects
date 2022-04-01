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

        body.appendChild(outerbox);
        outerbox.append(p1,p2);
        // p1.textContent("Today, Sun, 26th Apr");
        // p2.textContent("Schedule - 7AM Onwards");
        let text1= document.createTextNode("Today, Sun, 26th Apr");
        let text2= document.createTextNode("Schedule - 7AM Onwards");
        p1.appendChild(text1);
        p2.appendChild(text2);
