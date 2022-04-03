let inputAdulto = document.getElementById("adulto")
let inputCrianca = document.getElementById("crianca")
let inputDuracao = document.getElementById("duracao")
let resultado = document.getElementById("resultado")

function calcular() {
    console.log("calculando...")


    let adulto = inputAdulto.value
    let crianca = inputCrianca.value
    let duracao = inputDuracao.value

    let qdtCarne = carnePP(duracao) * adulto + (carnePP(duracao) / 2 * crianca)
    let qdtCerveja = cervejaPP(duracao) * adulto
    let qdtBebidas = bebidasPP(duracao) * adulto + (bebidasPP(duracao) / 2 * crianca)


    resultado.innerHTML = `<p>${qdtCarne} g de Carne</p>`
    resultado.innerHTML += `<p>${qdtBebidas} ml de Bebidas</p>`
    resultado.innerHTML += `<p>${qdtCerveja} ml de Cerveja</p>`
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}   

    function cervejaPP(duracao) {
        if (duracao >= 6) {
            return 2000
        } else {
            return 1200
        }
    }
        function bebidasPP(duracao){
            if(duracao >= 6){
              return 1500
            }else {
                return 1000 
            }
        } 