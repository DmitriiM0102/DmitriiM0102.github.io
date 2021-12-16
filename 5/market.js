document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed")
})
function isNumber(a){ // проверка для количества (т.е кг)
  if (typeof a === 'number' && a>0)
      return !isNaN(a)
    else return false
}
function summa() {
  let price = document.getElementById("price").value
  let colvo = document.getElementById("amount").value
  let sum= +price * +colvo
  let a1= +price, a2= parseFloat(colvo)
  if(!isNumber(a1)){
    alert("Укажите цену правильно")
    return false
  }
  if(!isNumber(a2)){
    alert("Укажите кол-во товаров правильно")
    return false
  }
  if (sum%10==1 && sum%100!=11)
    document.getElementById("result").innerHTML = "Сумма: "+sum+" рубль"
  else
    if(sum%10<5 && sum%10!=0 && (sum%100<10 || sum%100>20))
      document.getElementById("result").innerHTML = "Сумма: "+sum+" рубля"
    else document.getElementById("result").innerHTML = "Сумма: "+sum+" рублей"
  return false
}