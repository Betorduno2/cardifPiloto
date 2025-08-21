import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ComponentFourMockService } from '../../services/component-four-mock.service';
import * as ComponentFourActions from './component-four.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ComponentFourEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ComponentFourActions.loadComponentFourData),
      mergeMap(() =>
        of(this.mockService.getMockData()).pipe(
          map(data => ComponentFourActions.loadComponentFourDataSuccess({ data })),
          catchError(error => of(ComponentFourActions.loadComponentFourDataFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private mockService: ComponentFourMockService
  ) {}
}
