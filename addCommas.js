function addCommas(num) { 
  const Arr = String(num).split('').reverse();
  const status = false;
  if(Arr[Arr.length-1] == '-'){
      status == true;
  }
  for(let i = 3; i< Arr.length; i += 3){
      Arr[i] = Arr[i]+',';
  }
  if(status){
      Arr.unshift('-');
  }
  const oy = Arr.reverse().join('');
  return oy
}

console.log(addCommas(1234567898))
console.log(addCommas(-24463487987))

module.exports = addCommas;