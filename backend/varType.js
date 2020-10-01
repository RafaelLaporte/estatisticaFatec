function type(valuesFi){

    let type;
    let values = Object.keys(valuesFi)

    values.some(isNaN) ? type = 'qualitativaOrdinal' :
    values.length < 10 ? type = 'quantitativaDiscreta':
    type = 'quantitativaContinua'

    return type
}