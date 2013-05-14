# Whipcrack v2.0

Whipcrack is a [Sass](http://sass-lang.com)-y front-end project starter infused with [Compass](http://compass-style.org). It follows an 'atomic' approach of splitting elements into many different .sass files and grouping them into logical folders. This technique is meant to make upkeep way easier and collaboration via [Git](http://gitscm.org) a breeze.

The core tenets of Whipcrack:
- Logical
- Easy to understand
- Easy to collaborate
- Easy to update
- Easy to extend

Let's take a tour.

## main.sass

`main.sass` is the only file that should have `@include` statements. If we adhere to this rule it is easy to use `main.sass` not only as the compiler style sheet but as a map for how the `main.css` file is being built. It will also serve as a the sole place to activate and deactivate modules and mixins.

## _mixin

This folder holds all available mixins. Mixins should be documented at the top of the mixin's file with a brief description of how it works, any parameters, and an example usage.

## _foundation

The `_foundation` folder holds all the files needed to style a website. The order in which these appear in `main.sass` is important.

### variables.sass

Variables are an important part of Sass but they shouldn't be overused. A good rule of thumb is that variables should be  descriptive, memorable, and flexible enough to have wide usage throughout your project. For example `$sansStack` could be used easily in both of these rules:

	h1
		font-family: $sansStack

	.global-nav a
		font-family: $sansStack

### normalize.sass

This is a Sass'd up [normalize.css v1.0.2](http://git.io/normalize)

### headings.sass

Let these drive the heading styles for the site. Don't forget that you can use the Sass @extend to reuse these styles throughout the site. For example:

	.blog-subhead
		@extend h2

### links.sass

Use this file to gather link styles and calls to action across the site.

### base.sass

This file can likely be broken up more atomically but for now it holds all base styles that are not addressed in other files for the project.

## Layout

### grids.sass

Inspired by [inuit.css](http://inuitcss.com) this grid system is meant to be applied directly to HTML elements to quickly develop layouts. Declare what the layout should be mobile first, then for 'lap' devices like the iPad, then for 'desk' devices like old-fashioned computers. The class 'gw' stands for 'grid wrapper' and should be applied to the outer most element. the class 'g' denotes elements that should be `float`ed in the grid which we can then apply grid sizes to. A grid gutter width can be set in `_foundation/variables.sass`. Hey look! An example:

	<section class="gw">
		<article class="g one-whole lap-two-thirds desk-three-fifths">
			...
		</article>
		<aside class="g one-whole lap-one-third desk-two-fifths">
			...
		</aside>
	</section>

## Modules

This folder holds modules for shared blocks of code throughout your project. Global headers, global footers, and any other portable styles are good candidates to be included here.

## Pages

This folder holds style for specific pages.

## Coffee is for closers

These are styles that need to be at the bottom of our stylesheet.

### _helpers.sass

These are helper classes that are meant to be directly applied to HTML elements.

### _print.sass

Printers gonna print.