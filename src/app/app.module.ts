import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './views/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {LogoComponent} from "./components/logo/logo.component";
import {MenuComponent} from "./components/menu/menu.component";
import {SplashComponent} from "./views/splash/splash.component";

@NgModule({
  declarations: [
    HomeComponent,
    LogoComponent,
    MenuComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
