$(".toggle").click(function () {
  $(".menu").slideToggle();


})


$(".menu ul li a").click(function () {
  $(".menu").slideToggle();


})


//form
function sendWhatsApp(event) {
    event.preventDefault(); // ഫോം നേരിട്ട് സബ്മിറ്റ് ആകുന്നത് തടയുന്നു

    // ഫോമിലെ വിവരങ്ങൾ എടുക്കുന്നു
    var name = document.getElementById("n1").value;
    var phone = document.getElementById("p1").value;
    var email = document.getElementById("e1").value;
    var message = document.getElementById("m1").value;

    // വാട്സാപ്പ് ലിങ്ക് നിർമ്മിക്കുന്നു
    // '91' കൂട്ടി നിങ്ങളുടെ മൊബൈൽ നമ്പർ ചേർക്കുക
    var url = "https://wa.me/918590808940?text=" 
    + "Name: " + name + "%0a"
    + "Phone: " + phone + "%0a"
    + "Email: " + email + "%0a"
    + "Message: " + message;

    // വാട്സാപ്പ് തുറക്കുന്നു
    window.open(url, '_blank');
}
//form----end
