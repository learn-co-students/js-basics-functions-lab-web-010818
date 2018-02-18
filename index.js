function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(block1, block2) {
  const difference = Math.abs(block1 - block2);
  return difference * 264;
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);
  if (distanceInFeet > 2500) {
    return 'cannot travel that far';
  } else if (distanceInFeet > 2000) {
    return 25;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return distanceInFeet * 0.02;
  } else {
    return 0;
  }
}
