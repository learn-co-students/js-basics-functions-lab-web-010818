// Code your solution in this file!
const feetPerBlock = 264

function calculateVertical (start_block, end_block) {
  return Math.abs(start_block - end_block) * feetPerBlock
}

function distanceFromHqInBlocks(blockNumber) {
  return Math.abs(42 - blockNumber)
}

function distanceFromHqInFeet(blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * feetPerBlock
}

function distanceTravelledInFeet(start_block, end_block) {
  return Math.abs(start_block - end_block) * feetPerBlock
}

function calculatesFarePrice(start_block, end_block) {
  const feetTravelled = distanceTravelledInFeet(start_block, end_block)
  if (feetTravelled < 400)
    return 0
  else if (feetTravelled > 400 && feetTravelled <= 2000) {
    return feetTravelled * 0.02
  }
  else if (feetTravelled > 2000 && feetTravelled < 2500) {
    return 25
  }
  else {
    return 'cannot travel that far'
  }
}
