import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: 'auto-light',
  templateUrl: './autoLight.component.html'
})
export class AutoLightComponent {
  @Input() config;
  @Output() configChange = new EventEmitter();

  constructor() { }

  save() {
    this.configChange.emit(this.config);
  }
}
