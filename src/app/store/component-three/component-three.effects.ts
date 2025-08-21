import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ComponentThreeMockService } from '../../services/component-three-mock.service';
import * as ComponentThreeActions from './component-three.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ComponentThreeEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ComponentThreeActions.loadComponentThreeData),
      mergeMap(() =>
        of(this.mockService.getMockData()).pipe(
          map(data => ComponentThreeActions.loadComponentThreeDataSuccess({ data })),
          catchError(error => of(ComponentThreeActions.loadComponentThreeDataFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private mockService: ComponentThreeMockService
  ) {}
}
