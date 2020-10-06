//Merge sort algorithm
function mergeSort(vector, fnComp){
    function mergeValues(leftVec, rightVec){
        let result = [], leftPos = 0, rightPos = 0, remainingVector

        while(leftPos < leftVec.length && rightPos < rightVec.length) {
            if (fnComp(leftVec[leftPos],rightVec[rightPos])){
                result.push(leftVec[leftPos])
                leftPos++
            } else {
                result.push(rightVec[rightPos]) 
                rightPos++           
            }
        }
    
        if(leftPos < rightPos) remainingVector = leftVec.slice(leftPos)
        else remainingVector = rightVec.slice(rightPos)

        return result.concat(remainingVector)
    }   

    if(vector.length > 1){
        let middle = Math.floor(vector.length / 2);
        let leftVec = vector.slice(0, middle);
        let rightVec = vector.slice(middle);
        leftVec = mergeSort(leftVec, fnComp);
        rightVec = mergeSort(rightVec, fnComp);
        let vectorFinal = mergeValues(leftVec, rightVec);
        return vectorFinal
    }
    
    return vector
}