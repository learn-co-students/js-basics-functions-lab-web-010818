function distanceFromHqInBlocks(loc) {
  if (loc > 42) {
    return loc - 42;
  } else {
    return 42 - loc;
  }
}

function distanceFromHqInFeet(loc) {
  return distanceFromHqInBlocks(loc) * 264;
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    return (start - end) * 264;
  } else {
    return (end - start) * 264;
  }
}

function calculatesFarePrice(start, dest) {
  const distance = distanceTravelledInFeet(start, dest);
  if(distance < 400) {
    return 0;
  } else if(distance <= 2000) {
    return distance * 0.02;
  } else if(distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
