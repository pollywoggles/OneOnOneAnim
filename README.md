# OneOnOneAnim

## General

This is a SPA application, using an MVVM pattern.

Each page is located in the [pages directory](/app/pages)

A page consists of a view (html) and viewmodel (js) file. A sample "home" and "about" page are currently in the directory.

The application uses [crossroads.js](https://millermedeiros.github.io/crossroads.js/) for routing, as well as [hasher.js](https://github.com/millermedeiros/hasher/) for maintaining browser history within the SPA (i.e. so the browser's forward and backward buttons will work).

##Index.html

The Index.html page (located at the root) is the main page for the Single-Page Application. It's the host for the rest of the site. Currently is is using [bootstrap](http://getbootstrap.com/), but bootstrap is not necessary and can be safely removed if you choose.

There are two important elements in Index.html,
*anchors (such as <a href="#">Home</a> ), which open different pages in the SPA
*div with _data-bind="component"_, which is the page component

Change whatever you want, just make sure you keep the div component, as well as some way (such as an anchor) to jump to new hash urls.

##Adding pages
1. Go to the [pages directory](/app/pages)
2. Create a new directory for your page name, lets call it _pageName_
3. Create two new files inside the directory: _pageName.html_ and _pageName.js_
4. Paste the boilerplate code from another page.js (for instance, open home.js, and copy/paste its code into your new pageName.js file)
5. In your new pageName.js file, in the first line, change the html reference to your new pageName, such as this, _define(["knockout", *"text!./pageName.html"*]_
6. Open [pages.js](/app/pages/pages.js)
7. Inside pages.js, add a new element to the array, using this format, {name: "pageName", path: "OneOnOneAnim/app/pages/pageName/pageName", url: "pageName"}
**name is used to register your new pages within javascript
**path is used to find your pageName.js file
**url is used by the router to show your page, you can use any name, but probably less confusing if you stick with the same name (in the example, we are using _pageName_)

##Removing pages
Any page can be removed, just reverse the _Adding pages_ steps. 


