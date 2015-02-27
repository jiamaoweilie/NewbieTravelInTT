var taskMaps = {

	initialize: function() {
		$("#taskMaps img").bind("click", function(e){
			var that = this;

	        e.preventDefault();
	        lightbox.openLightbox(that);
	    });
	}

}