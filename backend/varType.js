function type(varValues){
    let type;

    varValues.some(isNaN) ? type = 'qualitativaOrdinal' :
    varValues.length < 10 ? type = 'quantitativaDiscreta':
    type = 'quantitativaContinua'

    return type
}