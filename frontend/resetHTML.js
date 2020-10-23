//Resets the HTML values
function resetHTML(btnOrganize = false) {
    $('tbody').sortable({disabled: true});

    if(window.bar != undefined) window.bar.destroy();

    document.getElementById('btn-organize').innerHTML = "";
    document.getElementById("style").innerHTML = "" //PROVISÓRIO
    document.getElementById('results').innerHTML = "";
    document.getElementById("explanation").innerHTML = "";
    document.getElementById("chart").innerHTML = "";
    document.getElementById('mean').innerHTML = ``;
    document.getElementById('mode').innerHTML = ``; 

    if (!btnOrganize) {
        document.getElementById('measure').innerHTML = ``;
        document.getElementById('median').innerHTML = ``;    
    }

    document.getElementById('standard-deviation').innerHTML = ``;  
    document.getElementById('variance').innerHTML = ``;   
}