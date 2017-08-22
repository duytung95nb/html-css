
function HomePage() {
    this.render = render;
    this.templateUrl = "src/pages/homePage.html";
    return this;
    function render(selector = "body") {
        window.uiHelper.renderHtmlFromTemplateUrl(selector, this.templateUrl).catch(function (error){
            console.log(error);
        });
    }
}