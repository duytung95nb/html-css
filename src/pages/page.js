
function Page(templateUrl) {
    this.renderTo = null;
    this.render = render;
    return this;
    function render(selector = "body") {
        this.renderTo = selector;
        var self = this;
        window.uiHelper.get(self.templateUrl)
            .then(function (html) {
                window.uiHelper.append(self.renderTo, html);
            })
            .error(function (errorMessage) {
                console.log(errorMessage);
            });
    }
}