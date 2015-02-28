var lightbox = {

	openLightbox: function(taskMapImg) {
		var yButton = $("#btn-lightbox-accept");
		var nButton = $("#btn-lightbox-back");
		var countTasksAccepted = $("#count-tasks-accepted").attr("value");

        $("#sect-light-box").fadeIn("slow");
        $("#light-box-bg").fadeIn("slow");

        if ('3' === countTasksAccepted) {
        	$(yButton).hide();
        };

        yButton.bind("click", taskMapImg, function(image){
        	var accepted_tasks = $(".accepted_task");
        	var i;
	        image.preventDefault();
	        $("#sect-light-box").fadeOut("slow");
	        $("#light-box-bg").fadeOut("slow");
	        $(image.data).siblings(".mark_in_progress").show();
	        for (i = 0; i < accepted_tasks.length; i++) {
	        	if (0 === $(accepted_tasks[i]).children().length) {
	        		$(accepted_tasks[i]).append('<img src="image/sample.jpg" alt="" class="img_task_accepted"/>');
	        		countTasksAccepted = '' + (i + 1);
	        		$("#count-tasks-accepted").attr("value", "" + (i + 1));
	        		break;
	        	};
	        }
	        $(this).unbind();
	    });

	    nButton.bind("click", function(e){
	        e.preventDefault();
	        $("#sect-light-box").fadeOut("slow");
	        $("#light-box-bg").fadeOut("slow");
	        $(this).unbind();
	    });
	}

}