define(["jquery","knockout", "pages", "crossroads", "hasher"],

    function ($, ko, pages, crossroads, hasher) {

    var paths = [];

    pages.forEach(function(page){
        paths.push( { url: page.url, params: { page: page.name } } );
    });

    return new Router({
        routes: paths
    });


    function Router(config) {
        var currentRoute = this.currentRoute = ko.observable({});

        ko.utils.arrayForEach(config.routes, function (route)
        {
            crossroads.addRoute(route.url, function (requestParams)
            {
                currentRoute(ko.utils.extend(requestParams, route.params));
            });
        });
        crossroads.routed.add(console.log, console);
        activateCrossroads();
    }

    function activateCrossroads() {
        function parseHash(newHash, oldHash)
        {
            crossroads.parse(newHash);
        }

        function changeHash(newHash, oldHash) {
            var route = newHash;

            crossroads.parse(newHash);
        }
        crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;

        hasher.initialized.add(parseHash);
        hasher.changed.add(changeHash);
        hasher.init();
    }
});
