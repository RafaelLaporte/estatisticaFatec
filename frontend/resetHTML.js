//Resets the HTML values
function resetHTML(btnOrganize = false) {
    $('tbody').sortable({disabled: true});
    document.getElementById("table_head").innerHTML = "";
    document.getElementById("table_body").innerHTML = "";
    document.getElementById("explanation").innerHTML = "";
    document.getElementById('mean').innerHTML = ``;
    document.getElementById('mode').innerHTML = ``; 

    if (btnOrganize == false) {
        document.getElementById('measure').innerHTML = ``;
        document.getElementById('median').innerHTML = ``;    
    }

    document.getElementById('standard-deviation').innerHTML = ``;  
    document.getElementById('variance').innerHTML = ``;   
}