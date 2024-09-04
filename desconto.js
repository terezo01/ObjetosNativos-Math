function calcular(){
    preco = parseFloat(document.getElementById("preço").value);
    qtd = parseFloat(document.getElementById("qtd").value);

    precoSeco = preco*qtd
    precoFinal = Math.floor(preco*qtd);

    document.getElementById("saida").innerHTML = `O preço sem desconto é: ${precoSeco} <br> O preço com desconto é: ${precoFinal}`
}