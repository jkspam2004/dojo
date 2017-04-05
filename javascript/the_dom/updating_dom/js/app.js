/* app.js */

/* set up our variables */
const eventButton = document.getElementById("events");
const styleButton = document.getElementById("styles");
const propButton = document.getElementById("properties");
const dummyText = document.getElementById("dummy-text");
const mainDiv = document.getElementById("main");


/* createText(): appends p element to div
 * input: key, content, div
 * returns: undefined
*/
function createText(key, content, div) {
    //console.log(`typeof content: ${typeof content} for ${key}`);
    if (typeof content == 'object' || typeof content == 'function' || !(isNaN(key))) { return; }
    let p = document.createElement('p');
    p.innerText = `${key}:${content}`;
    if (content != "") { 
        p.style.color = "green";
    }
    div.appendChild(p);
}

/* showProperties(): calls createText when Atributes button clicked
 *
 */
propButton.addEventListener("click", showProperties);
function showProperties() {
    mainDiv.innerHTML = "";
    createText("innerHTML", dummyText.innerHTML, mainDiv)
    createText("outerHTML", dummyText.outerHTML, mainDiv); 
    createText("id", dummyText.id, mainDiv);
    createText("hidden", dummyText.hidden, mainDiv);
}

/* addStyles(): changes style of dummyText upon hovering over Style button
 */
styleButton.addEventListener("mouseenter", addStyles);
styleButton.addEventListener("mouseleave", removeStyles);
function addStyles(){
    dummyText.style.color = "#474c4f";
    dummyText.style.border = "1px solid black";
    dummyText.style.fontSize = "35px";
    dummyText.style.backgroundColor = "#fafafa";
}
function removeStyles(){
    dummyText.removeAttribute("style");
}

/* showStyles()
 *
 */
styleButton.addEventListener("click", showStyles);
function showStyles(){
    let styles = dummyText.style;
    //console.log("styles ", styles);
    mainDiv.innerHTML = '';
    for(var style in styles){
        createText(style, styles[style], mainDiv);
        console.log(`style: ${style} : ${styles[style]}`);
    }
}
