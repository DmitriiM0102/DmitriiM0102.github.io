window.addEventListener('DOMContentLoaded', function(event) {
  console.log("DOM fully loaded and parsed")
})
function isNumber(a){ 
  if (typeof a === 'number' && a > 0)
      return !isNaN(a)
    else return false
}
function getPrices() {
  return {
    mySelect: [15,220,500],
    Opt: {
      option: 45,
      option1: 45,
      option2: 55,
    },
    checkProps: {
      Cho1: 249,
      Cho2: 666,
      Cho3: 299,
    }
  }
}
function updatePrice(){
  let sel = document.getElementsByName('mySelect')
  let radios = document.getElementById('myradios')
  let checks = document.getElementById('mychecks')
  let vvod = document.getElementById('amount_input')
  let vvodz = document.getElementById('amount')
  let price = 0
  let prices = getPrices()
  let s=sel[0];
  let priceIndex=parseInt(s.value)-1;
  if (priceIndex >= 0) {
    price = prices.mySelect[priceIndex]
  }
  radios.style.display = (s.value === '2' ? 'block':'none')
  checks.style.display = (s.value === '3' ? 'block':'none')
  vvodz.style.display = (s.value === '3' ? 'none':'block')
  if(s.value=="1"){
    if(isNumber(+vvod.value)){
      price=+vvod.value*prices.mySelect[0]
    }
  }
  
  if(s.value=="2"){
    let radious = document.getElementsByName("Opt")
    if(isNumber(+vvod.value)){
      price=+vvod.value*prices.mySelect[1]
    }
    radious.forEach(function(radio) {
      if (radio.checked) {
        let optionPrice = prices.Opt[radio.value]
        if (optionPrice !== undefined) {
          price += optionPrice
        }
      }
    });
  } 
  if(s.value === "3"){
    let checkboxes = document.querySelectorAll("#mychecks input")
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        let propPrice = prices.checkProps[checkbox.name]
        if (propPrice !== undefined) {
          price += propPrice
        }
      }
    })
  }
  let prodPrice = document.getElementById("result")
  prodPrice.innerHTML = price + " рублей"
}


window.addEventListener('DOMContentLoaded', function (event) {
  let input=document.querySelector("#amount_input");
  let radioH1 = document.getElementById("myradios");
  let checkH = document.getElementById("mychecks");
  radioH1.style.display = "none";
  checkH.style.display = "none";
  
  let s = document.getElementsByName("mySelect");
  let select = s[0];
  input.addEventListener("input",function(event){
    let target1 = event.target;
    console.log(target1.value);
    updatePrice();
  });

  select.addEventListener("change", function(event) {
    let target = event.target;
    console.log(target.value);
    updatePrice();
  });
    
  let radios = document.getElementsByName("Opt");
  radios.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
      console.log(r.value);
      updatePrice();
    });
  });
  
  let checkboxes = document.querySelectorAll("#mychecks input");
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function(event) {
      let c = event.target;
      updatePrice();
    });
  });
  updatePrice();
})