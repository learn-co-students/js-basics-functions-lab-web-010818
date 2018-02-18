// Code your solution in this file!
function distanceFromHqInBlocks(position){
  return Math.abs(position - 42);
}

function calculateVertical(start, end){
  let distance = end - start;
  let feetPerBlock = 264;
  return distance * feetPerBlock;
}

function distanceFromHqInFeet(position){
    let start = distanceFromHqInBlocks(position);
    let feetPerBlock = 264;
    return start * feetPerBlock;
}

function distanceTravelledInFeet(start, end){
  let distance = Math.abs(end - start);
  let feetPerBlock = 264;
  return distance * feetPerBlock;
}

function calculatesFarePrice(start, end){
  let distance = distanceTravelledInFeet(start, end)

    if (distance <= 400){
      return 0;
    } else if (distance > 400 && distance <= 2000){
      return 0.02 * distance
    } else if (distance > 2000 && distance <= 2500){
      return 25
    } else {
      return 'cannot travel that far'
    }

}
