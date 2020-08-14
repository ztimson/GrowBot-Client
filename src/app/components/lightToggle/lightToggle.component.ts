import {Component} from "@angular/core";
import {ClimateService} from "../../services/climate.service";

@Component({
  selector: 'light-toggle',
  templateUrl: './lightToggle.component.html'
})
export class LightToggleComponent {
  constructor(public climateService: ClimateService) { }
}
