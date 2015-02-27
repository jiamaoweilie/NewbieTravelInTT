var lightbox = {

	openLightbox: function(taskMapImg) {
		var yButton = $("#btnAccept");
		var nButton = $("#btnBack");

        $("#lightBox").fadeIn("slow");
        yButton.bind("click", taskMapImg, function(image){
	        image.preventDefault();
	        $("#lightBox").fadeOut("slow");
	        image.data.className = "img_clicked";
	    });
	    nButton.bind("click", function(e){
	        e.preventDefault();
	        $("#lightBox").fadeOut("slow");
	    });
	}

}