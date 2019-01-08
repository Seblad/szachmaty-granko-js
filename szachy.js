// console.log("PRE: DOM loaded: ", document.body.innerHTML);

document.addEventListener("DOMContentLoaded", function onDOMLoaded() {
    let chessboard = document.querySelector("#chessboard-automated");
    /* for
    *  -> chessline (of chessboard)
    *      for
    *      -> field (of chessline) */
    const ALPHA_FIELDS = "HGFEDCBA";
    for (let j = 7; j >= 0; j--) {
        let chessline = document.createElement("div");
        chessline.classList.add("chessline");
        chessboard.appendChild(chessline);
        chessline.id = ALPHA_FIELDS[j];
        for (let i = 8; i > 0; i--) {
            let pole = document.createElement("div");
            pole.classList.add("field");
            chessline.appendChild(pole);
            pole.id = ALPHA_FIELDS[j] + "" + i;
        }

    }
    console.log("wzorzec: ", document.querySelector(".field"));
});

