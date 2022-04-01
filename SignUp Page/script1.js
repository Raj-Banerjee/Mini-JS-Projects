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

        
        let items = ["Parathe Sharathe with", "Spices and Immunity with", "Postman Vegetables with"];
        let names = ["Chef Archana Doshi", "Nutrition expert Manasa Rajan", "Chef Jason D'Souza"];

        for (let i=0; i<names.length; i++){
            
            let p3 = document.createElement('p');
            let p4 = document.createElement('P');
            p3.setAttribute("class",'p3');
            p4.setAttribute("class",'p4');
            let text3 = document.createTextNode(items[i]);
            let text4 = document.createTextNode(names[i]);
            p3.appendChild(text3);
            p4.appendChild(text4);
            outerbox.appendChild(p3);
            outerbox.appendChild(p4);
            
            let ruler = document.createElement('div');
            ruler.setAttribute('id','ruler');
            outerbox.append(ruler);

