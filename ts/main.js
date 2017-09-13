System.register(["./pages/homePage"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var homePage_1, homePage;
    return {
        setters: [
            function (homePage_1_1) {
                homePage_1 = homePage_1_1;
            }
        ],
        execute: function () {
            homePage = new homePage_1.HomePage();
            homePage.render();
        }
    };
});
