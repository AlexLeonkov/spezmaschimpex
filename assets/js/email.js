// Initialize EmailJS with your user ID
emailjs.init("sHzLaUUELf-W-VCHb");

window.onload = function () {
  document
    .getElementById("form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
      console.log("it worked");
      // Collect the form data
      var contactParams = {
        name: document.getElementById("name").value,
        contact: document.getElementById("contact").value,
        frage: document.getElementById("frage").value,
      };
     
      // Send the email
      emailjs.send("service_k8svi04", "template_7lzlr5y", contactParams).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          // Optionally, inform the user that the message was sent successfully
          document.getElementById("name").value = '';
          document.getElementById("contact").value = '';
          document.getElementById("frage").value = '';
        },
        function (error) {
          console.log("FAILED...", error);
          // Optionally, inform the user that the message sending failed
        }
      );
    });
};
