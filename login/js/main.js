
	function onSignIn(googleUser) {
		var profile = googleUser.getBasicProfile();
		console.log(profile);
		console.log('ID: ' + profile.getId());
		console.log('Name: ' + profile.getName());
		console.log('Image URL: ' + profile.getImageUrl());
		console.log('Email: ' + profile.getEmail());
	}
	
	$('.abcRioButton').trigger('click');