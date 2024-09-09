function calcular(){
    raio = parseFloat(document.getElementById("raio").value);

    area = (Math.PI*Math.pow(raio,2)).toFixed(2);
    comprimento = (2*Math.PI*raio).toFixed(2);

    document.getElementById("saida").innerHTML = `A área dessa circunferência é: ${area} <br> O comprimento é: ${comprimento}`
}
