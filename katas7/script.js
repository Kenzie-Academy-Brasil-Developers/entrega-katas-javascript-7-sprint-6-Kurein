// ---------- forEach() ----------

function newForEach(array, callBackFunction){
    for(let i=0; i< array.length; i++){
        array[i] = callBackFunction(array[i], i, array)
    }
}

function forEachCallBack(element, index){
    return element = index
}

let testeForEach = [1, 2, 3, 4, 5]

newForEach(testeForEach, forEachCallBack)
console.log(testeForEach)

// ---------- fill() ----------

function newFill(array, value, start, end ){
    start = start || 0
    end = end || array.length

    if(start < 0){
        start += value
    }
    if(end < 0){
        end += value
    }

    for(let i=start; i<end; i++){
        array[i] = value
    }
}

let testeFill = [1, 2, 3, 4, 5]

newFill(testeFill, 6, 2)
console.log(testeFill)

// ---------- map() ----------

function newMap(array, callBackFunction){
    let newArray = []

    for(let i=0; i<array.length; i++){
        let newElement = callBackFunction(array[i], i, array)
        newArray.push(newElement)
    }

    return newArray
}

function mapCallBack(element, index){
    return element + index
}

let testeMap = [1, 2, 3, 4, 5]

let mapResults = newMap(testeMap, mapCallBack)
console.log(mapResults)

// ---------- some() ----------

function newSome(array, callBackFunction){
    let result

    for(let i=0; i<array.length; i++){
        result = callBackFunction(array[i], i, array)
    }

    return result
}

function someCallBack(element){
    return element % 2 === 0
}

let testeSome = [1, 3, 5, 7, 8]

let someResults = newSome(testeSome, someCallBack)
console.log(someResults)

// ---------- find() ----------

function newFind(array, callBackFunction){
    let result

    for(let i=0; i<array.length; i++){
        result = callBackFunction(array[i], i, array)
        if(result === true){
            return array[i]
        }
    }
}

function findCallBack(element){
    return element % 2 !== 0
}

let testeFind = [2, 4, 5, 6, 8, 9]

let findResults = newFind(testeFind, findCallBack)
console.log(findResults)

// ---------- findIndex() ----------

function newFindIndex(array, callBackFunction){
    let result

    for(let i=0; i<array.length; i++){
        result = callBackFunction(array[i], i, array)
        if(result === true){
            return i
        }
    }
}

function findIndexCallBack(element){
    return element % 10 === 0
}

let testeFindIndex = [1, 5, 10, 15, 20]

let findIndexResults = newFindIndex(testeFindIndex, findIndexCallBack)
console.log(findIndexResults)

// ---------- every() ----------

function newEvery(array, callBackFunction){
    let result

    for(let i=0; i<array.length; i++){
        result = callBackFunction(array[i], i, array)
        if(result === false){
            return result
        }
    }

    return result
}

function everyCallBack(element){
    return element % 2 === 0
}

let testeEvery = [2, 4, 6, 8]

let everyResults = newEvery(testeEvery, everyCallBack)
console.log(everyResults)

// ---------- filter() ----------

function newFilter(array, callBackFunction){
    let newArray = []

    for(let i=0; i<array.length; i++){
        let result = callBackFunction(array[i], i, array)

        if(result === true){
            newArray.push(array[i])
        }
    }
    return newArray
}

function filterCallBack(element){
    return element % 2 !== 0
}

let testeFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let filterResults = newFilter(testeFilter, filterCallBack)
console.log(filterResults)

// ---------- concat() ----------

function newConcat(){
    let arguments = newConcat.arguments
    let newArray = []

    for(let i=0; i<arguments.length; i++){
        newArray = [...newArray, ...arguments[i]]
    }

    return newArray
}

let testeConcat1 = [1, 2, 3]
let testeConcat2 = [4, 5, 6]

let concatResults = newConcat(testeConcat1, testeConcat2, [7, 8, 9])
console.log(concatResults)

// ---------- includes() ----------

function newIncludes(array, value, start){
    start = start || 0

    for(let i=start; i<array.length; i++){
        if(array[i] === value){
            return true
        }
    }

    return false
}

let testeIncludes = [1, 2, 3, 4, 5]

let includesResults = newIncludes(testeIncludes, 4, -10)
console.log(includesResults)

// ---------- indexOf() ----------

function newIndexOf(array, value, start){
    start = start || 0

    for(let i=start; i<array.length; i++){
        if(array[i] === value){
            return i
        }
    }

    return -1
}

let testeIndexOf = [1, 2, 3, 4, 5]

let indexOfResults = newIndexOf(testeIndexOf, 4, -2)
console.log(indexOfResults)

// ---------- join() ----------

function newJoin(array, separator){
    let newString = ""
    separator = separator.toString() || ","

    for(let i=0; i<array.length; i++){
        if(i === array.length -1){
            newString += array[i]
        } else {
            newString += `${array[i]}${separator}`
        }
    }

    return newString
}

let testeJoin = ["Eu", "gosto", "de", "jogar"]

let joinResults = newJoin(testeJoin, " ")
console.log(joinResults)

// ---------- reduce() ----------

function newReduce(array, callBackFunction, start){
    let counter = start || 0

    for(let i=0; i<array.length; i++){
        counter = callBackFunction(counter, array[i])
    }

    return counter
}

function reduceCallBack(accumulator, element){
    return accumulator + element
}

let testeReduce = [1, 2, 3, 4, 5]

let reduceResults = newReduce(testeReduce, reduceCallBack, 5)
console.log(reduceResults)

