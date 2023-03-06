import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  InjectionToken,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  Observable,
  pairwise,
  single,
  throttleTime,
} from 'rxjs';
import { currentUserSelector, isAnonymousSelector, isLoggedInSelector } from 'src/app/core/store/auth/aut-selector';
import { ICurrentUser } from 'src/app/view/public/auth/interface/i-current-user';

//---------------------------------------------------------------------------------------------------------------------------------------------
// enum VisibilityState {
//   Visible = 'visible',
//   Hidden = 'hidden',
// }

enum Direction {
  Up = 'Up',
  Down = 'Down',
}
//---------------------------------------------------------------------------------------------------------------------------------------------

@Component({
  selector: 'app-h-nav-bar',
  templateUrl: './h-nav-bar.component.html',
  styleUrls: ['./h-nav-bar.component.scss'],
})
export class HNavBarComponent implements OnInit {
  public isVisible = false;
  public isLoggedIn$: Observable<boolean | null> = new Observable();
  public isAnonymus$: Observable<boolean> = new Observable();
  public currentUser$: Observable<ICurrentUser | null> = new Observable();
  //---------------------------------------------------------------------------------------------------------------------------------------------
  constructor(
    @Inject(PLATFORM_ID) private _platform_id: InjectionToken<Object>,
    private _store: Store
  ) {}
  //---------------------------------------------------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.scrollable_navBar();
    this.initialValues();
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  private initialValues(): void {
    this.isLoggedIn$ = this._store.pipe(select(isLoggedInSelector));
    this.isAnonymus$ = this._store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this._store.pipe(select(currentUserSelector));
    this.isAnonymus$.subscribe(u =>{
      console.log('In isAnonymousSelector');
      
      console.log(u);
      
    })
    
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  private scrollable_navBar = () => {
    //User isPlatFormBrawser , to avoid Error when upload on serer using (Angular Universal)
    if (isPlatformBrowser(this._platform_id)) {
      let scroll$ = fromEvent(window, 'scroll').pipe(
        throttleTime(100),
        map(() => window.pageYOffset),
        pairwise(),
        map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
        distinctUntilChanged()
      );
      //---------------
      let goingUp$ = scroll$
        .pipe(
          filter((direction) => direction === Direction.Up)
          // tap((t) => console.log('UP'))
        )
        .subscribe(() => (this.isVisible = false));
      //---------------
      let goingDown$ = scroll$
        .pipe(
          filter((direction) => direction === Direction.Down)
          // tap((t) => console.log('DOWN'))
        )
        .subscribe(() => (this.isVisible = true));
    }
  };
  //---------------------------------------------------------------------------------------------------------------------------------------------
}
