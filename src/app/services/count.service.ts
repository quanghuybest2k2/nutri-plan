import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  private readonly COUNTS_KEY = 'counts';

  constructor(private storageService: StorageService) {}

  // Lấy mảng các giá trị count từ local storage
  getCounts():
    | { parentId: number; exerciseId: number; count: number }[]
    | null {
    return this.storageService.get(this.COUNTS_KEY);
  }

  // Lưu giá trị count vào mảng
  saveCount(parentId: number, exerciseId: number, count: number): void {
    const countsArray = this.storageService.get(this.COUNTS_KEY) || [];

    const existingIndex = countsArray.findIndex(
      (item: any) =>
        item.parentId === parentId && item.exerciseId === exerciseId
    );

    if (existingIndex !== -1) {
      countsArray[existingIndex].count = count;
    } else {
      countsArray.push({ parentId, exerciseId, count });
    }

    this.storageService.set(this.COUNTS_KEY, countsArray);
  }

  // Xóa giá trị count từ mảng
  clearCounts(): void {
    this.storageService.remove(this.COUNTS_KEY);
  }
}
