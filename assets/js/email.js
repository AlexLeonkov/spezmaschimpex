// Initialize EmailJS with your user ID
emailjs.init("sHzLaUUELf-W-VCHb");

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
      console.log("it worked");
      // Collect the form data
      var contactParams = {
        from_name: document.getElementById("exampleInput1").value,
        contact_number: document.getElementById("exampleInput2").value,
        message: document.getElementById("exampleInput3").value,
      };

      // Send the email
      emailjs.send("service_k8svi04", "template_ujspeyu", contactParams).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          // Optionally, inform the user that the message was sent successfully
          document.getElementById("exampleInput1").value = '';
          document.getElementById("exampleInput2").value = '';
          document.getElementById("exampleInput3").value = '';
        },
        function (error) {
          console.log("FAILED...", error);
          // Optionally, inform the user that the message sending failed
        }
      );
    });
};
