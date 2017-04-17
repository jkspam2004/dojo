
// getElementById. returns string
var seeMore = document.getElementById("seeMore");
console.log(`seeMore byId: ${seeMore}`);

// getElementsByClassName. returns list
var pTags = document.getElementsByClassName("content");
for (var i = 0; i < pTags.length; i++) {
    console.log(`ptags byClassName: ${pTags[i]}`);
}

// getElementsByTagName. returns list 
var h1Tags = document.getElementsByTagName("h1");
for (var i = 0; i < h1Tags.length; i++) {
    console.log(`h1Tags byTagName ${h1Tags[i]}`);
}

// add click event listener to seeMore button
seeMore.addEventListener("click", seeMoreContent);
function seeMoreContent() {
    console.log(this); // this refers to the seeMore button <button id="seeMore">See More</button>
    console.log("See more content");

    let newContent = document.createElement("p");
    let text = document.createTextNode("this will go in p tag");
    newContent.appendChild(text);
    this.parentElement.appendChild(newContent);
}

var ulContent = document.getElementById('ulContent');
//ulContent.addEventListener('click', fillUnorderedList);
fillUnorderedList();
function fillUnorderedList() {
    console.log("clicked");
    let contentArray = [
        "This is some content that will be seen using javascript",
        "Also some content, that we will be adding to our ul tag",
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    ]

    let ul = this;
    contentArray.forEach(function (i) {
        let newContent = document.createElement('li');
        let text = document.createTextNode(i);
        newContent.appendChild(text);
        ulContent.appendChild(newContent);
    });

    
}
