import { Injectable } from "@angular/core";

import { DataStorageTypes } from "../types/dataStorageTypes";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  public setItem(key: DataStorageTypes, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  };

  public getItem(key: DataStorageTypes): unknown {
    return JSON.parse(localStorage.getItem(key));
  };

  public removeItem(key: DataStorageTypes) {
    localStorage.removeItem(key);
  };
};
