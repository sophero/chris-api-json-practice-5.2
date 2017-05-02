
$.ajax({
	url: "https://api-practice-wdi.herokuapp.com/posts",
	// data: {
		
	// },
	dataType: "json",
	success: function(response) {
		console.log(response.posts);
	}

});