/*
 * ==================================================================
 * 1/3 Modify `canFillGap` to return expected results:
 */
const bigBrickSize = 5
const smallBrickSize = 2
const canFillGap = (smallQuantity, bigQuantity, totalGap) => {
  const maxBigRequired = Math.floor(totalGap / bigBrickSize)
  const gapLeftByBigBrick = totalGap % bigBrickSize
  return maxBigRequired <= bigQuantity
    && smallBrickSize * smallQuantity >= gapLeftByBigBrick
    && gapLeftByBigBrick % bigBrickSize == 0
}

// this should be true
console.log("canFillGap(3, 1, 9) returns " + canFillGap(3, 1, 9))
// this should be false
console.log("canFillGap(3, 1, 8) returns " + canFillGap(3, 1, 8))
// this should be true
console.log("canFillGap(3, 2, 10) returns " + canFillGap(3, 2, 10))

/*
 * ==================================================================
 * 2/3 Try to write the code:
 * Business logic: Given a non-empty array, return true if there is a place to
 * split the array so that the sum of the numbers on one side is equal to the
 * sum of the other side.
*/
const canBalance = (             ) => {





}





// this should be true
console.log("canBalance([1, 1, 1, 2, 1]) returns " + canBalance([1, 1, 1, 2, 1]))
// this should be false
console.log("canBalance([2, 1, 1, 2, 1]) returns " + canBalance([2, 1, 1, 2, 1]))
// this should be true
console.log("canBalance([10, 10]) returns " + canBalance([10, 10]))

/*
 * ==================================================================
 * 3/3 Describe all stages of ajax execution.
 *
 *
 *
 *
 *
 *
 */
