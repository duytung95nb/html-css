System.register(["../helpers/uiHelper"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var uiHelper_1, BasePage;
    return {
        setters: [
            function (uiHelper_1_1) {
                uiHelper_1 = uiHelper_1_1;
            }
        ],
        execute: function () {
            BasePage = class BasePage {
                constructor(templateUrl) {
                    this.templateUrl = templateUrl;
                }
                render(renderTo = "body") {
                    this.renderTo = renderTo;
                    var self = this;
                    uiHelper_1.default.get(this.templateUrl)
                        .then(function (html) {
                        uiHelper_1.default.append(self.renderTo, html);
                    })
                        .error(function (error) {
                        console.log(error);
                    });
                }
            };
            exports_1("BasePage", BasePage);
        }
    };
});
