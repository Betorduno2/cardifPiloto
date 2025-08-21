import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ComponentTwoMockService } from '../../services/component-two-mock.service';
import * as ComponentTwoActions from './component-two.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ComponentTwoEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ComponentTwoActions.loadComponentTwoData),
      mergeMap(() =>
        of(this.mockService.getMockData()).pipe(
          map(data => ComponentTwoActions.loadComponentTwoDataSuccess({ data })),
          catchError(error => of(ComponentTwoActions.loadComponentTwoDataFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private mockService: ComponentTwoMockService
  ) {}
}
