function convert(){
let moneyValue = document.querySelector("input#money_value")


let moneySelected = document.querySelector("select#money_selected")
let result = document.querySelector("div#res")
    if(moneySelected.options[0].selected || moneyValue.value.length == 0){
        result.innerHTML = ("")
        alert("[ERRO] Preencha todos os dados corretamente!")
    }else 
    if (moneySelected.options[1].selected){
        let moneyConvert = Number(moneyValue.value)
        let usd = moneyValue.value * 0.18
        let eur = moneyValue.value * 0.15
    result.innerHTML = (``)
    result.innerHTML += (`<br> ${moneyConvert.toLocaleString('pt-BR' , {style: 'currency', currency: 'BRL'})} equivale a ${usd.toLocaleString('pt-BR' , {style: 'currency', currency: 'USD'})}`)
    result.innerHTML += (`<br> ${moneyConvert.toLocaleString('pt-BR' , {style: 'currency', currency: 'BRL'})} equivale a ${eur.toLocaleString('pt-BR' , {style: 'currency', currency: 'EUR'})}`)
    }else
    if (moneySelected.options[2].selected){
        let moneyConvert = Number(moneyValue.value)
        let brl = moneyValue.value * 5.51
        let eur = moneyValue.value * 1.19
    result.innerHTML = (``)
    result.innerHTML += (`<br> ${moneyConvert.toLocaleString('pt-BR' , {style: 'currency', currency: 'USD'})} equivale a ${brl.toLocaleString('pt-BR' , {style: 'currency', currency: 'BRL'})}`)
    result.innerHTML += (`<br> ${moneyConvert.toLocaleString('pt-BR' , {style: 'currency', currency: 'USD'})} equivale a ${eur.toLocaleString('pt-BR' , {style: 'currency', currency: 'EUR'})}`)
    }else
    if (moneySelected.options[3].selected){
        let moneyConvert = Number(moneyValue.value)
        let brl = moneyValue.value * 6.68
        let usd = moneyValue.value * 0.84
    result.innerHTML = (``)
    result.innerHTML += (`<br> ${moneyConvert.toLocaleString('pt-BR' , {style: 'currency', currency: 'EUR'})} equivale a ${brl.toLocaleString('pt-BR' , {style: 'currency', currency: 'BRL'})}`)
    result.innerHTML += (`<br> ${moneyConvert.toLocaleString('pt-BR' , {style: 'currency', currency: 'EUR'})} equivale a ${usd.toLocaleString('pt-BR' , {style: 'currency', currency: 'USD'})}`)
    }
}

