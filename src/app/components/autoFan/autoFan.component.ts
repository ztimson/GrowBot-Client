import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'auto-fan',
  templateUrl: './autoFan.component.html'
})
export class AutoFanComponent {
  @Input() config;
  @Output() configChange = new EventEmitter();

  constructor() { }

  save() {
    this.configChange.emit(this.config);
  }
}
