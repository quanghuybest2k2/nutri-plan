import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  private readonly COUNT_PREFIX = 'exercise_';

  constructor(private storageService: StorageService) {}

  // Lấy giá trị count từ localStorage
  getCount(parentId: number, exerciseId: number): number {
    const storedCount = this.storageService.get(
      `${this.COUNT_PREFIX}${parentId}_${exerciseId}`
    );
    return storedCount ? parseInt(storedCount, 10) : 0;
  }

  // Tăng lên 1
  increaseCount(parentId: number, exerciseId: number): number {
    let count = this.getCount(parentId, exerciseId);
    count++;
    this.storageService.set(
      `${this.COUNT_PREFIX}${parentId}_${exerciseId}`,
      count
    );
    return count;
  }

  // Giảm đi 1
  decreaseCount(parentId: number, exerciseId: number): number {
    let count = this.getCount(parentId, exerciseId);
    count = Math.max(count - 1, 0);
    this.storageService.set(
      `${this.COUNT_PREFIX}${parentId}_${exerciseId}`,
      count
    );
    return count;
  }
}
