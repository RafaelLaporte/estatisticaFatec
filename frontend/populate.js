function populate(measure,  partMeasure){
    measure = document.getElementById(measure);
    partMeasure = document.getElementById(partMeasure);
    partMeasure.innerHTML = '';
    let cond = 4;
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