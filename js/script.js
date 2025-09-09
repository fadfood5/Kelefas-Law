$(document).ready(function () {
  $("#ContactForm").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        pattern: /^[0-9]{10}$|^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
      },
      message: {
        required: true,
        minlength: 10,
      },
    },
    messages: {
      name: {
        required: "Please enter your name.",
        minlength: "Your name must be at least 2 characters long.",
      },
      email: "Please enter a valid email address.",
      phone:
        "Please enter a valid 10-digit phone number (e.g., 1234567890 or 123-456-7890).",
      message: {
        required: "Please enter a message.",
        minlength: "Your message must be at least 10 characters long.",
      },
    },
    errorClass: "error",
    validClass: "valid",
    submitHandler: function (form, event) {
      if ($('input[name="botcheck"]').is(":checked")) {
        return false;
      }
      form.submit();
    },
  });
});
