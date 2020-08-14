import {Component} from "@angular/core";
import {CameraService} from "../../services/camera.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'camera',
  templateUrl: `./camera.component.html`
})
export class CameraComponent {
  environment = environment;
  config;

  constructor(public cameraService: CameraService) {
    let ignore = this.cameraService.list();
  }

  async save() {
    await this.cameraService.save(this.cameraService.config);
    this.config = this.cameraService.config;
  }
}
