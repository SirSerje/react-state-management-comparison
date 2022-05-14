import {makeAutoObservable, observable} from "mobx";

class ApplicationStore {
    counter = 0;

    constructor() {
        makeAutoObservable(
            this,
            {
                counter: observable,
            },
            { autoBind: true }
        );
    }

    increment() {
        this.counter ++
    }

    decrement() {
        if(this.counter > 0) {
            this.counter --
        }
    }
}

export const mobxStore = new ApplicationStore();