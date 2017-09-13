System.register(["./basePage"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var basePage_1, HomePage;
    return {
        setters: [
            function (basePage_1_1) {
                basePage_1 = basePage_1_1;
            }
        ],
        execute: function () {
            HomePage = class HomePage extends basePage_1.BasePage {
                constructor() {
                    super("ts/pages/homePage.html");
                }
            };
            exports_1("HomePage", HomePage);
        }
    };
});
