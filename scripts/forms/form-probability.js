$("#distribution-select").on("change", function() {
    document.getElementById('binomial-error').innerHTML = ''
    document.getElementById('uniform-error').innerHTML = ''
    document.getElementById('normal-error').innerHTML = ''


    let probabilityValues = document.getElementById('probability-values');
    if (probabilityValues.innerHTML != "") probabilityValues.innerHTML = "";

    let dataType = document.getElementById('distribution-select').value;

    if (dataType == 'binomial') {
        $('#normal').trigger('reset');
        $('#uniform').trigger('reset');
        document.getElementById('binomial').style = ''
        document.getElementById('normal').style = 'display:none'
        document.getElementById('uniform').style = 'display:none'
    }
    
    if (dataType == 'normal') {
        $('#normal').trigger('reset');
        $('#uniform').trigger('reset');
        document.getElementById('binomial').style = 'display:none'
        document.getElementById('normal').style = ''
        document.getElementById('uniform').style = 'display:none'
    }

    if (dataType == 'uniform') {
        $('#binomial').trigger('reset');
        $('#normal').trigger('reset');
        document.getElementById('binomial').style = 'display:none'
        document.getElementById('normal').style = 'display:none'
        document.getElementById('uniform').style = ''
    }

    if (dataType == '') {
        $('#binomial').trigger('reset');
        $('#normal').trigger('reset');
        $('#uniform').trigger('reset');
        document.getElementById('binomial').style = 'display:none'
        document.getElementById('normal').style = 'display:none'
        document.getElementById('uniform').style = 'display:none'
   }
})

$("#uniform-select").on("change", function() {
    document.getElementById('uniform-value-min').value = ''
    document.getElementById('uniform-value-max').value = ''

    let dataType = document.getElementById('uniform-select').value;
    let probability = document.getElementById('probability');

    if(probability) probability.innerHTML = '' 

    if (dataType == 'between') {
        $('#uniform-value').trigger('reset');
        document.getElementById('uniform-value-min').style = 'display:inline-block'
        document.getElementById('uniform-value-max').style = 'display:inline-block; margin-left: 20px'
        document.getElementById('btn-uniform').style = 'display:inline-block'
    }

    else if (dataType == ''|| dataType == undefined){
        $('#uniform-value').trigger('reset');
        document.getElementById('uniform-value-min').style = 'display:none'
        document.getElementById('uniform-value-max').style = 'display:none' 
        document.getElementById('btn-uniform').style = 'display:none'  

    }

    else {       
        $('#uniform-value').trigger('reset');
        document.getElementById('uniform-value-min').style = 'display:inline-block'
        document.getElementById('uniform-value-max').style = 'display:none'
        document.getElementById('btn-uniform').style = 'display:inline-block'
    }
})

$("#normal-select").on("change", function() {
    document.getElementById('normal-error').innerHTML = ''
    document.getElementById('normal-var-min').value = ''
    document.getElementById('normal-var-max').value = ''

    let dataType = document.getElementById('normal-select').value;
    let probability = document.getElementById('probability');

    if(probability) probability.innerHTML = '' 

    if (dataType == 'between') {
        $('#normal-var').trigger('reset');
        document.getElementById('normal-var-min').style = 'display:inline-block'
        document.getElementById('normal-var-max').style = 'display:inline-block; margin-left: 20px'                
        document.getElementById('btn-normal').style = 'display:inline-block'
    }

    else if (dataType == ''|| dataType == undefined){
        $('#normal-var').trigger('reset');
        document.getElementById('normal-var-min').style = 'display:none'
        document.getElementById('normal-var-max').style = 'display:none'
        document.getElementById('btn-normal').style = 'display:none'                             
    }

    else {       
        $('#normal-var').trigger('reset');
        document.getElementById('normal-var-min').style = 'display:inline-block'
        document.getElementById('normal-var-max').style = 'display:none'
        document.getElementById('btn-normal').style = 'display:inline-block'
    }
})