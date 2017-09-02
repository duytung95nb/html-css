
(function (global){
    global.uiHelper = {
        get: get,
        append: append,
        renderHtmlFromTemplateUrl: renderHtmlFromTemplateUrl
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
    function renderHtmlFromTemplateUrl(selector, templateUrl) {
        var self = this;
        var promise = new Promise(function (resolve, reject){
            self.get(templateUrl).then(function (html) {
                self.append(selector, html);
                resolve(html);
            }).catch(function (error){
                reject(error);
            });
        });
        return promise;
    };
})(window);