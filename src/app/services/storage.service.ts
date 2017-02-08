import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StorageService {
  public collection$: any;
  private _collectionObserver: any;
  private _collection: any;
  constructor() {
    this._collection = [];

    this.collection$ = new Observable(observer => {
      console.log("OBSERVER");
      console.log(observer);
      this._collectionObserver = observer;
    }).share();
  }

  replace(coordinates) {
    console.log("IN REPLACE");
    this._collection = coordinates;
    this._collectionObserver.next(this._collection);
  }

  load() {
    this._collectionObserver.next(this._collection);
  }
}
