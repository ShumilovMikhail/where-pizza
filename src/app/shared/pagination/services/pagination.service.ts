import { Injectable } from "@angular/core";
import { UtilsService } from "../../utils/utils.service";

@Injectable({ providedIn: 'root' })
export class PaginationService {

  constructor(private readonly utilsService: UtilsService) { }

  public getPages(total: number, limit: number) {
    const pagesCount: number = Math.ceil(total / limit);
    return this.utilsService.range(1, pagesCount);
  };
};
