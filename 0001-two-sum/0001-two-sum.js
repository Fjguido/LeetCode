/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (arr, target) => {
    let result = ""
    if(result === ''){
        for(i = 0; i < arr.length ; i++){
            for(j = 0; j < arr.length; j++){
                if(i !== j){
                    if(arr[i] + arr[j] === target) {
                        result = [i, j]
                    }
                }
            }
        }
    }
    return result
}





