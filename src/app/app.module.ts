import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
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
import {ChartsModule} from "ng2-charts";
import {ClimateGraphComponent} from "./components/climateGraph/climateGraph.component";
import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {AppComponent} from "./views/app.component";
import {TemperatureComponent} from "./components/temperature/temperature.component";
import {FanAutoComponent} from "./components/fanAuto/fanAuto.component";
import {LightAutoComponent} from "./components/lightAuto/lightAuto.component";
import {FanToggleComponent} from "./components/fanToggle/fanToggle.component";
import {LightToggleComponent} from "./components/lightToggle/lightToggle.component";
import {WaterComponent} from "./views/water/water.component";
import {GrowOpsComponent} from "./views/growOps/growOps.component";
import {ScheduleComponent} from "./views/schedule/schedule.component";
import {NotesComponent} from "./views/notes/notes.component";
import {SettingsComponent} from "./views/settings/settings.component";

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    ClimateComponent,
    ClimateGraphComponent,
    DashboardComponent,
    FanAutoComponent,
    FanToggleComponent,
    FullscreenCameraComponent,
    GrowOpsComponent,
    LightAutoComponent,
    LightToggleComponent,
    LogoComponent,
    MenuComponent,
    NotesComponent,
    ScheduleComponent,
    SettingsComponent,
    StreamComponent,
    TemperatureComponent,
    WaterComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
