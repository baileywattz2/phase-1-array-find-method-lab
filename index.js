

function superbowlWin(record){
    let result = record.find (value => value.result === "W")
          if (result){
            return result.year
          }  
}



