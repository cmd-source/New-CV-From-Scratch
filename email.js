function sendMail(contactForm) {
    email.send("gmail", "template_7qtjd0s", {
        "from_name": contactForm.name.value,
        "from_email": contactFrom.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("success", response);
        },
        function(error) {
            console.log("failed", error);
        })
}
console.log("hello")
