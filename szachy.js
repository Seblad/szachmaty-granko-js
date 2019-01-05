// console.log("PRE: DOM loaded: ", document.body.innerHTML);

document.addEventListener("DOMContentLoaded", function onDOMLoaded() {
    // console.log("POST: DOM loaded: ", document.body.innerHTML)
    let chessboard = document.querySelector("#chessboard-automated");
    // console.log("chessboard.htmlelement = ", chessboard);
    // console.log("chessboard.htmlelement = ", document.querySelector("#chessboard-automated"));
    // chessboard.innerText = "moje pole";

    /* for
    *  -> chessline (of chessboard)
    *      for
    *      -> field (of chessline) */
    for (let i = 0; i < 64; i++) {
        let pole = document.createElement("div");
        pole.innerText = "P:" + i;
        pole.classList.add("field");
        chessboard.appendChild(pole);
        console.log(`${i} pole: `, pole);
    }

    console.log("wzorzec: ", document.querySelector(".field"));
});
