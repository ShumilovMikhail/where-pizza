import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class UtilsService {
  public customPatterns = { 'R': { pattern: new RegExp(/[а-яА-Я0-9]+/), optional: true }, '0': { pattern: new RegExp(/^\d+$/) } };
  public deepEqual(obj1: unknown, obj2: unknown): boolean {
    if (obj1 === obj2) {
      return true;
    }

    if (obj1 === null || obj2 === null) {
      return false;
    }

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      if (!keys2.includes(key) || !this.deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }

    return true;
  };

  public range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  };
}
