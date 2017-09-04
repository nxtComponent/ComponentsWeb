# \<t-list\>

displays a virtual, &#39;infinite&#39; list. The template inside the t-list element represents the DOM to create for each list item.

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.


Queries:
------------
- In resources we have 
    "title": "We found {{total}} hotels for your search",
    "filteredTitle": "We found {{current}}/{{total}} hotels for your search"
  from where we will be getting current and total.

- Resources for search result info item should be passed to t-list component only. Better if we can merge it.
