# Whipcrack v2.0

Whipcrack is a [Sass](http://sass-lang.com)-y front-end project starter infused with [Compass](http://compass-style.org) that builds upon a mixture of a few key components:

* The wonderful [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate) project
* Harry Roberts' (csswizardy) [great grid system](https://github.com/csswizardry/csswizardry-grids)
* Our own techniques, styles, and preferences that are built upon years of experience creating complex websites for our clients and ourselves

Whipcrack follows an atomic approach of splitting elements into many different .sass files and grouping them into logical folders. This technique is meant to make upkeep much easier and collaboration via [Git](http://gitscm.org) a breeze.

The core tenets of Whipcrack:

* Logical
* Easy to understand
* Easy to collaborate
* Easy to update
* Easy to extend

## Let's take a tour:

* **/_/:** The underscore directory is the library of resources relied upon by the rest of the project; images, stylesheets, JavaScript, Sass files, etc.

	* **/css/:** Keep the compiled stylesheet(s) here.

		* **main.css:** This is the one and only stylesheet used by the HTML file(s) at this time, and it's complied by Sass (see the **/_/sass/** details below for more information).

	* **/img/:** Keep the project's design images here. *Note:* Images that are uploaded by an end-user via a CMS should *not* be kept here; instead, use another root-level directory such as /assets/.

	* **/js/:** Keep the JavaScript files here.

		* **/vendor/:** Keep 3rd party JavaScript libraries here.

			* **jquery-1.9.1.min.js:** A minified version of the jQuery library.

			* **modernizr-2.6.2.min.js:** A minified version of the Modernizr library.

			* **picturefill.js:** A responsive images approach called [picturefill](https://github.com/scottjehl/picturefill), based on the proposed picture element. Include in `plugins.js` if your project requires.

			* **flexslider-2.0.0:** A minified version of [Flexslider 2](http://flexslider.woothemes.com), a lovely responsive slider for jQuery. Inlude in `plugins.js` if your project requires.

		* **main.js:** This is where you write your project-specific JavaScript.

		* **plugins.js:** Keep 3rd party plugins/scripts here.

	* **/sass/:** This is where the Sass/css magic happens; all of the style rules that compile to the above mentioned /_/css/main.css file exist in this directory.

		* **/_foundation/:** Contains partials filled with the foundational basics needed to support a healthy project.

			* **base.sass:** Contains all of the *general* selectors -- typical HTML elements, little-to-no custom classes -- that are needed to suit the design of this particular project.

			* **grid.sass:** Contains all of the grid-layout selectors, along with a few modifiers. This borrows HEAVILY from the [csswizardry grids system](https://github.com/csswizardry/csswizardry-grids).

			* **helpers.sass:** Contains helper classes which provide helpful, global rules that aren't particular to any one module, page, etc. For example, clearfix, hidden/invisible, etc. It's a great place to store selectors you'd often want to [`@extend`](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#extend).

			* **normalize.sass:** Contains modern-day reset rules. These rules 'normalize' inconsistencies across most web browsers, giving us a solid foundation to build upon. These rules define nothing particular to this project's design; that is reserved for base.sass. [Learn more about this file.](https://github.com/necolas/normalize.css)

			* **variables.sass:** Contains variables to be utilized throughout the other Sass files.

		* **/_mixin/:** Contains partials for the mixins that are utilized throughout the other Sass files.

			* **button.sass:** This creates the `btn` mixin, allowing you to turn anchors (and other certain elements) into lovely looking buttons. It has a good amount of parameters that can be passed through to the mixin, along with sensible default values if you opt to not pass anything. See the file itself for more detailed information.

			* **image-replace.sass:** This creates the `ir` mixin, making it simple to do image-replacement in both standard and high resolution environments, and it even has a bit of Compass functionality built in to help you define dimensions and paths automatically. See the file for more detailed information.

			* **media-queries.sass:** This creates a handful of media query mixins to query things like viewport width, pixel density, etc. See the file for more detailed information.

		* **/_module/:** Contains partials that represent a single, reusable, module that can be utilized one or more times throughout the project. Think of them as sub-sections of a web page, like the global header, an Events module, etc.

		* **/_page/:** Sometimes an entire web page needs its own unique selectors and/or declarations that are tweaked versions of their originals -- the home page is often a great example. This is where you should put individual partials for each web page that needs its own rules.

		* **_print.sass:** When a visitor prints a web page after rewinding a VHS tape and writing a check to pay for their perm, these rules will help the end-result look as good as possible.

		* **main.sass:** This is the glue that holds everything above together. It imports all of the partials described above and the Sass compiler is instructed to use this file, and everything it imports, to build the main.css file mentioned above. **Important:** do not forget to update this Sass file to include each and every _new_ partial you make.

* **.gitignore:** A nearly-empty .gitignore file for you to tweak as you see fit. [Learn more about the .gitignore file.](https://help.github.com/articles/ignoring-files)

* **.htaccess:** 99% of this file is sourced from the [HTML5 Boilerplate instance](https://github.com/h5bp/server-configs/blob/master/apache/README.md), with a few code blocks stripped out and a few other values adjusted to better align themselves with our common requirements.

* **404.html:** The above .htaccess file has an ErrorDocument rule that sets this 404.html file as the de-facto 404 page. Update it to suit your project's design, needs, etc.

* **apple-touch-icon-precomposed.png:** Update this to match your project's design as needed. [Learn more about this icon.](https://developer.apple.com/library/ios/#documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)

* **config.rb:** This file is used by Compass to set some rules, directories, and the working environment needed to compile Sass files and offer Compass-specific features to simplify development. [Learn more about Compass' config.rb file.](http://compass-style.org/help/tutorials/configuration-reference/)

* **favicon.ico:** Update this to match your project's design as needed. If you're supporting high resolution devices, be sure to read the following article: [http://daringfireball.net/2013/01/retina_favicons](http://daringfireball.net/2013/01/retina_favicons)

* **humans.txt:** Update this to match your team's and/or organization's information, along with any *thanks* you wish to provide, and a simple list of the technology you used to build your project. [Learn more about humans.txt.](http://humanstxt.org/)

* **index.php:** This file serves two purposes:

	* If you ignore all of the demonstration code between lines 20 and 213, what remains is a great starting point for all of the project's templates.

	* The demonstration code *itself* serves as a good resource to borrow from, and to show you how the various elements render in a web browser.

* **LICENSE-h5bp:** Because this code base borrows heavily from the [HTML5 Boilerplate project](https://github.com/h5bp/html5-boilerplate), we're including its license.

* **robots.txt:** Direct search engines to stay away from certain directories and/or files in your project; update this file to match your project's needs. [Learn more about robots.txt.](http://en.wikipedia.org/wiki/Robots_exclusion_standard)
