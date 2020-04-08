import functions from './dfunctions.js'
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

const log = document.getElementById('idOutputLog');
let cardNumber = 4

idMainDiv.addEventListener("click", e => {
    console.log("You clicked, at your command");
    console.log(e.target.textContent);

});

idLeftPanel.addEventListener("click", e => {

    if (e.target.nodeName === 'BUTTON'){
        if (e.target.textContent === "Insert before") {
            
            functions.addBeforeCard(e.target.parentElement, "Card" + cardNumber++);
        };
        if (e.target.textContent === "Insert after") {
            
            functions.addAfterCard(e.target.parentElement, "Card" + cardNumber++);
        };
        if (e.target.textContent === "Delete card") {
            
            functions.deleteCard(e.target.parentElement);
        };
    }
})
