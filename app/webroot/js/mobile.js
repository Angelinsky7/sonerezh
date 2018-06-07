$(function() {
	"use strict";

	if (window.matchMedia("(max-width: 767px)").matches) {
        
        $('.navbar-collapse a').click(function(){
            $(".navbar-collapse").collapse('hide');
        });

        function enableHoverOnList($target, $parent){
            $('#content').on('touchstart', $target, function(e) {
                var link = $(this);
                if (link.hasClass("hover")) {
                    return true;
                } else {
                    link.addClass("hover");
                    $("#content " + $parent)
                        .not(this)
                        .removeClass("hover");
                    e.preventDefault();
                    return false;
                }
            });
        }

        enableHoverOnList('table tbody tr[data-id]', 'table tbody tr');
        enableHoverOnList('.playlist-row', '.playlist-row');

	}
});