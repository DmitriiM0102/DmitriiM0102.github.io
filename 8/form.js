$(function(){
$(".Form").submit(function(e){
  e.preventDefault();
  var href = $(this).attr("action");
  $.ajax({
      type: "POST",
      dataType: "json",
      url: href,
      data: $(this).serialize()
  }).done(function() {
    alert('Отправлено.');
  }).fail(function() {
    alert('Что-то пошло не так.');
    });
  });
});
let modalBtns = [...document.querySelectorAll(".button")];
modalBtns.forEach(function(btn) {
  btn.onclick = function() {
    let modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
  }
});
let closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function(btn) {
  btn.onclick = function() {
    let modal = btn.closest('.modal');
    modal.style.display = "none";
  }
});
window.onclick = function(event) {
  if(event.target.className === "modal") {
      event.target.style.display = "none";
  }
}