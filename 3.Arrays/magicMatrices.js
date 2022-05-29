    function isMagicSquare(mat)   {
        let N = mat.length
        // sumd1 and sumd2 are the sum of the two diagonals
        let sumd1 = 0,sumd2=0;
        for (let i = 0; i < N; i++)
        {
            // (i, i) is the diagonal from top-left -> bottom-right
            // (i, N - i - 1) is the diagonal from top-right -> bottom-left
            sumd1 = sumd1 + mat[i][i];
            sumd2 = sumd2 + mat[i][N-1-i];
        }
        // if the two diagonal sums are unequal then it is not a magic square
        if(sumd1!=sumd2)
            return false;
     
         
        for (let i = 0; i < N; i++) {
            let colSum = 0;
            let rowSum = 0;   
            for (let j = 0; j < N; j++)
            {
                rowSum += mat[i][j];
                colSum += mat[j][i];
            }
            if (rowSum != colSum || colSum != sumd1)
                return false;
        }
        return true;
    }
     
    
console.log(isMagicSquare([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
))