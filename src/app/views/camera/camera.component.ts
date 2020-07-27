import {Component, OnDestroy, OnInit} from "@angular/core";
import {CameraService} from "../../services/camera.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'camera',
  templateUrl: `./camera.component.html`,
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnDestroy, OnInit {
  environment = environment;
  config = {
    timelapseEnabled: true,
    timelapseFrequency: 'daily'
  }

  constructor(public cameraService: CameraService) {
    let ignore = this.cameraService.list();
  }

  ngOnInit() {
    this.cameraService.start();
  }

  ngOnDestroy() {
    this.cameraService.stop();
  }
}
