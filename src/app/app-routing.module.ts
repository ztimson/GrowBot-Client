import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CameraComponent} from "./views/camera/camera.component";
import {ClimateComponent} from "./views/climate/climate.component";
import {DashboardComponent} from "./views/dashboard/dashboard.component";

const routes: Routes = [
  {path: 'camera', component: CameraComponent},
  {path: 'climate', component: ClimateComponent},
  {path: '**', component: DashboardComponent, data: {noAnimation: true}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
