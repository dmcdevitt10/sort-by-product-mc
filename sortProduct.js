function sort(arr){
    let arrOfArrs = arr.map((num, index) => {
        return [num, num * (index + 1)]
    })

    arrOfArrs.sort((a, b) => {
        if(a[1] > b[2]){
            return 1
        }else if( a[1] < b[1]){
            return -1
        }else{
            return 0
        }
    })
    let finalArr = arrOfArrs.map((subArr) => {
        return subArr[0]
    })
    return finalArr
}
        
console.log(sort([23,2,3,4,5]))


