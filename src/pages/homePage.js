
function HomePage() {
    this.render = render;
    this.url = "src/pages/homePage.html";
    return this;
    function render(selector = "body") {
        window.uiHelper.renderHtmlFromUrl(selector, this.url).catch(function (error){
            console.log(error);
        });
    }
}