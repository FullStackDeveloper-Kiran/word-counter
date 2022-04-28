(function($) {
	var wordCounter = {
		init: function() {
			this.DOM();
			this.events();
		},
		DOM: function() {
			this.textbox = $("#textCount");
			this.wordCount = $("#wordCount");
			this.charCount = $("#charCount");
		},
		events: function() {
			this.textbox.on("input", this.count.bind(this));
		},
		count: function() {
			var words = this.textbox.val().split(" "),
				chars = this.textbox.val();

			//DELETE EMPTY STRINGS
			for (var i = 0; i < words.length; i++) {
				while (words[i] === "") {
					words.splice(i, 1);
				}
			}
			//COUNT WORDS
			if (words.length === 1) {
				this.wordCount.text(words.length + " word");
			} else {
				this.wordCount.text(words.length + " words");
			}
			//COUNT CHARACTERS
			if (chars.length < 0) {
				words = [];
			} else if (chars.length === 1) {
				this.charCount.text(chars.length + " character");
			} else {
				this.charCount.text(chars.length + " characters");
			}
		}
	}
	wordCounter.init();
}(jQuery));