function distanceFromHqInBlocks(block){
return Math.abs(block - 42);
}

function distanceFromHqInFeet(block){
  let totalBlocks = distanceFromHqInBlocks(block)
  return totalBlocks * 264
}

function distanceTravelledInFeet(start, end){
  let blocksTraveled = Math.abs(start - end);
  return blocksTraveled * 264
}

function calculatesFarePrice(start, destination){
  let blocksTraveled = Math.abs(start - destination)
  let feetTraveled = blocksTraveled * 264
  if (feetTraveled < 400){
    return 0;
  } else if (feetTraveled > 400 && feetTraveled < 2000) {
    return (feetTraveled * 0.02)
  } else if (feetTraveled > 2000 && feetTraveled < 2500) {
    return 25;
  } else if (feetTraveled > 2500) {
    return 'cannot travel that far';
  }
}
