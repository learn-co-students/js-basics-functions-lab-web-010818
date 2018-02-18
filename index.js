function numBlocks(block1, block2) {
  return block1 > block2 ? block1 - block2 : block2 - block1;
}

function distanceFromHqInBlocks(block) {
  return numBlocks(42, block)
}

function distanceFromHqInFeet(block) {
  return  distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(block1, block2) {
  return numBlocks(block1, block2) * 264;
}

function calculatesFarePrice(start, destination) {
  const traveled = distanceTravelledInFeet(start, destination)
  if (traveled < 400) {
      return 0
  } else if (traveled >= 400 && traveled <= 2000) {
      return (2 * traveled) / 100
  } else if (traveled > 2000 && traveled < 2500) {
      return 25
  } else {
      return 'cannot travel that far'
  }
}
