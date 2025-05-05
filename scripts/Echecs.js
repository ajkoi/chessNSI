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
let canPlayer1Roque = true
let canPayer2Roque = true

function jouerCoup (startTile, endTile) {
    /*
    * startTile: tuple(int, int)
    * endTile: tuple(int, int) */
    if (isPlayable(startTile, endTile)) {
        if (isItaRoque(startTile, endTile)) {
            // ROQUE PUTAIN DE MERDE
        } else {
            chessboard[endTile[0]][endTile[1]] = chessboard[startTile[0]][startTile[1]]
            chessboard[startTile[0]][startTile[1]] = ''
        }
    }
}

function isPlayable (startTile, endTile) {


    // d'abord vérifier si le coup met en echec
    // puis si le coup est jouable

    if (( chessboard[startTile[0]][startTile[1]] === 'R' || chessboard[startTile[0]][startTile[1]] === 'r' )){
        if (endTile[0] === startTile[0] + 1 || endTile[0] === startTile[0] || endTile[0] === startTile[0] - 1) {
            if (endTile[1] === startTile[1]+1 || endTile[1] === startTile[1] || endTile[1] === startTile[1] - 1) {
                return true
            }

        } else {
            return false
        }

    }
    // TODO : faire les autres pieces

    // à enlever qd tout les cas seront gérés
    return true
}

function abs(numbers){
    if (numbers>0) {
        return numbers
    }
    else {
        return -numbers
    }

}

function isItaRoque(startTile, endTile) {
    if (!( chessboard[startTile[0]][startTile[1]] === 'R' || chessboard[startTile[0]][startTile[1]] === 'r' )) {
        return false
    }
    else if (abs(startTile[1]-startTile[0]) === 2) {
        return true
    }

}