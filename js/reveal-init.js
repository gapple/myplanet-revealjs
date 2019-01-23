/**
 * @file
 * Initialize the Reveal handler.
 */

(function () {
	// More info about config & dependencies:
	// - https://github.com/hakimel/reveal.js#configuration
	// - https://github.com/hakimel/reveal.js#dependencies
	Reveal.initialize({
			center: false,
			width: "100%",
			height: "100%",
			margin: 0,
			minScale: 1,
			maxScale: 1,
			history: true,

			// Arrow keys progress through sub-slides
			// keyboard: {
			// 	39: 'next', // right key
			// 	37: 'prev'	// left key
			// },

			dependencies: [
					{ src: 'plugin/markdown/marked.js' },
					{ src: 'plugin/markdown/markdown.js' },
					{ src: 'plugin/notes/notes.js', async: true },
					{
							src: 'plugin/highlight/highlight.js',
							async: true,
							condition: function () {
									// Trim whitespace from code blocks, and prevent HTML escaping by default.
									// This must be done before the plugin is loaded.
									Array.prototype.forEach.call(
											document.querySelectorAll('pre code'),
											function (element) {
													if (!element.hasAttribute('data-notrim')) {
															element.setAttribute('data-trim', '');
													}
													if (!element.hasAttribute('data-escape')) {
															element.setAttribute('data-noescape', '');
													}
											}
									);
									return true;
							},
							callback: function () {
									hljs.initHighlightingOnLoad();
							}
					}
			]
	});

}());
