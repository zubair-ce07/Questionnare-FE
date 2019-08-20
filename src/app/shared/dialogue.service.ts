import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { map , } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DialogueService {

  baseUrl = environment.baseUrl;
  constructor(private https: HttpClient) { }

  getQuestionnare(id): Observable<any> {

    return this.https.get(this.baseUrl + id + '/Start')
 .pipe(map(res => res));
  }

  getOptions(index, option): Observable<any> {

    return this.https.get(this.baseUrl + index + '/' + option)
 .pipe(map(res => res));
  }

}
