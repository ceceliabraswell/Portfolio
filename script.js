// function for email form submit
function sendEmail() {
    let parameters = {
        name : document.getElementById("name").value,
        number : document.getElementById("number").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_d0ygltw","template_hlbagkf",parameters).then(alert("Email sent."))
}