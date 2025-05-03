// TODO faire le jeu :)

console.log("test")
let chessboard = [
    ['T', 'N', 'B', 'K', 'Q', "B", "K", "T"],
    ['P', 'P', 'P', 'P', 'P', "P", "P", "P"],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['p', 'p', 'p', 'p', 'p', "p", "p", "p"],
    ['t', 'n', 'b', 'k', 'q', "b", "k", "t"],
]

let player = 0
let tour = 1

function jouerCoup (startTile, endTile) {
    /*
    * startTile: tuple(int, int)
    * endTile: tuple(int, int) */
    chessboard[endTile[0]][endTile[1]] = chessboard[startTile[0]][startTile[1]]
    chessboard[startTile[0]][startTile[1]] = ''
}

function isPlayable (startTile, endTile) {
    return true
}