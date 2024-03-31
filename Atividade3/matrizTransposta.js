function transporMatriz(a){
    const numLinhas = a.length;
    const numColunas = a[0].length;

    let aT = []
    for (let j = 0; j<numColunas; j++){
        let linha = [];
        for (let i = 0; i<numLinhas;i++){
            linha.push(a[i][j]);
        }
        aT.push(linha);
    }
    for (let i = 0; i < colunas; i++) {
        console.log(aT[i].join(" "));
    }
}

const a = [[1,2],[3,4],[5,6]];

transporMatriz(a);