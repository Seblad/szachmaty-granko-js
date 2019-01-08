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
    
        for (let j=8 ;j>0; j--){
            let chessline = document.createElement("div");
            chessline.classList.add("chessline");
            chessboard.appendChild(chessline);
            chessline.id=String.fromCharCode(73 - j);
            for (let i = 1; i <9 ; i++) {
                let pole = document.createElement("div");
                pole.classList.add("field");
                chessline.appendChild(pole);
                pole.id=String.fromCharCode(73 - j)+i;
                console.log(`${i} pole: `, pole);
        }
    
    }
    console.log("wzorzec: ", document.querySelector(".field"));
});

