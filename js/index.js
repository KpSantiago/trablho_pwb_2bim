document.querySelector("#calcular").addEventListener("click", function(event){

    event.preventDefault();


    let receitaValues = [
        document.querySelector("#inputVbase").value,
        document.querySelector("#inputTransporte").value,
        document.querySelector("#inputAlimentacao").value
    ]
    let descontosValues = [
        document.querySelector("#dAutomovel").value,
        document.querySelector("#faltas").value
    ]

    let valorBase = Number(receitaValues[0]);
    let ajudaTransporte =  Number(receitaValues[1]);
    let ajudaAlimentacao = Number(receitaValues[2]);

    let descontoAutomovel = Number(descontosValues[0]);
    let faltas =  Number(descontosValues[1]);

    let receitaTotal = valorBase + ajudaTransporte + ajudaAlimentacao;

    let descontoTotal = descontoAutomovel + faltas;

    let total = receitaTotal - descontoTotal;

    totais(receitaTotal, descontoTotal, total);
    
});

function totais(receitas, descontos, total){
    document.querySelector("#rTotal").value = receitas;
    document.querySelector("#dTotal").value = descontos;
    document.querySelector("#total").value = total;
}


