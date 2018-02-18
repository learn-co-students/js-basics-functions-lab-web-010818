// Code your solution in this file!


function numFromHqInBlocks (num) {
  if (num > 42) {
    return num - 42
  } else {
    return 42 - num
  }


}

function distanceFromHqInFeet (num) {
  return distanceFromHqInBlocks(num) * 264
}

function distanceTravelledInFeet (start, destination) {
  if (start < destination) {
    return (destination - start) * 264
  } else {
    return (start - destination) * 264
  }
}

function calculatesFarePrice (start, destination) {
  var num = distanceTravelledInFeet(start, destination)

  if (num <= 400) {
    return 0
  } else if (num > 400 && num <= 2000) {
    return .02 * num
  } else if (num > 2000 && num < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
