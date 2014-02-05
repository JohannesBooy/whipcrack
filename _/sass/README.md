# The Contents of /\_/sass/:

* **/_foundation/:** Contains partials filled with the foundational basics needed to run a healthy site.

	* **base.sass:** This partial contains all of the *general* selectors --
	typical HTML elements; little-to-no custom classes -- that are needed to
	suit the design of this particular site.

	* **grid.sass:** This partial contains all of the grid-layout selectors,
	along with a few modifiers. This borrows HEAVILY from CSS Wizardry's
	wonderful bucket of magic: https://github.com/csswizardry/csswizardry-grids

	* **helpers.sass:** This partial contains helper placeholders which provide
	helpful, global rules that aren't particular to any one module, page, etc.
	For example, clearfix, hidden/invisible, etc. Quite useful for @extends!

	* **normalize.sass:** These are the modern-day reset rules. (Learn more
	about them here: https://github.com/necolas/normalize.css) These rules
	'normalize' inconsistencies across most web browsers, giving us a solid
	foundation to build upon. These rules define nothing particular to this
	site's design; that is reserved for base.sass.

	* **variables.sass:** Since we're big fans of not repeating ourselves not
	repeating ourselves, it's mighty convenient to set up variables to be
	utilized throughout the other Sass files. …and this is where that happens.

* **/_mixin/:** Contains partials for the mixins that are utilized throughout the other Sass files.

	* **button.sass:** This creates the "btn" mixin, allowing you to turn
	anchors (and other select elements) into buttons. It has a fair amount
	of adjustable parameters along with sensible default values, if needed.
	See the file for more detailed information.

	* **image-replace.sass:** This creates the "ir" mixin, making it simple to
	do image-replacement in both standard and high resolution environments, and
	it even has a bit of Compass magic built-in to help you define dimensions
	and paths automatically. See the file for more detailed information.

	* **media-queries.sass:** This creates a handful of media query mixins to
	query things like viewport width, pixel density, and (maybe?) more. See
	the file for more detailed information.

* **/_module/:** Contains partials that represent a single, reusable, module * that can be utilized one or more times throughout the site. Think of them as sub-
sections of a web page, like the global header, an Events module, etc.

	* **todo:** list module partials here...

	* **todo:** list module partials here...

* **/_page/:** Sometimes an entire web page needs its own unique selectors and/or declarations that are tweaked versions of the originals. The home page is often a great example of this requirement. This directory is where you'll put individual partials for each web page that needs its own rules.

	* **todo:** list page partials here...

	* **todo:** list module partials here...

* **_print.sass:** When somebody prints a web page after rewinding a VHS tape, these rules will help the end-result look as good as possible.

* **main.sass:** This is the glue that bonds everything together. This file exists to import all of the partials described above. The Sass compiler is instructed to use this file,
and everything it imports, to build a standard css file that resides at
/\_/css/main.css. This css file is, naturally, what the markup looks at to get all
of its style rules. **Important:** do not forget to update main.sass to include each
and every _new_ partial you make.