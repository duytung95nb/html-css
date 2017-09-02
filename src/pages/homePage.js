
function HomePage() {
    this.templateUrl = "src/pages/homePage.html";
    this.render = render;
    return this;
    function render(selector = "body") {
        window.uiHelper.renderHtmlFromTemplateUrl(selector, this.templateUrl).catch(function (error){
            console.log(error);
        });
    }
}