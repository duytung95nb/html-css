System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PromiseFactory, Promise;
    return {
        setters: [],
        execute: function () {
            PromiseFactory = class PromiseFactory {
                static create() {
                    return new Promise();
                }
            };
            exports_1("PromiseFactory", PromiseFactory);
            Promise = class Promise {
                then(callback) {
                    this.onSuccessCallback = callback;
                    this.process();
                    return this;
                }
                resolve(data) {
                    this.data = data;
                    this.process();
                    return this;
                }
                error(callback) {
                    this.onErrorCallback = callback;
                    this.process();
                    return this;
                }
                reject(errorData) {
                    this.errorData = errorData;
                    this.process();
                    return this;
                }
                process() {
                    if (this.data && this.onSuccessCallback) {
                        this.onSuccessCallback(this.data);
                    }
                    if (this.errorData && this.onErrorCallback) {
                        this.onErrorCallback(this.errorData);
                    }
                }
            };
        }
    };
});
