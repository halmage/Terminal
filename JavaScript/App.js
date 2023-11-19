let num = 2
let num2 = 3
let result = 0

const sum = () => {
  result = num + num2
  return result
}

const rest = () => {
  result = num - num2
  return result
}

const mult = () => {
  result = num * num
}

const div = () => {
  if(num2 === 0){
    alert('No es posible dividir por 0')
  }else{
     result = num / num2
     return result
  }     
} 

alert(sum())