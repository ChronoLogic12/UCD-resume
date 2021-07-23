function sendMail(contactForm) {
    emailjs.send("service_h2pbxqn", "template_vnu9o3n", {
        "form_name": contactForm.name.value, 
        "form_email": contactForm.emailaddress.value, 
        "project_request": contactForm.projectsummary.value, 
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
}