import {makeAutoObservable, observable} from 'mobx';

class ApplicationStore {
  public counter = 0;

  constructor() {
    makeAutoObservable(
      this,
      {
        counter: observable,
      },
      {autoBind: true},
    );
  }

  public increment() {
    this.counter++;
  }

  public decrement() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
}

export const mobxStore = new ApplicationStore();
