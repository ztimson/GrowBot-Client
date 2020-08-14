import {Component} from "@angular/core";
import {ClimateService} from "../../services/climate.service";

@Component({
  selector: 'fan-auto',
  templateUrl: './fanAuto.component.html'
})
export class FanAutoComponent {
  private readonly TIMEOUT = 2500;

  private debuf;

  constructor(public climateService: ClimateService) { }

  save() {
    if(this.debuf == null) {
      this.debuf = setTimeout(() => {
        let ignore = this.climateService.saveFan();
        this.debuf = null;
      }, this.TIMEOUT)
    }
  }
}
