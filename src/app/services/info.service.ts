import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { UserInfo } from '../Models/User-Info.model';

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
  getInfo(): UserInfo[] {
    return this.storageService.get(this.USER_INFO_KEY) || [];
  }
  editInfo(
    name: string,
    newGender: string,
    newHeight: number,
    newWeight: number
  ): void {
    const currentInfoArray: UserInfo[] =
      this.storageService.get(this.USER_INFO_KEY) || [];
    const index = currentInfoArray.findIndex((info) => info.name === name);
    if (index !== -1) {
      currentInfoArray[index] = {
        ...currentInfoArray[index],
        name: name,
        gender: newGender,
        height: newHeight,
        weight: newWeight,
      };
      this.storageService.set(this.USER_INFO_KEY, currentInfoArray);
    }
  }

  // Xóa từ local storage
  clearDataUser(): void {
    this.storageService.remove(this.USER_INFO_KEY);
  }
}
