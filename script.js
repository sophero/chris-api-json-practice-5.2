
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
				console.log("getting an XMLHttpRequest error message? Make sure Cross-Origin Resource Sharing is enabled. You may need to reactivate it.");
			}

		});		
	}


	function generatePosts(postsArray) {

		postsArray.forEach(function(post) {
			var dateDiv = newDiv("gallery-item__date", parseDate(post.date));
			var imageDiv = newDiv("gallery-item__img", "");
			var titleDiv = newDiv('gallery-item__title', post.title);
			var hlineDiv = newDiv('gallery-item__hline', "");
			var categoriesDiv = newDiv('gallery-item__categories', categoryStr(post.categories));

			var galleryItemDiv = newDiv('gallery-item', imageDiv + dateDiv + titleDiv + hlineDiv + categoriesDiv); 
			postGallery.innerHTML += galleryItemDiv;
		});

		postsArray.forEach(function(post, index) {
			var imageDiv = document.getElementsByClassName('gallery-item__img')[index];
			imageDiv.style.backgroundImage = "url('" + post.img + "')";
		});

		function newDiv(classStr, divContent) {
			var newDiv = "<div class='" + classStr + "'>";
			newDiv += divContent + "</div>";
			return newDiv;
		}

		function parseDate(dateStr) {
			var monthAbbrArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
			var split = dateStr.split("/");
			var month = monthAbbrArray[split[0]]; //American Date!
			var day = split[1];
			return month + " " + day;
		}

		function categoryStr(categoriesArray) {
			var str = categoriesArray[0];
			if (categoriesArray.length === 1) {
				return str;
			} else {
				for (var k = 1; k < categoriesArray.length; k++) {
					str += ", " + categoriesArray[k]
				}
				return str;
			}
		}

	}


}


