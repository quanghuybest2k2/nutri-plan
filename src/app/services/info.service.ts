import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  private readonly USER_INFO_KEY = 'user_info';

  constructor(private storageService: StorageService) { }
  //  check
  isProvidedBMI(): boolean {
    const userInfo = this.storageService.get(this.USER_INFO_KEY);
    return userInfo !== null && userInfo !== undefined;
  }
  saveInfo(name: string, gender: string, height: number, weight: number): void {
    const currentInfoArray: {
      name: string;
      gender: string;
      height: number;
      weight: number;
    }[] = this.storageService.get(this.USER_INFO_KEY) || [];
    const newInfo = { name, gender, height, weight };
    currentInfoArray.push(newInfo);
    this.storageService.set(this.USER_INFO_KEY, currentInfoArray);
  }

  // Lấy thông tin người dùng từ local storage
  getInfo(): [{
    name: string;
    gender: string;
    height: number;
    weight: number;
  }] | null {
    return this.storageService.get(this.USER_INFO_KEY);
  }
  // Xóa từ local storage
  clearDataUser(): void {
    this.storageService.remove(this.USER_INFO_KEY);
  }
}
