define(["knockout", "text!./about.html"],

    function (ko, view) {

        "use strict";

        function viewModel(params) {

            var self = this;



            return self;

        }

        return { viewModel: viewModel, template: view };
    });
