import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SplashComponent} from "./views/splash/splash.component";
import {CameraComponent} from "./views/camera/camera.component";

const routes: Routes = [
  {path: 'camera', component: CameraComponent},
  {path: '**', component: SplashComponent, data: {noAnimation: true}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
