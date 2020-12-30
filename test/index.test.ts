/*
 * ==================================================================
 * 1/3 Modify `canFillGap` to return expected results:
 */
const bigBrickSize = 5
const smallBrickSize = 2
const canFillGap = (smallQuantity: number, bigQuantity: number, totalGap: number) => {
  const maxBigRequired = Math.floor(totalGap / bigBrickSize)
  const gapLeftByBigBrick = totalGap % bigBrickSize
  return maxBigRequired <= bigQuantity
    && smallBrickSize * smallQuantity >= gapLeftByBigBrick
    && gapLeftByBigBrick % bigBrickSize == 0
}

test('The one rule them all', () => {
    expect(canFillGap(3, 1, 9)).toBeTruthy()
    expect(canFillGap(3, 1, 8)).toBeFalsy()
    expect(canFillGap(3, 2, 10)).toBeTruthy()
})

/*
 * ==================================================================
 * 2/3 Try to write the (pseudo)code:
 * Business logic: Given a non-empty array, return true if there is a place to
 * split the array so that the sum of the numbers on one side is equal to the
 * sum of the other side.
*/
const canBalance = (array: number[]) => {







}

test('Again, the one rule them all', () => {
    expect(canBalance([1, 1, 1, 2, 1])).toBeTruthy()
    expect(canBalance([2, 1, 1, 2, 1])).toBeFalsy()
    expect(canBalance([10, 10])).toBeTruthy()
})

/*
 * ==================================================================
 * 3/3 Try to write the (pseudo)code:
 * Sort the number like list.
 */
const sortList = (array: any[]) => {








}

test('Finally, the one rule them all', () => {
    expect(sortList([5, 3, 2, 4, 1])).toEqual([1, 2, 3, 4, 5])
    expect(sortList([5, [3], [2], 4, 1])).toEqual([1, [2], [3], 4, 5])
    expect(sortList([5, [3, 2], 4, 1])).toEqual([1, [2, 3], 4, 5])
})
