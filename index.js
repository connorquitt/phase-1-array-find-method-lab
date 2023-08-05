const record = [
    { year: "2015", result: "Wf"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"}
  ]

function findWin(dub) {
    return dub.result === 'W'
    
}

function superbowlWin(ar) {
    if(ar.find(findWin)) {
        return ar.find(findWin).year
    } else {
        return undefined
    }
}

console.log(superbowlWin(record))