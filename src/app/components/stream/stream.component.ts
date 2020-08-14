import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {CameraService} from "../../services/camera.service";
import {filter, map, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {FullscreenCameraComponent} from "../../views/fullscreenCamera/fullscreenCamera.component";

@Component({
  selector: 'stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnDestroy, OnInit{
  @Input() fullscreen = false;
  @Input() pause: boolean = false;

  loading = true;
  stream: Observable<any>;

  constructor(public cameraService: CameraService, private matDialog: MatDialog) {
    this.stream = this.cameraService.stream.pipe(
      filter(() => !this.pause),
      tap(() => this.loading = false),
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

  ngOnInit() {
    this.cameraService.start();
  }

  ngOnDestroy() {
    this.cameraService.stop();
  }
}
