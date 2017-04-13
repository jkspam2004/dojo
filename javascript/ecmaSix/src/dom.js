/* dom.js */

/* var insertedNode = parentNode.insertBefore(newNode, referenceNode); */
class Dom {
    constructor(defaultColor, secondaryColor){
        this.element = document.createElement("div");
        this.defaultColor = defaultColor;
        this.secondaryColor = secondaryColor;

        this.addStyle()
        this.addClickEvent()
        this.addHoverInEvent()
        this.addHoverOutEvent()
        this.addToHtmlBody()
    }
    /* set box background color to default */
    addStyle(){
        this.element.style.border = "1px solid black";
        this.element.style.height = "200px";
        this.element.style.width = "200px";
        this.element.style.backgroundColor = this.defaultColor;
        this.element.style.margin = "0px auto";
        this.element.style.textAlign = "center";
        this.element.style.lineHeight = "180px";
    }
    /* clicking on box alerts the box has been clicked */
    addClickEvent(){
        this.element.addEventListener("click", () => {
            alert("Div has been clicked");
        });
    }
    /* on hover in, box background color is blue */
    addHoverInEvent(){
        this.element.addEventListener("mouseenter", () => {
            this.element.style.backgroundColor = this.secondaryColor;
        });
    }
    /* on hover out, box background color is pink */
    addHoverOutEvent(){
        this.element.addEventListener("mouseleave", () => {
            this.element.style.backgroundColor = this.defaultColor;
        });
    }
    /* add div to body */
    addToHtmlBody(){
        this.element.appendChild(document.createTextNode("Div"));
        document.body.insertBefore(this.element, document.body.firstChild);
    }
}
let x= new Dom("pink", "blue");
