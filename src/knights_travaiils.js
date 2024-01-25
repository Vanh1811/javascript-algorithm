function knightMoves (start, end){
    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ]

    const isValidMove = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8

    const queue = [[start, [start]]]
    console.log([start])
    const visited = new Set ([start.toString()])
    console.log([start.toString()])

    while(queue.length > 0){
        const [current, path] = queue.shift()

        if(current.toString() === end.toString()){
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            path.forEach(square => console.log(square))
            return path
        }

        for (const move of moves){
            const newSquare = [current[0] + move[0], current[1] + move[1]]
            const newSquareStr = newSquare.toString()

            if(isValidMove(...newSquare) && !visited.has(newSquareStr)){
                queue.push([newSquare, [...path, newSquare]])
                visited.add(newSquareStr)
            }
        }
    }
}

knightMoves([0, 0], [1, 2]);
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
knightMoves([3, 3], [4, 3]);