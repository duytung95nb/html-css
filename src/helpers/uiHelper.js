
(function (global){
    global.uiHelper = {
        get: get,
        append: append
    };
    return;
    function get(templateUrl) {
        var promise = PromiseFactory.create();
        $.get(templateUrl)
        .then(function (data) {
            promise.resolve(data);
        })
        .catch(function (error) {
            promise.reject(error);
        })
        return promise;
    };
    function append(selector, html) {
        $(selector).append(html);
    };
})(window);
