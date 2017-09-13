import {PromiseFactory} from "../common/promiseFactory";

let uiHelper = {
    get: get,
    append: append
};
export default uiHelper;

function get(templateUrl) {
    let promise = PromiseFactory.create();
    window.jQuery.get(templateUrl)
    .then(function (data) {
        promise.resolve(data);
    })
    .catch(function (error) {
        promise.reject(error);
    })
    return promise;
}
function append(renderTo, content) {
    let container = window.jQuery(renderTo);
    if(!container) throw "Cannot find target container";
    container.append(content);
}