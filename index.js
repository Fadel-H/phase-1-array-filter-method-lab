// Code your solution here


function findMatching(drivers, stringArgument){
    return drivers.filter(drivers => drivers.toLowerCase() === stringArgument.toLowerCase() )
}

function fuzzyMatch(drivers, stringArgument){ 
    return drivers.filter(drivers => drivers.substring(0,stringArgument.length) === stringArgument)
}

function matchName(drivers, stringArgument){
    return drivers.filter(drivers => drivers.name === stringArgument)
}