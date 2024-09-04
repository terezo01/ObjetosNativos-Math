function calcular(){
    raio = parseFloat(document.getElementById("raio").value)

    area = Math.PI*Math.pow(raio,2)
    comprimento = 2*Math.PI*raio

    document.getElementById("saida").innerHTML = `A área dessa circunferência é: ${area.toFixed(2)} <br> O comprimento é: ${comprimento.toFixed(2)}`
}
