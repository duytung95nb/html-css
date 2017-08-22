
(function (global){
    global.uiHelper = {
        get: get,
        append: append,
        renderHtmlFromUrl: renderHtmlFromUrl
    };
    return;
    function get(url) {
        return $.get(url);
    };
    function append(selector, html) {
        var target = $(selector);
        if (target.length == 0) throw "Invalid selector!";
        target.append(html);
    };
    function renderHtmlFromUrl(selector, url) {
        var self = this;
        var promise = new Promise(function (resolve, reject){
            self.get(url).then(function (html) {
                self.append(selector, html);
                resolve(html);
            }).catch(function (error){
                reject(error);
            });
        });
        return promise;
    };
})(window);