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

  constructor(private http: HttpClient) {
    this.socket = SocketIO(environment.api)
    this.stream = new Subject();
  }

  async del(filename) {
    console.log(`${environment.api}/timelapse/${filename}`);
    this.images = <any>(await this.http.delete(`${environment.api}/timelapse/${filename}`).toPromise());
    return this.images;
  }

  async list() {
    this.images = <any>(await this.http.get(`${environment.api}/timelapse`).toPromise());
    return this.images;
  }

  async snap() {
    this.images = <any>(await this.http.post(`${environment.api}/timelapse`, {}).toPromise());
    return this.images;
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
