# Whipcrack v2.0

Whipcrack is a [Sass](http://sass-lang.com)-y front-end project starter infused with [Compass](http://compass-style.org) that builds upon a mixture of a few key components:

* The wonderful [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)
* Harry Roberts' (csswizardy) [great grid system](https://github.com/csswizardry/csswizardry-grids)
* Our own techniques, honed from years of experience building complex websites

Whipcrack follows an atomic approach of splitting elements into many different .sass files and grouping them into logical folders. This technique is meant to make upkeep way easier and collaboration via [Git](http://gitscm.org) a breeze.

The core tenets of Whipcrack:

* Logical
* Easy to understand
* Easy to collaborate
* Easy to update
* Easy to extend

## Let's take a tour:

* **/_/:** The underscore directory is the library of resources and assets relied upon by the rest of the website; images, stylesheets, JavaScript, Sass files, etc.

	* **/css/:** Keep the compiled stylesheet(s) here.

		* **main.css:** This is the one stylesheet used by the HTML document(s), and it's complied by Sass (see the **/_/sass/** information below).

	* **/img/:** Keep your project's design images here.

	* **/js/:** A fine place to store JavaScript files.

		* **/vendor/:** 3rd party JavaScript libraries live here.

			* **jquery-1.9.1.min.js:** Minified version of the jQuery library.

			* **modernizr-2.6.2.min.js:** Minified version of the Modernizr library.

		* **main.js:** Write your project-specific JavaScript here.

		* **plugins:** 3rd party plugins/scripts.

	* **/sass/:** Where you'll write all of your styles, in the Sass syntax.

		* **/_foundation/:** Contains partials filled with the foundational basics needed to run a healthy site.

			* **base.sass:** This partial contains all of the *general* selectors -- typical HTML elements; little-to-no custom classes -- that are needed to suit the design of this particular site.

			* **grid.sass:** This partial contains all of the grid-layout selectors, along with a few modifiers. This borrows HEAVILY from CSS Wizardry's wonderful bucket of magic: https://github.com/csswizardry/csswizardry-grids

			* **helpers.sass:** This partial contains helper classes which provide helpful, global rules that aren't particular to any one module, page, etc. For example, clearfix, hidden/invisible, etc. Quite useful for @extends!

			* **normalize.sass:** These are the modern-day reset rules. (Learn more about them here: https://github.com/necolas/normalize.css) These rules 'normalize' inconsistencies across most web browsers, giving us a solid foundation to build upon. These rules define nothing particular to this site's design; that is reserved for base.sass.

			* **variables.sass:** Since we're big fans of not repeating ourselves not repeating ourselves, it's mighty convenient to set up variables to be utilized throughout the other Sass files. …and this is where that happens.

		* **/_mixin/:** Contains partials for the mixins that are utilized throughout the other Sass files.

			* **button.sass:** This creates the "btn" mixin, allowing you to turn anchors (and other select elements) into buttons. It has a fair amount of adjustable parameters along with sensible default values, if needed. See the file for more detailed information.

			* **image-replace.sass:** This creates the "ir" mixin, making it simple to do image-replacement in both standard and high resolution environments, and it even has a bit of Compass magic built-in to help you define dimensions and paths automatically. See the file for more detailed information.

			* **media-queries.sass:** This creates a handful of media query mixins to query things like viewport width, pixel density, and (maybe?) more. See the file for more detailed information.

		* **/_module/:** Contains partials that represent a single, reusable, module * that can be utilized one or more times throughout the site. Think of them as sub-sections of a web page, like the global header, an Events module, etc.

			* **todo:** list module partials here...

			* **todo:** list module partials here...

		* **/_page/:** Sometimes an entire web page needs its own unique selectors and/or declarations that are tweaked versions of the originals. The home page is often a great example of this requirement. This directory is where you'll put individual partials for each web page that needs its own rules.

			* **todo:** list page partials here...
			* **todo:** list module partials here...

		* **_print.sass:** When somebody prints a web page after rewinding a VHS tape, these rules will help the end-result look as good as possible.

		* **main.sass:** This is the glue that bonds everything together. This file exists to import all of the partials described above. The Sass compiler is instructed to use this file, and everything it imports, to build a standard css file that resides at /\_/css/main.css. This css file is, naturally, what the markup looks at to get all of its style rules. **Important:** do not forget to update main.sass to include each and every _new_ partial you make.

	* **.gitignore:** A nearly-empty .gitignore file for you to add to as you see fit.

	* **.htaccess:** 99% of this file is sourced from the HTML5 Boilerplate instance, with a few code blocks stripped out and a few other values adjusted to better align themselves with our common requirements.

	* **404.html:** The above .htaccess file has an ErrorDocument rule that sets this document as the de-facto 404 page. Update it to suit your project's design, needs, etc.

	* **apple-touch-icon...:** Update these to match your project's design as needed.

	* **config.rb:** This file is used by Compass to set some rules, directories, and the working environment needed to compile Sass files and offer Compass-specific features to simplify development.

	* **favicon.ico:** Update this to match your project's design as needed. If you're supporting hidpi devices, be sure to read the following article: [http://daringfireball.net/2013/01/retina_favicons](http://daringfireball.net/2013/01/retina_favicons)

	* **humans.txt:** Update this to match your team's and/or organization's information, along with any *thanks* you wish to provide, and a simple list of the technology you used to complete the project.

	* **index.php:** This document serves two purposes

		1. If you exclude all of the demonstration code between lines 20 and 213, the remaining code is a great starting point for all of your project's templates.

		2. However, the demonstration code itself serves as a good resource to borrow from, and to show you how the various elements render in a web browser.

	* **LICENSE-h5bp:** Because this code base borrows heavily from the HTML5 Boilerplate project, we're including its license.

	* **:** Direct search engines to stay away from certain directories and/or files in your project; update this file to match your project's needs.