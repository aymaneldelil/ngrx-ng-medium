import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//---------------------------------------------------------------------------------------------------------------------------------------------
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store'
//---------------------------------------------------------------------------------------------------------------------------------------------
import { CoreModule } from './core/core.module';
import { HNavbarModule } from './feature/h-navbar/h-navbar.module';
import { FooterModule } from './feature/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HNavbarModule,
    FooterModule,
    CoreModule,
    StoreModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: !isDevMode(),
    }),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
