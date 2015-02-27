var lightbox = {

	openLightbox: function(taskMapImg) {
		var yButton = $("#btn-lightbox-accept");
		var nButton = $("#btn-lightbox-back");

        $("#sect-light-box").fadeIn("slow");
        yButton.bind("click", taskMapImg, function(image){
	        image.preventDefault();
	        $("#sect-light-box").fadeOut("slow");
	        image.data.className = "img_clicked";
	    });
	    nButton.bind("click", function(e){
	        e.preventDefault();
	        $("#sect-light-box").fadeOut("slow");
	    });
	}

}