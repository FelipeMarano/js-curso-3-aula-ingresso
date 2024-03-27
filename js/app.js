function comprar () {
    let tipo = document.getElementById ("tipo-ingresso");
    let qtd = parseInt (document.getElementById ("qtd").value);
    // alert (tipo.value); = para testar se o botao para o "tipo" esta funcionando
    // alert (qtd.value); = para testar se o botao para a "qtd" esta funcionando
    if (tipo.value == "pista") { // la no html
        comprarPista (qtd);     
    } else if (tipo.value == "superior") {
        comprarSuperior (qtd);  
    } else {
        comprarInferior (qtd);  
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

function comprarSuperior (qtd) {
    let qtdSuperior = parseInt(document.getElementById ("qtd-superior").textContent);
    if (qtd > qtdSuperior) {
        alert("Quantidade Indisponível para o tipo Superior");
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById ("qtd-superior").textContent = qtdSuperior;
        alert ("Compra realizada com sucesso!");
    }

}

function comprarInferior (qtd) {
    let qtdInferior = parseInt(document.getElementById ("qtd-inferior").textContent);
    if (qtd > qtdInferior) {
        alert("Quantidade Indisponível para o tipo Inferior");
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById ("qtd-inferior").textContent = qtdInferior;
        alert ("Compra realizada com sucesso!");
    }

}

