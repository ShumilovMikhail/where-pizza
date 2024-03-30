import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { sendVerificationEmailAction, sendVerificationEmailFailureAction, sendVerificationEmailSuccessAction } from "../actions/send-verification-email.action";
import { VerificationEmailService } from "../../services/verification-email.service";
import { SendVerificationEmailResponse } from "../../types/sendVerificationEmailResponse.interface";

@Injectable()
export class SendVerificationEmailEffect {

  sendVerificationEmail$ = createEffect(() => this.actions$.pipe(
    ofType(sendVerificationEmailAction),
    switchMap(() => {
      return this.verificationEmailService.sendVerificationEmail().pipe(
        map((response: SendVerificationEmailResponse) => {
          return sendVerificationEmailSuccessAction(response);
        }),
        catchError(() => {
          return of(sendVerificationEmailFailureAction());
        })
      );
    })
  ));

  constructor(private actions$: Actions, private verificationEmailService: VerificationEmailService) { };
};
