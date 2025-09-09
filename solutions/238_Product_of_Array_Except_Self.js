


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let dummyDict = {}
    let returningArray = []

    for (let i = 0; i < nums.length; i++ ){
        
        currentNum = nums[i]
        dummyDict[i] = []


        for (let j = 0; j < nums.length; j++ ){

            if (i == j){
                continue
            } else {


                  
                dummyDict[i].push(nums[j])
            }
        }
    }

    let seperatedDict = Object.values(dummyDict)

    console.log(dummyDict)
    console.log(seperatedDict)

    for (i = 0; i < seperatedDict.length; i ++){
        console.log(seperatedDict[i])

        let product = 1

        for (j = 0; j < seperatedDict[i].length; j++ ){

            product = product * seperatedDict[i][j]

        }
        
        returningArray.push(product)

    }

    console.log(returningArray)

    return returningArray
    
    
};