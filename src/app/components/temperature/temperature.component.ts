import {Component} from "@angular/core";
import {ClimateService} from "../../services/climate.service";

@Component({
  selector: 'temperature',
  templateUrl: './temperature.component.html'
})
export class TemperatureComponent {
  constructor(public climateService: ClimateService) { }
}
