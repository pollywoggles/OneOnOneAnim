# OneOnOneAnim

## General

This is a Single-Page Application (SPA), using an MVVM pattern. This app consists of front-end html, css, and javascript. The intent is to use ajax calls to a server web api (server-side code not written). 

Use an editor of choice; no heavy development environment/server is necessary.

###SPA Pages

Each SPA page is located in the [pages directory](/app/pages). A page url consists of a #hash, such as, #about for the "about" page.

A page consists of a view (html) and viewmodel (js) file. Sample "home" and "about" pages are currently in the directory. Feel free to edit or remove sample pages.

###Javascript Libraries
The application uses [crossroads.js](https://millermedeiros.github.io/crossroads.js/) for routing, as well as [hasher.js](https://github.com/millermedeiros/hasher/) for maintaining browser history (the browser's forward and backward buttons work as expected).

[require.js](http://requirejs.org/docs/api.html) manages javascript file dependencies. Here's the [config file](app/boot/require.config.js).

[knockoutjs](http://knockoutjs.com/) is used for data-binding and the MVVM library in general. I's just one MV option among many. A great comparison between various MV libraries can be viewed in the [ToDo page](http://todomvc.com/).

[bootstrap](http://getbootstrap.com/) is used in Index.html (it can also be used in future html views). However, it can be safely removed. It does not (yet) have any dependencies.

[Less.js](scripts/libs/less) has been added, but is not being used.

And finally, [all the javascript libraries](scripts/libs)

##Index.html

The [Index.html](Index.html) page (located at the root) is the main SPA page. It's the host for the rest of the site. Currently it's using [bootstrap](http://getbootstrap.com/) classes, but bootstrap can be safely removed.

There are two important DOM elements in Index.html,

1. anchors (such as ```<a href="#About">About</a>``` )
2. a special div with ```data-bind="component"```

Change whatever you want, just, 

1. keep the div component (it's used to render the SPA pages), 
2. some way (such as an anchor) to jump between hash urls.

##Adding pages
1. Go to the [pages directory](/app/pages)
2. Create a new directory for your page name, lets call it _pageName_
3. Create two new files inside the directory: _pageName.html_ and _pageName.js_
4. Paste the boilerplate code from another page.js (for instance, open _home.js_, and copy/paste its code into your new _pageName.js_ file)
5. In your new _pageName.js_ file, in the first line, change the html reference to your new pageName, such as this, ```define(["knockout", "text!./pageName.html"]```
6. Open [pages.js](/app/pages/pages.js)
7. Inside pages.js, add a new element to the array, using this format, ```{name: "pageName", path: "OneOnOneAnim/app/pages/pageName/pageName", url: "pageName"}```

   - *name* is used to register your new pages within javascript

   - *path* is used by [require.js](http://requirejs.org/docs/api.html) to find your _pageName.js_ file (leave off the .js extension of your javascript file name)

   - *url* is used by the router to show your page, you can use any name, but it's less confusing if you stick with the same name (in the example, we are using _pageName_)

(use the included sample pages, _home_ and _about_, as a guide)

##Removing pages
Any page can be removed, just reverse the _Adding pages_ steps. 

##Agile Board
An agile board for this project is located at [scrumy](https://scrumy.com/oneonone)
