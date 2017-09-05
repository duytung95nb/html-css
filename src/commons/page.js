
function Page(templateUrl) {
    this.templateUrl = templateUrl;
    this.renderTo = '';
    this.render = render;
    return this;
    function render(target = 'body') {
        this.renderTo = target;
        var self = this;
        window.uiHelper.get(this.templateUrl)
        .then(function (html) {
            window.uiHelper.append(self.renderTo, html)
        })
        .error(function (errorData) {
            console.log(errorData);
        });
    }
}