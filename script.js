

var gallery = new PostGallery();

function PostGallery() {
	this.getJSON = getJSON;


	var postGallery = document.getElementsByClassName('gallery')[0];


	function getJSON() {
		$.ajax({
			url: "https://api-practice-wdi.herokuapp.com/posts",
			// method: "GET",
			// data: {
				
			// },
			// dataType: "json",
			success: function(response) {
				console.log(response.posts);
				generatePosts(response.posts);
			}

		});		
	}


	function generatePosts(posts) {

		// using forEach:
		posts.forEach(function(post) {
			var newDiv = "<div class='gallery-item'>"
			var imageDivStr = "<div class='gallery-item__img'></div>";
			newDiv += imageDivStr;
			newDiv += post.title;
			newDiv += "</div>";
			
			postGallery.innerHTML += newDiv;

		});


		[].forEach.call(posts, function(post, index) {
			var imageDiv = document.getElementsByClassName('gallery-item__img')[index];
			console.log(imageDiv);
			imageDiv.style.backgroundImage = "url('" + post.img + "')";

		});




		// var images = document.getElementsByClassName('gallery-item__img');
		// displayImages(images);

		// // Using plain for loop:
		// for (var k = 0; k < posts.length; k++) {

		// 	var newDiv = "<div class='gallery__item'>"
		// 	newDiv += posts[k].title;
		// 	newDiv += "</div>";
		// 	postGallery.innerHTML += newDiv;
		// }


		// function displayImages(imageDivArray, imagesArray) {
		// 	[].forEach.call(imageDivArray, function(div, index) {
		// 		div.style.backgroundImage = "url('" + imagesArray[index]
		// 	})
		// }

		// wrap this in its own display function? along with other crap?
		// postGallery.innerHTML += newDiv;


	}


}


