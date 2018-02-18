function distanceFromHqInBlocks(street) {
  return Math.abs(42 - street)
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * 264
}

function calculatesFarePrice(start, end) {
  let dist = distanceTravelledInFeet(start, end)
  if (dist < 400) {
    return 0;
  } else if (dist >= 400 && dist <=2000) {
    return (dist * 2) / 100
  } else if(dist > 2000 && dist <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  }
}
