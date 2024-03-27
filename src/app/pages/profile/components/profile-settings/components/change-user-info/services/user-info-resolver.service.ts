import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";

import { DataStorageService } from "../../../../../../../shared/services/dataStorage.service";
import { DataStorageTypes } from "../../../../../../../shared/types/dataStorageTypes";
import { UserInfo } from "../../../../../../../shared/types/userInfo.interface";

export const userInfoResolver: ResolveFn<UserInfo> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const dataStorageService = inject(DataStorageService);
  const userInfo: UserInfo = dataStorageService.getItem(DataStorageTypes.USER_INFO) as UserInfo;

  return ({
    username: userInfo.username,
    phone: userInfo.phone,
    date: userInfo.date
  });
};
