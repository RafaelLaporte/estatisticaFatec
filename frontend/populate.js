//Determines how many parts selected measure of position has.
function populate(measure,  partMeasure){    
    let cond
    measure = document.getElementById(measure);
    partMeasure = document.getElementById(partMeasure);
    partMeasure.innerHTML = '';
    if(measure.value == 'quartil') cond = 4
    if(measure.value == "quintil") cond = 5 
    if(measure.value == "decil") cond = 10
    if(measure.value == "percentil") cond = 100
        for(let i = 0; i < cond; i++){
            let newOption = document.createElement("option");
            newOption.value = `${i + 1}`
            newOption.innerHTML = `${i + 1}`
            partMeasure.options.add(newOption)
    }
}