function readTable(column) {
    let columnValues = [];

    if(column == 2 || column == 4) {
        $(`tbody td:nth-child(${column})`).each(function (index) {
            let value = ($(this).text())
            columnValues.push(Number(value));
        });
    } else {
        $(`tbody td:nth-child(${column})`).each(function (index) {
            let value = ($(this).text())
            columnValues.push(value);
        });
    }

    return columnValues
}