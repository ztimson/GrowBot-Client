import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {timer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClimateService {
  private readonly interval = 5 // Seconds
  private first = true;

  fanConfig = {
    on: false,
    autoFan: false,
    fanMode: 'time',
    fanOn: null,
    fanOff: null,
    fanTemp: null,
    fanHumidity: null,
  }
  lightConfig = {
    on: false,
    autoLight: false,
    lightOn: null,
    lightOff: null
  }
  temp: number = 0;
  humidity: number = 0;

  constructor(private http: HttpClient) {
    timer(0, this.interval * 1000).subscribe(async () => {
      if(this.first) {
        this.fanConfig = <any>(await this.http.get(`${environment.api}/fan/`).toPromise());
        this.lightConfig = <any>(await this.http.get(`${environment.api}/light/`).toPromise());
        this.first = false;
      } else {
        this.fanConfig.on = <any>(await this.http.get(`${environment.api}/fan/`).toPromise())['on'];
        this.lightConfig.on = <any>(await this.http.get(`${environment.api}/light/`).toPromise())['on'];
      }
    });
  }

  async toggleFan() {
    return this.fanConfig.on = <any>(await this.http.post(`${environment.api}/fan/`, {}).toPromise())['on'];
  }

  async toggleLight() {
    return this.lightConfig.on = <any>(await this.http.post(`${environment.api}/light/`, {}).toPromise())['on'];
  }

  async saveFan() {
    this.fanConfig = <any>(await this.http.put(`${environment.api}/fan/`, this.fanConfig).toPromise());
  }

  async saveLight() {
    this.lightConfig = <any>(await this.http.put(`${environment.api}/light/`, this.lightConfig).toPromise());
  }
}
