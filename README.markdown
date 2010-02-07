jQuery.fasten
=============
Sometimes-fixed positioning  
[http://github.com/mmonteleone/jquery.fasten][0]

jQuery.fasten is an unassuming little plugin which pins an element so that it does not scroll out of the viewport by giving it a `fixed` css position *only* when it would otherwise be outside of the viewport.  Useful for sidebars which must always be visible no matter the `scrollTop` of the `window`.

It's quite basic, and probably breaks in a variety of creative edge cases, including lack of a fallback solution for IE6's missing `position: fixed` support.  

Feel free to fork and improve!

Usage:
------

    $('div.fasten_me').fasten();

Requirements, installation, and notes
-------------------------------------

jQuery.fasten requires:

* [jQuery][3] 1.3.2 or greater

You can download the [zipped release][8] containing a minified build with examples and documentation or the development master with unit tests by cloning `git://github.com/mmonteleone/jquery.fasten.git`.

jQuery.fasten requires [jquery][3] 1.3.2 or greater

    <script type="text/javascript" src="jquery-1.4.1.min.js"></script>
    <script type="text/javascript" src="jquery.fasten.min.js"></script>

jQuery.fasten includes a test suite, and has been verified to work against Firefox 3.5, Safari 4, Internet Explorer 7,8, Chrome.  Please feel free to test its suite against other browsers.

Complete API
------------

### Activation

Within the `document.ready` event, call

    $('div.fasten_me').fasten();

Can also pass options

    // says to pin it so it never gets beyond 30px from the top when the page is scrolled
    // default would have been 10
    $('div.fasten_me').fasten({padding: 30});
    
### Options

* **padding**: The distance in pixels from the viewport boundary at which to apply a fixed position to the element.  The element will stop scrolling with the page once it gets within this distance from the edge
  * *default*: 10

### Events

* **fasten**:  raised on the matched selection when the element converts from its default positioning to 'fixed' (when it would have otherwise been scrolled out of view)
* **unfasten**:  raised on the matched selection when the element converts back from 'fixed' positioning to its default (when it would have otherwise been scrolled back into view)

To Do
-----

* Proper IE6 fallback support
* Bounce the scroll event internally as it is being duplicated in some browsers
* Expand the test suite for more edge cases

How to Contribute
-----------------

Development Requirements (for building and test running):

* Ruby + Rake, PackR, rubyzip gems: for building and minifying
* Java: if you want to test using the included [JsTestDriver][6] setup

Clone the source at `git://github.com/mmonteleone/jquery.fasten.git` and have at it.

The following build tasks are available:

    rake build     # builds package and minifies
    rake test      # runs jQuery.fasten specs against QUnit testrunner in default browser
    rake server    # downloads, starts JsTestDriver server, binds common browsers
    rake testdrive # runs jQuery.fasten specs against running JsTestDriver server
    rake release   # builds a releasable zip package

&lt;shameless&gt;Incidentally jQuery.fasten's unit tests use QUnit along with one some of my other projects, [Pavlov][4], a behavioral QUnit extension&lt;/shameless&gt;

Changelog
---------

* 0.5.0 - Initial Release

License
-------

The MIT License

Copyright (c) 2009 Michael Monteleone, http://michaelmonteleone.net

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[0]: http://github.com/mmonteleone/jquery.fasten "jQuery.fasten"
[1]: http://michaelmonteleone.net "Michael Monteleone"
[3]: http://jquery.com "jQuery"
[4]: http://github.com/mmonteleone/pavlov "Pavlov"
[6]: http://code.google.com/p/js-test-driver/ "JsTestDriver"
[7]: http://github.com/mmonteleone/jquery.fasten/raw/master/jquery.fasten.js "raw fasten script"
[8]: http://cloud.github.com/downloads/mmonteleone/jquery.fasten/jquery.fasten.zip "jQuery.fasten Release"
