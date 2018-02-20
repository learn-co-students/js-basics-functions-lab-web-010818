// Code your solution in this file!
function distanceFromHqInBlocks(address){
  return distance = Math.abs(address - 42);
}

function distanceFromHqInFeet(address){
  return distanceFromHqInBlocks(address) * 264;
}

function distanceTravelledInFeet(from, to) {
  return Math.abs(to - from) * 264;
}

function calculatesFarePrice(start, destination) {
  let distanceInFeet = distanceTravelledInFeet(start, destination)
  if (distanceInFeet > 400 && distanceInFeet < 2000) {
    return distanceInFeet * 0.02
  } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    return 25
  } else if (distanceInFeet > 2500) {
    return "cannot travel that far";
  } else if (distanceInFeet < 450) {
    return 0;
  }
}
