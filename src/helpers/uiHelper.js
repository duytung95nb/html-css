
(function (global) {
    global.uiHelper = {
        get: get,
        append: append
    };
    return;
    function get(url) {
        var promise = PromiseFactory.create();
        $.get(url)
        .then(function (data) {
            promise.resolve(data);
        })
        .catch(function (errorData) {
            promise.reject(errorData);
        });
        return promise;
    };
    function append(target, html) {
        var selector = $(target);
        if (!selector.length) throw 'Cannot find target';
        selector.append(html);
    }
})(window);