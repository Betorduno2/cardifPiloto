import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DetailsDimensionsMockService } from '../../services/details-dimensions-mock.service';
import * as DetailsDimensionsActions from './details-dimensions.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class DetailsDimensionsEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DetailsDimensionsActions.loadDetailsDimensionsData),
      mergeMap(() =>
        of(this.mockService.getMockData()).pipe(
          map(data => DetailsDimensionsActions.loadDetailsDimensionsDataSuccess({ data })),
          catchError(error => of(DetailsDimensionsActions.loadDetailsDimensionsDataFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private mockService: DetailsDimensionsMockService
  ) {}
}
