import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ComponentOneMockService } from '../../services/component-one-mock.service';
import * as ComponentOneActions from './component-one.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ComponentOneEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ComponentOneActions.loadComponentOneData),
      mergeMap(() =>
        of(this.mockService.getMockData()).pipe(
          map(data => ComponentOneActions.loadComponentOneDataSuccess({ data })),
          catchError(error => of(ComponentOneActions.loadComponentOneDataFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private mockService: ComponentOneMockService
  ) {}
}
