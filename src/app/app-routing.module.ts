import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CameraComponent} from "./views/camera/camera.component";
import {ClimateComponent} from "./views/climate/climate.component";
import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {WaterComponent} from "./views/water/water.component";
import {GrowOpsComponent} from "./views/growOps/growOps.component";
import {ScheduleComponent} from "./views/schedule/schedule.component";
import {NotesComponent} from "./views/notes/notes.component";
import {SettingsComponent} from "./views/settings/settings.component";

const routes: Routes = [
  {path: 'camera', component: CameraComponent},
  {path: 'climate', component: ClimateComponent},
  {path: 'growops', component: GrowOpsComponent},
  {path: 'notes', component: NotesComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'water', component: WaterComponent},
  {path: '**', component: DashboardComponent, data: {noAnimation: true}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
