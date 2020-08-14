import {Component} from "@angular/core";
import {ClimateService} from "../../services/climate.service";

@Component({
  selector: 'climate',
  templateUrl: 'climate.component.html'
})
export class ClimateComponent {
  private fanDebuf;
  private lightDebuf;

  constructor(public climateService: ClimateService) { }

  saveFan() {
    if(this.fanDebuf == null) {
      this.fanDebuf = setTimeout(() => {
        let ignore = this.climateService.saveFan();
        this.fanDebuf = null;
      }, 1500)
    }
  }

  saveLight() {
    if(this.fanDebuf == null) {
      this.lightDebuf = setTimeout(() => {
        let ignore = this.climateService.saveLight();
        this.lightDebuf = null;
      }, 1500)
    }
  }
}
