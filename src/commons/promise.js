
function PromiseFactory() {
}

PromiseFactory.create = function () {
    return new Promise();
    function Promise() {
        this.data = null;
        this.then = then;
        this.onSuccessCallback = null;
        this.resolve = resolve;
        this.errorData = null;
        this.error = error;
        this.onErrorCallback = null;
        this.reject = reject;
        return this;
        function then(callback) {
            this.onSuccessCallback = callback;
            callbackProcess.call(this);
            return this;
        };
        function resolve(data) {
            this.data = data;
            callbackProcess.call(this);
            return this;
        }
        function error(callback) {
            this.onErrorCallback = callback;
            callbackProcess.call(this);
            return this;
        };
        function reject(errorData) {
            this.errorData = errorData;
            callbackProcess.call(this);
            return this;
        };
        function callbackProcess() {
            if (this.onSuccessCallback && this.data) {
                this.onSuccessCallback(this.data);
            }
            if (this.onErrorCallback && this.errorData) {
                this.onErrorCallback(this.errorData);
            }
        };
    };
}