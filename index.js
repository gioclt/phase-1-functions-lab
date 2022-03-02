function distanceFromHqInBlocks(blockStart){
    if (blockStart > 42)
        return blockStart - 42
    else (blockStart < 42)
        return 42 - blockStart
}

function distanceFromHqInFeet(feetStart){
    if (feetStart > 42)
        return (feetStart - 42)*264
    else (feetStart < 42)
        return (42 - feetStart)*264
}

function distanceTravelledInFeet(feetTravel, distanceTravel){
    if (feetTravel > distanceTravel)
        return (feetTravel - distanceTravel)*264
    else (feetTravel < distanceTravel)
        return (distanceTravel - feetTravel)*264
}

function calculatesFarePrice (a, b){
    if  (a < b ) {
        if (((b - a) * 264) < 400){
        return 0
        } else if (((b-a) * 264) < 2000 ){
        return (((b-a) * 264 - 400) * 0.02)
        }else if (((a-b)* 264)< 2500) {
        return 25
        }else if (((a-b)* 264) >= 2500){
        return "cannot travel that far"
        } 
     }  else if (a >b ){
         if (((a - b) * 264) < 400){
         return 0
        } else if (((a-b) * 264) < 2000 ){
        return (((a-b) * 264 - 400) * 0.02)
         } else if (((a-b)* 264) < 2500) {
         return 25
        } else if (((a-b)* 264) >= 2500){
         return 'cannot travel that far'
        }
     }
}