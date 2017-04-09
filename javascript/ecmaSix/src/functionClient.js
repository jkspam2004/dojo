/* arrow function. anonymous function with e (event) as input parameter */
function parentFunction2(name){
    this.name = name;
    let h1 = document.createElement("h1")
    h1.innerText = "Random Name";
    document.body.appendChild(h1);
    h1.addEventListener("click", e => {
        h1.innerText = this.name;
    })
}

let y = new parentFunction2("Bob");
