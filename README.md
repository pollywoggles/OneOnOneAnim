# OneOnOneAnim

## General

This is a Single-Page Application (SPA), using an MVVM pattern. This app consists of front-end html, css, javascript. The intent is to use ajax calls to a server web api (server-side code not written yet). Use your editor editor of choice; no heavy development environment is necessary.

Each SPA page is located in the [pages directory](/app/pages). A page url consists of a #hash, such as, #about for the "about" page.

A page consists of a view (html) and viewmodel (js) file. Sample "home" and "about" pages are currently in the directory. Feel free to edit or remove sample pages.

###Javascript Libraries
The application uses [crossroads.js](https://millermedeiros.github.io/crossroads.js/) for routing, as well as [hasher.js](https://github.com/millermedeiros/hasher/) for maintaining browser history within the SPA (i.e. so the browser's forward and backward buttons will work).

[require.js](http://requirejs.org/docs/api.html) manages javascript file dependencies. Here's the [config file](app/boot/require.config.js).

[knockoutjs](http://knockoutjs.com/) is used for data-binding and the MVVM library in general. I's just one MV option among many. A great comparison between various MV libraries can be viewed in the [ToDo page](http://todomvc.com/).

[bootstrap](http://getbootstrap.com/) is used in Index.html (it can also be used in future html views). However, it can be safely removed. It does not (yet) have any dependencies.

[Less.js](scripts/libs/less) has been added, but is not being used.

And finally, [all the javascript libraries](scripts/libs)

##Index.html

The _Index.html_ page (located at the root) is the main SPA page. It's the host for the rest of the site. Currently it's using [bootstrap](http://getbootstrap.com/), but bootstrap can be safely removed.

There are two important DOM elements in Index.html,

1. anchors (such as ```<a href="#About">About</a>``` )
2. a special div with ```data-bind="component"```

Change whatever you want, just make sure you keep the div component (it is a SPA Page component), as well as some way (such as an anchor) to jump between hash urls.

##Adding pages
1. Go to the [pages directory](/app/pages)
2. Create a new directory for your page name, lets call it _pageName_
3. Create two new files inside the directory: _pageName.html_ and _pageName.js_
4. Paste the boilerplate code from another page.js (for instance, open home.js, and copy/paste its code into your new pageName.js file)
5. In your new pageName.js file, in the first line, change the html reference to your new pageName, such as this, _define(["knockout", *"text!./pageName.html"*]_
6. Open [pages.js](/app/pages/pages.js)
7. Inside pages.js, add a new element to the array, using this format, {name: "pageName", path: "OneOnOneAnim/app/pages/pageName/pageName", url: "pageName"}

   - *name* is used to register your new pages within javascript

   - *path* is used to find your pageName.js file

   - *url* is used by the router to show your page, you can use any name, but probably less confusing if you stick with the same name (in the example, we are using _pageName_)

##Removing pages
Any page can be removed, just reverse the _Adding pages_ steps. 

##Agile Board
An agile board for this project is located at [scrumy](https://scrumy.com/oneonone)
