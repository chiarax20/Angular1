import { Injectable } from '@angular/core';
import { Result, Company } from './Offerte';
import { Observable, throwError} from 'rxjs';
import { catchError, map,tap } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class OfferteService {

  private offUrl = ` https://www.themuse.com/api/public`;
  constructor(private http: HttpClient) { }

  url = `${this.offUrl}/jobs?category=Engineering&page=30`;

  getOfferte(city:string, level:string): Observable<Result[]> {
    return this.http.get<Result[]>(this.url)
        .pipe (
          map((risp:any) => risp['results']),
          tap(risp => console.log(risp)),
          catchError(this.handleErrorObs)
        );
  }

  private handleErrorObs (error : any){
    return throwError(error.message || error);
  }

  getDettaglioOfferte(idt:string): Observable<Result>{
    return this.http.get<Result>(this.offUrl+ '/jobs/'+idt)
          .pipe (
            map((risp:any) => risp),
            tap(risp => console.log(risp)),
            catchError(this.handleErrorObs)
          );
  }

  company(idcompany:number): Observable<Company>{
    return this.http.get<Company>(this.offUrl+ '/companies/'+idcompany)
          .pipe (
            map((risp:any) => risp),
            tap(risp => console.log(risp)),
            catchError(this.handleErrorObs)
          );
  }

}




