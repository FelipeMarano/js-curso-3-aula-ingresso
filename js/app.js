function comprar () {
    let tipo = document.getElementById ("tipo-ingresso");
    let qtd = parseInt (document.getElementById ("qtd").value);
    // alert (tipo.value); = para testar se o botao para o "tipo" esta funcionando
    // alert (qtd.value); = para testar se o botao para a "qtd" esta funcionando
    if (tipo.value == "pista") { // la no html
        comprarPista (qtd);
        
    }
}

function comprarPista (qtd) {
    let qtdPista = parseInt(document.getElementById ("qtd-pista").textContent);
    if (qtd > qtdPista) {
        alert("Quantidade Indisponível para o tipo Pista");
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById ("qtd-pista").textContent = qtdPista;
        alert ("Compra realizada com sucesso!");
    }

}