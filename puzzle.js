var rows = 5;
var coloms = 5;

var currTile;
var outerTile;

var turns = 0;

window.onload = function() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < coloms; c++) {
            //<img>
            let tile = document.createElement("img");
            tile.src = "./image/white.jpg";
            tile.alt = "white";
            document.getElementById("board").append(tile);
        }
    }
}

//pieces
let pieces = [];
for (let i = 1; i < rows*coloms; i++) {
    pieces.push(i.toString());
}
pieces.reverse();
for (let i = 1; i < pieces.length; i++) {
    let j = Math.floor(Math.random() * pieces.length);
    let tmp = pieces[i];
    pieces[i] = pieces[j];
    pieces[j] = tmp;
} 

for (let i = 0; i < pieces.length; i++) {
    let tile = document.createElement("img");
    tile.src = "./image/" + pieces[i] + ".jpg"
    tile.alt = pieces[i].toString();
    document.getElementById("pieces").append(tile)
    tile.addEventListener("dragstart")
}
