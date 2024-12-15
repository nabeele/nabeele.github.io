$(function() {
	//$("input,textarea").jqBootstrapValidation({
	$("#contactForm").find("input,textarea").jqBootstrapValidation({
		preventSubmit: true,
		submitError: function($form, event, errors) {
			// additional error messages or events
		},
		submitSuccess: function($form, event) {
			event.preventDefault(); // prevent default submit behaviour
			// get values from FORM
			var name = $("input#name").val();
			var email = $("input#email").val();
			var message = $("textarea#message").val();
			var firstName = name; // For Success/Failure Message
			// Check for white space in name for Success/Fail message
			if (firstName.indexOf(' ') >= 0) {
				firstName = name.split(' ').slice(0, -1).join(' ');
			}
			$.ajax({
				url: "././mail/contact_me.php",
				type: "POST",
				data: {
					name: name,
					email: email,
					message: message
				},
				cache: false,
				success: function() {
					// Success message
					$('#contactForm #success').html("<div class='alert alert-success'>");
					$('#contactForm #success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
						.append("</button>");
					$('#contactForm #success > .alert-success')
						.append("<strong>Your message has been sent. </strong>");
					$('#contactForm #success > .alert-success')
						.append('</div>');
					//clear all fields
					$('#contactForm').trigger("reset");
				},
				error: function() {
					// Fail message
					$('#contactForm #success').html("<div class='alert alert-danger'>");
					$('#contactForm #success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
						.append("</button>");
					$('#contactForm #success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that the mail server is not responding. Please try again later!");
					$('#contactForm #success > .alert-danger').append('</div>');
					//clear all fields
					$('#contactForm').trigger("reset");
				},
			})
		},
		filter: function() {
			return $(this).is(":visible");
		},
	});

});

$(function() {
	$("#preorderForm").find("input,textarea").jqBootstrapValidation({
		preventSubmit: true,
		submitError: function($form, event, errors) {
			// additional error messages or events
		},
		submitSuccess: function($form, event) {
			event.preventDefault(); // prevent default submit behaviour
			// get values from FORM
			var name = $("input#preordername").val();
			var email = $("input#preorderemail").val();
			var message = $("textarea#preorderaddress").val();
			var firstName = name; // For Success/Failure Message
			// Check for white space in name for Success/Fail message
			if (firstName.indexOf(' ') >= 0) {
				firstName = name.split(' ').slice(0, -1).join(' ');
			}
			$.ajax({
				url: "././mail/preorder.php",
				type: "POST",
				data: {
					name: preordername,
					email: preorderemail,
					address: preorderaddress
				},
				cache: false,
				success: function() {
					// Success message
					$('#preorderForm #success2').html("<div class='alert alert-success'>");
					$('#preorderForm #success2 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
						.append("</button>");
					$('#preorderForm #success2 > .alert-success')
						.append("<strong>Your message has been sent. </strong>");
					$('#preorderForm #success2 > .alert-success')
						.append('</div>');
					//clear all fields
					$('#preorderForm').trigger("reset");
				},
				error: function() {
					// Fail message
					$('#preorderForm #success2').html("<div class='alert alert-danger'>");
					$('#preorderForm #success2 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
						.append("</button>");
					$('#preorderForm #success2 > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
					$('#preorderForm #success2 > .alert-danger').append('</div>');
					//clear all fields
					$('#preorderForm').trigger("reset");
				},
			})
		},
		filter: function() {
			return $(this).is(":visible");
		},
	});
});

/* When clicking on name field hide fail/success boxes */
$('#contactForm #name').focus(function() {
	$('#contactForm #success').html('');
});

/* When clicking on name field hide fail/success boxes */
$('#preorderForm #preordername').focus(function() {
	$('#preorderForm #success2').html('');
});
