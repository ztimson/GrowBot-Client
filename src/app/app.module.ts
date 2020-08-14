import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './views/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {LogoComponent} from "./components/logo/logo.component";
import {MenuComponent} from "./components/menu/menu.component";
import {StreamComponent} from "./components/stream/stream.component";
import {CameraComponent} from "./views/camera/camera.component";
import {FullscreenCameraComponent} from "./views/fullscreenCamera/fullscreenCamera.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {HttpClientModule} from "@angular/common/http";
import {ClimateComponent} from "./views/climate/climate.component";
import {AutoFanComponent} from "./components/autoFan/autoFan.component";
import {AutoLightComponent} from "./components/autoLight/autoLight.component";
import {ChartsModule} from "ng2-charts";
import {ClimateGraphComponent} from "./components/climateGraph/climateGraph.component";
import {DashboardComponent} from "./views/dashboard/dashboard.component";

@NgModule({
  declarations: [
    AutoFanComponent,
    AutoLightComponent,
    CameraComponent,
    ClimateComponent,
    ClimateGraphComponent,
    DashboardComponent,
    FullscreenCameraComponent,
    HomeComponent,
    LogoComponent,
    MenuComponent,
    StreamComponent,
    ClimateGraphComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule,
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
