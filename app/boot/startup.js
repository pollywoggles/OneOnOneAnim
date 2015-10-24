define(['jquery', 'knockout', 'router', 'bootstrap', 'knockout-projections'], function ($, ko, router) {

        ko.components.register('home', { require: 'OneOnOneAnim/app/pages/home/home' });
        ko.components.register('about', { require: 'OneOnOneAnim/app/pages/about/about' });

        ko.applyBindings({ route: router.currentRoute });
});