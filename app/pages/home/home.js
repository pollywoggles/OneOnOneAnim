define(["knockout", "text!./home.html"],

    function (ko, view) {

        "use strict";

        function viewModel(params) {

            var self = this;

            //TODO: add more page functionality here

            return self;

        }

        return { viewModel: viewModel, template: view };
    });
