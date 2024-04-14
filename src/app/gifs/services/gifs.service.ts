import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory:string[] = [];

  constructor() { }

  get tagsHistory() {
    return [...this._tagsHistory]; // usamos el spread operator para crear una copia
  }

  searchTag(tag:string):void {
    this._tagsHistory.unshift(tag);
  }
}
