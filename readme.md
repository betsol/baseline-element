# baseline-element

[![Bower version](https://badge.fury.io/bo/baseline-element.svg)](http://badge.fury.io/bo/baseline-element)
[![npm version](https://badge.fury.io/js/baseline-element.svg)](http://badge.fury.io/js/baseline-element)


This JavaScript library provides a way to fix an issue with responsive images that are used in vertical rhythm layouts.


## Demos and examples

[Please see our demo.][demo]


## Installation

### Install library with Bower

`bower install --save baseline-element`


### Install library with npm

`npm install --save baseline-element`


### Add library to your page

``` html
<script src="dist/baseline-element.js"></script>
```

You should use minified version (`baseline-element.min.js`) in production.


## Usage

### In vanilla JS

``` javascript
var baseline = 24;
var element = document.getElementById('my-responsive-image');
window.baselineElement(element, baseline);
```


### With jQuery/Zepto

``` javascript
var baseline = 24;
$('.responsive-image').baselineElement(baseline);
```


## Changelog

Please see the [complete changelog][changelog] for list of changes.


## Feedback

If you have found a bug or have another issue with the library —
please [create an issue][new-issue].

If you have a question regarding the library or it's integration with your project —
consider asking a question at [StackOverflow][so-ask] and sending me a
link via [E-Mail][email]. I will be glad to help.

Have any ideas or propositions? Feel free to contact me by [E-Mail][email].

Cheers!


## Developer guide

Fork, clone, create a feature branch, commit, create a PR.

Run:

- `npm install && bower install` to initialize the project
- `gulp build` to re-build the dist files

Do not add dist files to the PR itself.
We will re-compile the module manually each time before releasing.


## Support

If you like this library consider to add star on [GitHub repository][repo-gh].

Thank you!


## Credits

Thanks to Vladimir Gaintsev for great implementation ideas, thorough testing and [beautiful demo page][demo]!


## License

The MIT License (MIT)

Copyright (c) 2014 - 2015 Slava Fomin II, BETTER SOLUTIONS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


  [changelog]: changelog.md
  [so-ask]:    http://stackoverflow.com/questions/ask?tags=javascript
  [email]:     mailto:s.fomin@betsol.ru
  [new-issue]: https://github.com/betsol/baseline-element/issues/new
  [repo-gh]:   https://github.com/betsol/baseline-element
  [gulp]:      http://gulpjs.com/
  [demo]:      http://betsol.github.io/baseline-element/
