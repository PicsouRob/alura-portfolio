window.addEventListener('DOMContentLoaded', (event) => {
    var fullname = document.querySelector("#name");
    var email = document.querySelector("#email");
    var subject = document.querySelector("#subject");
    var message = document.querySelector("#message");
    
    var sendButton = document.querySelector("#button");
    
    sendButton.addEventListener('click', sendMessage);
    
    function sendMessage() {
        if (!fullname.value.trim() || !email.value.trim() || !subject.value.trim() || !message.value.trim()) {
            alert("Llenar todos los campos por favor!");
        } else {
            var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            var emailValue = email.value.toLowerCase();
            
            if (reg.test(emailValue)) {
                alert("Tu mensaje ha sido enviado con exito, Gracias por contactarme. Yo te respondo en un pronto!");
                fullname.value = "";
                email.value = "";
                subject.value = "";
                message.value = "";
            } else {
                alert("Ingrese un email valido");
            }
        }
    }
});