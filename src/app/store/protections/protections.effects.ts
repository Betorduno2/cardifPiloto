import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProtectionsMockService } from '../../services/protections-mock.service';
import * as ProtectionsActions from './protections.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProtectionsEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProtectionsActions.loadProtectionsData),
      mergeMap(() =>
        of(this.mockService.getMockData()).pipe(
          map(data => ProtectionsActions.loadProtectionsDataSuccess({ data })),
          catchError(error => of(ProtectionsActions.loadProtectionsDataFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private mockService: ProtectionsMockService
  ) {}
}
