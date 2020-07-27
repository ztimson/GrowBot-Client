import {Component, Input} from "@angular/core";
import {CameraService} from "../../services/camera.service";
import {filter, map} from "rxjs/operators";
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {FullscreenCameraComponent} from "../../views/fullscreenCamera/fullscreenCamera.component";

@Component({
  selector: 'stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent{
  @Input() fullscreen = false;
  @Input() pause: boolean = false;

  stream: Observable<any>;

  constructor(public cameraService: CameraService, private matDialog: MatDialog) {
    this.stream = this.cameraService.stream.pipe(
      filter(() => !this.pause),
      map(data => `data:image/jpeg;base64,${data}`)
    );
  }

  openFullscreen() {
    let orgStatus = this.pause
    this.pause = true;
    this.matDialog.open(FullscreenCameraComponent, {
      width: '100%',
      height: '100%',
      panelClass: 'fill-it',
      autoFocus: false
    }).afterClosed().subscribe(() => this.pause = orgStatus);
  }
}
