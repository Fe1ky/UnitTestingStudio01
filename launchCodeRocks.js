function launchOutput(num){
  //your code here
  if(num%2 === 0 && num%5 === 0 && num%3===0){
    return 'LaunchCode Rocks!'
  } else if(num%2 === 0 && num%3 === 0){
    return 'LaunchCode!'
  } else if(num%3 === 0 && num%5 === 0){
    return 'Code Rocks!'
  } else if(num%2 === 0 && num%5 === 0){
    return 'CRASH!!!!'
  } else if(num/3 === 1){
    return 'Code!';
  } else if(num/5 === 1){
    return 'Rocks!'
  } else if(num/2 === 1){
    return 'Launch!';
  }  else {
    return "Rutabagas! That doesn`t work." 
  }
}

module.exports = launchOutput;