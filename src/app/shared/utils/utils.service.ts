import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class UtilsService {
  public deepEqual(obj1: unknown, obj2: unknown): boolean {
    if (obj1 === obj2) {
      return true;
    }

    if (obj1 === null || obj2 === null) {
      return false;
    }

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      console.log(1)
      return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      console.log(keys1)
      console.log(keys2)
      return false;
    }

    for (const key of keys1) {
      console.log(key)
      if (!keys2.includes(key) || !this.deepEqual(obj1[key], obj2[key])) {
        console.log('finish')
        return false;
      }
    }

    return true;
  }
}
