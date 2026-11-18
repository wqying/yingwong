/*
	Wuxia theme helpers.
	The Portfolio sub-menu opens upward by default (the nav sits at the bottom of
	the first screen). Once the nav has scrolled near the top, flip it downward.
*/
(function () {
	var dropdowns = document.querySelectorAll('#nav .dropdown');

	Array.prototype.forEach.call(dropdowns, function (item) {
		var menu = item.querySelector('.dropdown-menu');
		if (!menu) return;

		function place() {
			var roomAbove = item.getBoundingClientRect().top;
			item.classList.toggle('drop-down', roomAbove < menu.offsetHeight + 16);
		}

		item.addEventListener('mouseenter', place);
		item.addEventListener('focusin', place);
	});
})();
