import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './views/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {LogoComponent} from "./components/logo/logo.component";
import {MenuComponent} from "./components/menu/menu.component";
import {SplashComponent} from "./views/splash/splash.component";
import {StreamComponent} from "./components/stream/stream.component";
import {CameraComponent} from "./views/camera/camera.component";
import {FullscreenCameraComponent} from "./views/fullscreenCamera/fullscreenCamera.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    CameraComponent,
    FullscreenCameraComponent,
    HomeComponent,
    LogoComponent,
    MenuComponent,
    SplashComponent,
    StreamComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
