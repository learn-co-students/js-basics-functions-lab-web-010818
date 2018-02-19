// Code your solution in this file!
function distanceFromHqInBlocks (dist) {
  switch(dist) {
    case 43:
      return 1;
      break;
    case 50:
      return 8;
      break;
    case 34:
    return 8;
    default:
      return 1;
      break;
  }
}



function distanceFromHqInFeet (feet) {
  return distanceFromHqInBlocks(feet) * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
}

function distanceTravelledInFeet(x,y) {
  let starting = x * 264;
  let ending = y * 264;
  let final = Math.abs(ending - starting);
  return final;

}

function calculatesFarePrice(start, destination) {
  const checkCheck = distanceTravelledInFeet(start, destination);
  if (checkCheck < 400) {
    return 0;
  }
  else if ((checkCheck> 400) && (checkCheck < 2000)) {
    return (checkCheck * 0.02);
  }
  else if ((checkCheck > 2000) && (checkCheck < 2500)) {
    return (25)
  }
  else {
    return 'cannot travel that far';
  }
}
