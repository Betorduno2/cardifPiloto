import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DimensionsMockService } from '../../services/dimensions-mock.service';
import * as DimensionsActions from './dimensions.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class DimensionsEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DimensionsActions.loadDimensionsData),
      mergeMap(() =>
        of(this.mockService.getMockData()).pipe(
          map(data => DimensionsActions.loadDimensionsDataSuccess({ data })),
          catchError(error => of(DimensionsActions.loadDimensionsDataFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private mockService: DimensionsMockService
  ) {}
}
