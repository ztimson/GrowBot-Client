import {Component, OnDestroy, OnInit} from "@angular/core";
import {CameraService} from "../../services/camera.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'camera',
  templateUrl: `./camera.component.html`
})
export class CameraComponent implements OnDestroy, OnInit {
  environment = environment;
  config;

  constructor(public cameraService: CameraService) {
    let ignore = this.cameraService.list();
  }

  ngOnInit() {
    this.cameraService.start();
  }

  ngOnDestroy() {
    this.cameraService.stop();
  }

  async save() {
    console.log('save!');
    await this.cameraService.save(this.cameraService.config);
    this.config = this.cameraService.config;
  }
}
