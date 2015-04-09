( function( $ ){
    $(document).keydown(function (e) {
        if ((e && e.keyCode === 192 && e.shiftKey && e.ctrlKey)) {
            if (!$('#in_guidelines').length) {
                var ctr = '<div id="in_guidelines" style="display:none;"><div id="guidelines"><div class="for_guidelines">' +
                    '<div class="col16 first"><div class="box"><p class="grid_p"></p></div></div>' +
                    '<div class="col16"><div class="box"><p class="grid_p"></p></div></div>' +
                    '<div class="col16"><div class="box"><p class="grid_p"></p></div></div>' +
                    '<div class="col16"><div class="box"><p class="grid_p"></p></div></div>' +
                    '<div class="col16"><div class="box"><p class="grid_p"></p></div></div>' +
                    '<div class="col16 last"><div class="box"><p class="grid_p"></p></div></div>' +
                    '</div></div></div>';
                $('body').prepend(ctr);
            }
            var grid = $('#in_guidelines');
            grid.css('display', grid.css('display') === 'none' ? 'block' : 'none');
        } else if ((e && e.keyCode === 49 && e.shiftKey && e.ctrlKey)) {
            var popupBox = '<div id="popup_box" style="display:none"></div>';
            var elems = $('i[id], input[type="submit"][id], button[type="submit"]');

            if (!$('#popup_box').length) {
                $('body').prepend(popupBox);
            }
            elems.each(function () {
                var markedText = (this.tagName == "I") ? $(this).parent() : $(this);
                //console.log($(this).parent());
                //console.log(this.tagName == "I");

                if (!markedText.hasClass("marked_text") || !markedText.parent().hasClass("marked_text")) {
                    markedText.addClass("marked_text");
                } else {
                    markedText.removeClass("marked_text");
                }
            });

            $('#popup_box').css('display', $('#popup_box').css('display') === 'none' ? 'block' : 'none');

        } else return;
    })
})( jQuery )
