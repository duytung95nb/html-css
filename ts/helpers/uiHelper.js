System.register(["../common/promiseFactory"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function get(templateUrl) {
        let promise = promiseFactory_1.PromiseFactory.create();
        window.jQuery.get(templateUrl)
            .then(function (data) {
            promise.resolve(data);
        })
            .catch(function (error) {
            promise.reject(error);
        });
        return promise;
    }
    function append(renderTo, content) {
        let container = window.jQuery(renderTo);
        if (!container)
            throw "Cannot find target container";
        container.append(content);
    }
    var promiseFactory_1, uiHelper;
    return {
        setters: [
            function (promiseFactory_1_1) {
                promiseFactory_1 = promiseFactory_1_1;
            }
        ],
        execute: function () {
            uiHelper = {
                get: get,
                append: append
            };
            exports_1("default", uiHelper);
        }
    };
});
