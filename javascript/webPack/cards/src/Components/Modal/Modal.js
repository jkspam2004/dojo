import "./Modal.css";
import modal from "./Modal.html";

class Modal {
    constructor(title) {
        this.ele = document.createRange().createContextualFragment(modal);
        this.setTitle(title);
        this.closeButton();
        return this.ele;
    }
    setTitle(title) {
        this.ele.getElementById("ModalTitle").innerText = title;
    }
    closeButton() {
        this.ele.getElementById("closeModal").addEventListener("click", (e) => {
            let modal = document.getElementById("myModal");
            document.body.removeChild(modal);
        });
    }
}

export default function(title) {
    return new Modal(title);
}
