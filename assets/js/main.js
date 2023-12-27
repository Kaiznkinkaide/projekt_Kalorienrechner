

let calc = () =>{
    let output = document.getElementById('output')
    let age = Number(document.getElementById('age').value)
    let weight = Number(document.getElementById('weight').value)
    let size = Number(document.getElementById('size').value)
    console.log(age);
    console.log(weight);
    console.log(size);
    let manRadio = document.getElementById('man').checked
    let womanRadio = document.getElementById('woman').checked
    console.log(manRadio);
    console.log(womanRadio);
    let none = document.getElementById('sitzend').checked
    let light = document.getElementById('leicht-aktiv').checked
    let activ = document.getElementById('maessig-aktiv').checked
    let strong = document.getElementById('sehr-aktiv').checked
    let veryStrong = document.getElementById('sehr-stark-aktiv').checked
    console.log(none);
    console.log(light);
    console.log(activ);
    console.log(strong);
    console.log(veryStrong);
    let manCalc = 66 + (13.7 * weight) + (5 * size) - ( 6.8 * age)
    console.log(manCalc);
    let womanCalc = 655 + (9.6 * weight) + (1.8 * size) - ( 4.6 * age)
    console.log(womanCalc);
    if(manRadio && none){
        let manNone = manCalc * 1.2
        output.innerHTML = `${Math.round(manNone)} Kalorien`
    } else if (manRadio && light){
        let manLight = manCalc * 1.375
        output.innerHTML = `${Math.round(manLight)} Kalorien`
    } else if (manRadio && activ){
        let manActiv = manCalc * 1.55
        output.innerHTML = `${Math.round(manActiv)} Kalorien`
    }else if (manRadio && strong){
        let manStrong = manCalc * 1.725
        output.innerHTML = `${Math.round(manStrong)} Kalorien`
    }else if (manRadio && veryStrong){
        let manVeryStrong = manCalc * 1.9
        output.innerHTML = `${Math.round(manVeryStrong)} Kalorien`
    } else if(womanRadio && none){
        let womanNone = womanCalc *1.2
        output.innerHTML = `${Math.round(womanNone)} Kalorien`
    } else if(womanRadio && light){
        let womanLight = womanCalc *1.375
        output.innerHTML = `${Math.round(womanLight)} Kalorien`
    } else if(womanRadio && activ){
        let womanActiv = womanCalc * 1.55
        output.innerHTML = `${Math.round(womanActiv)} Kalorien`
    } else if(womanRadio && strong){
        let womanStrong = womanCalc * 1.725
        output.innerHTML = `${Math.round(womanStrong)} Kalorien`
    }  else if(womanRadio && veryStrong){
        let womanVerryStrong = womanCalc *1.9
        output.innerHTML = `${Math.round(womanVerryStrong)} Kalorien`
    }
    




}