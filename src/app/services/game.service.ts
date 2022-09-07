import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  // url: string = 'https://api.rawg.io/api/games?key=546121027b7a48cea28c2f563bffa660&dates=2019-09-01,2019-09-30&platforms=18,1,7'

  url: string = 'https://api.rawg.io/api/games';
  params = new HttpParams()
  .set('key', '546121027b7a48cea28c2f563bffa660')
  .set('dates', '2019-09-01,2019-09-30')
  .set('platforms', '18,1,7');

  
  getData(){
    return this.http.get(this.url)
    .pipe(
    retry(1),
    catchError(error => throwError(() => `Something wrong ${error}`))
    );
  }
}
