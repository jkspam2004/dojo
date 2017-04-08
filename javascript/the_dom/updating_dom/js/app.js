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
        //console.log(`style: ${style} : ${styles[style]}`);
    }
}

/* eventTest()
 *
 */
eventButton.addEventListener("click", eventTest);
eventButton.addEventListener("mouseenter", eventTest);
eventButton.addEventListener("mouseleave", eventTest);
eventButton.addEventListener("dblclick", eventTest);
function eventTest2(){
    mainDiv.innerHTML = "";
    console.log("e:", this);
    createText("type", this.type, mainDiv);
    createText("clientX", this.clientX, mainDiv);
    createText("clientY", this.clientY, mainDiv);
    mainDiv.innerHTML += "timeStamp is milliseconds that have passed since the page was loaded"
    createText("timeStamp", this.timeStamp, mainDiv);
    createText("target innerHTML", this.target.innerHTML, mainDiv);
    mainDiv.innerHTML += ` target outerHTML ${this.target.outerHTML}`;
}

function eventTest(e){
    mainDiv.innerHTML = "";
    console.log("e:", e);
    createText("type", e.type, mainDiv);
    createText("clientX", e.clientX, mainDiv);
    createText("clientY", e.clientY, mainDiv);
    mainDiv.innerHTML += "timeStamp is milliseconds that have passed since the page was loaded"
    createText("timeStamp", e.timeStamp, mainDiv);
    createText("target innerHTML", e.target.innerHTML, mainDiv);
    mainDiv.innerHTML += ` target outerHTML ${e.target.outerHTML}`;
}
