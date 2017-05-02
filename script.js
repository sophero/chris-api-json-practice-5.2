
var gallery = new PostGallery();
gallery.getJSON();

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
			},
			error: function(errorObj) {
				// console.log(errorObj);
				console.log("getting an XMLHttpRequest error message? Make sure Cross-Origin Resource Sharing is enabled. You may need to reactivate it.");
			}

		});		
	}


	function generatePosts(posts) {

		posts.forEach(function(post) {
			var dateDiv = newDiv("gallery-item__date", parseDate(post.date));
			var imageDiv = newDiv("gallery-item__img", "");
			var titleDiv = newDiv('gallery-item__title', post.title);

			var galleryItemDiv = newDiv('gallery-item', imageDiv + dateDiv + titleDiv); 
			postGallery.innerHTML += galleryItemDiv;

		});


		[].forEach.call(posts, function(post, index) {
			var imageDiv = document.getElementsByClassName('gallery-item__img')[index];
			imageDiv.style.backgroundImage = "url('" + post.img + "')";
		});

		function newDiv(classStr, divContent) {
			var newDiv = "<div class='" + classStr + "'>";
			newDiv += divContent + "</div>";
			return newDiv;
		}

		function parseDate(dateStr) {
			var monAbbrArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
			var split = dateStr.split("/");
			var mon = monAbbrArray[split[0]]; //American Date!
			var day = split[1];
			return mon + day;
		}


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


