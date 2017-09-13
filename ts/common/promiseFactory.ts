
export class PromiseFactory {
    public static create() {
        return new Promise();
    }
}

class Promise {
    private data: any;
    private onSuccessCallback: any;
    private errorData: any;
    private onErrorCallback: any;
    public then(callback): Promise {
        this.onSuccessCallback = callback;
        this.process();
        return this;
    }
    public resolve(data): Promise {
        this.data = data;
        this.process();
        return this;
    }
    public error(callback): Promise {
        this.onErrorCallback = callback;
        this.process();
        return this;
    }
    public reject(errorData): Promise {
        this.errorData = errorData;
        this.process();
        return this;
    }
    private process(): void {
        if (this.data && this.onSuccessCallback) {
            this.onSuccessCallback(this.data);
        }
        if (this.errorData && this.onErrorCallback) {
            this.onErrorCallback(this.errorData);
        }
    }
}