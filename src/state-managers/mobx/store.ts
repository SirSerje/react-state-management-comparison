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
        this.books = data;
        this.loading = false;
        this.error = [];
      })
      .catch((e) => {
        this.books = initialState.books.data;
        this.loading = false;
        this.error = e;
      });
  }
  private set books(value: any) {
    this.state.books = normalize<Book>(value);
  }
  private set loading(value: boolean) {
    this.state.isLoading = value;
  }
  private set error(value: any) {
    this.state.error = value;
  }
}

export const store = new ApplicationStore();
