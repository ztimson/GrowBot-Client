import {Component} from "@angular/core";
import {ClimateService} from "../../services/climate.service";

@Component({
  selector: 'light-auto',
  templateUrl: './lightAuto.component.html'
})
export class LightAutoComponent {
  private readonly TIMEOUT = 2500;

  private debuf;

  constructor(public climateService: ClimateService) { }

  save() {
    if(this.debuf == null) {
      this.debuf = setTimeout(() => {
        let ignore = this.climateService.saveLight();
        this.debuf = null;
      }, this.TIMEOUT)
    }
  }
}
