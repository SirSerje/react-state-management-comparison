import {makeAutoObservable, observable} from 'mobx';
import {Book, BooksState, initialState} from '../../common/types';
import {normalize} from '../../common/normalize';

class ApplicationStore {
  public state: BooksState = {...initialState};

  constructor() {
    makeAutoObservable(
      this,
      {
        state: observable,
      },
      {autoBind: true},
    );
  }

  public async fetch() {
    this.state.isLoading = true;
    fetch('http://localhost:3067/data')
      .then((response) => response.json())
      .then((data: Book[]) => {
        this.state.books = normalize<Book>(data);
        this.state.isLoading = false;
        this.state.error = [];
      })
      .catch((e) => {
        this.state.books = {...initialState.books};
        this.state.isLoading = false;
        this.state.error.push(e);
      });
  }
  private setInitial() {
    this.state = {...initialState};
  }
}

export const store = new ApplicationStore();
