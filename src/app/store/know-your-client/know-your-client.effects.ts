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
      mergeMap(() => {
        console.log('KnowYourClient effect triggered');
        const mockData = this.mockService.getMockData();
        console.log('Mock data:', mockData);
        return of(mockData).pipe(
          map(data => {
            console.log('Dispatching success action with data:', data);
            return KnowYourClientActions.loadKnowYourClientDataSuccess({ data });
          }),
          catchError(error => {
            console.log('Error in effect:', error);
            return of(KnowYourClientActions.loadKnowYourClientDataFailure({ error }));
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private mockService: KnowYourClientMockService
  ) {}
}
