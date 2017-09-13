import uiHelper from "../helpers/uiHelper";

export class BasePage {
    private templateUrl: string;
    private renderTo: string;
    constructor(templateUrl) {
        this.templateUrl = templateUrl;
    }
    public render(renderTo = "body"): void {
        this.renderTo = renderTo;
        var self = this;
        uiHelper.get(this.templateUrl)
        .then(function (html) {
            uiHelper.append(self.renderTo, html);
        })
        .error(function (error) {
            console.log(error);
        });
    }
}