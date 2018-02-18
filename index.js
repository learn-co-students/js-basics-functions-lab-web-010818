// Code your solution in this file!


const hq = 42;

function distanceFromHqInBlocks(street){
  return blocksTravelled(hq, street);
}

function distanceFromHqInFeet(street){
  return distanceTravelledInFeet(hq, street);
}

function blocksTravelled(start, end){
  const block = start - end;
  return Math.abs(block);
}

function distanceTravelledInFeet(start, end){
    const abs_blocks = blocksTravelled(start, end);
    return abs_blocks * 264;
}

function calculatesFarePrice(start, destination){
  const feet = distanceTravelledInFeet(start, destination);

  if (feet <= 400){
    return 0;
  } else if (feet <= 2000) {
    return feet * 0.02;
  } else if (feet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  }

}
