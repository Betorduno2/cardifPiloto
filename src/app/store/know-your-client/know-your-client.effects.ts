import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { KnowYourClientMockService } from '../../services/know-your-client-mock.service';
import * as KnowYourClientActions from './know-your-client.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class KnowYourClientEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KnowYourClientActions.loadKnowYourClientData),
      mergeMap(() =>
        of(this.mockService.getMockData()).pipe(
          map(data => KnowYourClientActions.loadKnowYourClientDataSuccess({ data })),
          catchError(error => of(KnowYourClientActions.loadKnowYourClientDataFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private mockService: KnowYourClientMockService
  ) {}
}
