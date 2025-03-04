
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), textElement = $ele.html(), progress = 0;
			console.log(textElement);
			$ele.html('');
			var timer = setInterval(function() {
				var current = textElement.substr(progress, 1);
				console.log(current);
				if (current == '<') {
					progress = textElement.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(textElement.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= textElement.length) {
					clearInterval(timer);
				}
			}, 40);
		});
		return this;
	};
})(jQuery);
