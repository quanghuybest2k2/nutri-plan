import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getData(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  setData(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeData(key: string): void {
    localStorage.removeItem(key);
  }
}
