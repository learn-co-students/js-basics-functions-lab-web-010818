function distanceFromHqInBlocks (location) {
  return Math.abs(location - 42)
}
function distanceFromHqInFeet (location) {
  return distanceFromHqInBlocks (location) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice (start, destination) {
  distance  = distanceTravelledInFeet (start, destination);
  if (distance < 400) {
    return 0;
  } else if (distance < 2000) {
    return distance * 0.02;
  } else if (distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far"
  }
}
