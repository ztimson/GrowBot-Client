import {Component} from "@angular/core";
import {ClimateService} from "../../services/climate.service";

@Component({
  selector: 'fan-toggle',
  templateUrl: './fanToggle.component.html'
})
export class FanToggleComponent {
  constructor(public climateService: ClimateService) { }
}
