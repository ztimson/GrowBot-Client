import {Injectable} from "@angular/core";
import SocketIO from 'socket.io-client';
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  private socket;

  images: string[] = [];
  stream: Subject<string>;
  config = {
    timelapseEnabled: false,
    timelapseFrequency: '0 0 12 * * *'
  };

  constructor(private http: HttpClient) {
    this.socket = SocketIO(environment.api)
    this.stream = new Subject();
  }

  async del(filename) {
    let resp = <any>(await this.http.delete(`${environment.api}/timelapse/${filename}`).toPromise());
    this.images = resp.files;
    this.config = {
      timelapseEnabled: resp.timelapseEnabled,
      timelapseFrequency: resp.timelapseFrequency
    };
  }

  async list() {
    let resp = <any>(await this.http.get(`${environment.api}/timelapse`).toPromise());
    this.images = resp.files;
    this.config = {
      timelapseEnabled: resp.timelapseEnabled,
      timelapseFrequency: resp.timelapseFrequency
    };
  }

  async save(config) {
    let resp = <any>(await this.http.put(`${environment.api}/timelapse`, config).toPromise());
    this.images = resp.files;
    this.config = {
      timelapseEnabled: resp.timelapseEnabled,
      timelapseFrequency: resp.timelapseFrequency
    };
  }

  async snap() {
    let resp = <any>(await this.http.post(`${environment.api}/timelapse`, {}).toPromise());
    this.images = resp.files;
    this.config = {
      timelapseEnabled: resp.timelapseEnabled,
      timelapseFrequency: resp.timelapseFrequency
    };
  }

  start() {
    this.socket.on('stream', data => {
      this.stream.next(data);
    });
    return this.stream;
  }

  stop() {
    this.socket.off('stream');
  }
}
