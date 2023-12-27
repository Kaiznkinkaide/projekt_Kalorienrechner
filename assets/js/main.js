let calc = () =>{
    let output = document.getElementById('output')
    let age = Number(document.getElementById('age').value)
    let weight = Number(document.getElementById('weight').value)
    let size = Number(document.getElementById('size').value)
    let manRadio = document.getElementById('man').checked
    let womanRadio = document.getElementById('woman').checked
    const activ = document.getElementById('list').value
    let womanCalc = 655 + (9.6 * weight) + (1.8 * size) - ( 4.6 * age)
    let manCalc = 66 + (13.7 * weight) + (5 * size) - ( 6.8 * age)
    if (manRadio){
        let manCalcElement = manCalc * activ
        output.innerHTML = `${Math.round(manCalcElement)} Kalorien`
    } else if (womanRadio){
        let womanCalcElement = womanCalc * activ
        output.innerHTML = `${Math.round(womanCalcElement)} Kalorien`
    }
}