define(['jquery', 'knockout', 'pages', 'router', 'bootstrap', 'knockout-projections'],

        function ($, ko, pages, router) {

            pages.forEach(function(page){
               ko.components.register(page.name, { require: page.path});
            });

        ko.applyBindings({ route: router.currentRoute });
});
