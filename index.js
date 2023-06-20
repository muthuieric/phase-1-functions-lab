// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if (blocks >= 42){
        return blocks - 42;
    }else{
        return 42 - blocks;
    }
}
function distanceFromHqInFeet(blocks){
    const feetPerBlock = 264;
    if (blocks >= 42){
        return (blocks - 42)*feetPerBlock;
    }else{
        return(42 - blocks)*feetPerBlock;
    }

}
function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264; 
    const distance = Math.abs(endBlock - startBlock); 
  
    return distance * feetPerBlock;
  }
function calculatesFarePrice(start, destination){
    const feetPerBlock = 264; 
    const distance = Math.abs(destination - start);
    const totalFeet = distance * feetPerBlock;
    

    if (totalFeet <= 400){
        return 0;
    }else if(totalFeet > 400 && totalFeet <= 2000){
        return (totalFeet - 400) * 0.02;
    }else if (totalFeet > 2000 && totalFeet <= 2500){
        return 25;
    }else{
        return "cannot travel that far";
    }

}

    
