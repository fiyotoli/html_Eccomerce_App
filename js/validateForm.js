$(document).ready(function() {
    $("#sign-up").validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                // Custom validation for letters only, optional
                // lettersonly: true // Uncomment if you create a method for this
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Name must be at least two characters"
                // text: "Name must contain only characters" // Uncomment if you have a method
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email"
            },
            message: {
                required: "Please enter your message",
            }
        },
        submitHandler: function(form) {
            form.submit(); // Submit the form if validation is successful
        }
    });

    // Function to allow only letters in the name field
    function letterOnly(input) {
        var regex = /[^a-zA-Z]/g; // Allow only letters (case insensitive)
        input.value = input.value.replace(regex, ""); // Replace with empty string
    }
});
