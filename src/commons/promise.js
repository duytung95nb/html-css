
function PromiseFactory() {

}

PromiseFactory.create = function () {
    return new Promise();
    function Promise() {
        this.data = null;
        this.errorData = null;
        this.onSuccessCallback = null;
        this.onErrorCallback = null;
        this.then = then;
        this.resolve = resolve;
        this.error = error;
        this.reject = reject;
        return this;
        function then(callBack) {
            this.onSuccessCallback = callBack;
            executeCallbacks.call(this);
            return this;
        };
        function resolve(data) {
            this.data = data;
            executeCallbacks.call(this);
            return this;
        };
        function error(callBack) {
            this.onErrorCallback = callBack;
            executeCallbacks.call(this);
            return this;
        };
        function reject(errorData) {
            this.errorData = errorData;
            executeCallbacks.call(this);
            return this;
        };
        function executeCallbacks() {
            if (this.data && this.onSuccessCallback) {
                this.onSuccessCallback(this.data);
            }
            if (this.errorData && this.onErrorCallback) {
                this.onErrorCallback(this.errorData);
            }
        }
    };
}
