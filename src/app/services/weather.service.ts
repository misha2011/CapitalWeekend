import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { expand, map, reduce, catchError, tap } from 'rxjs/operators';
import { empty } from 'rxjs/internal/observable/empty';
import { of, BehaviorSubject } from 'rxjs';

@Injectable()
export class WeatherService {
    private readonly apiId = 'e5210095bc3c56dcf588f782dc956cc8';
    private readonly weatherUrl = environment.weather;
    newSity$ = new BehaviorSubject(undefined);

    constructor(private http: HttpClient) { }

    // The limit of locations is 20
    getWeatherByIds(ids: number[]) {
        const takeCount = 20;
        let page = 0;
        const pagesCount = Math.floor(ids.length / takeCount);

        const params = new HttpParams()
            .set('id', ids.slice(takeCount * page, takeCount * page + takeCount).toString())
            .set('units', 'metric')
            .set('appid', this.apiId);

        return this.http.get(`${this.weatherUrl}/group`, { params }).pipe(
            expand(() => {
                console.log(ids.length, Math.floor(ids.length / takeCount), page);
                page++;
                const newParams = params
                    .set(
                        'id',
                        ids.slice(takeCount * page, takeCount * page + takeCount).toString(),
                    );
                return pagesCount >= page ?
                    this.http.get(`${this.weatherUrl}/group`, { params: newParams })
                    : empty();
            }),
            map((data: any) => data.list),
            reduce((acc, val) => [...acc, ...val]),
        );
    }

    validateSityName(sityName: string) {
        const params = new HttpParams()
            .set('q', sityName)
            .set('units', 'metric')
            .set('appid', this.apiId);

        return this.http.get(`${this.weatherUrl}/weather`, { params })
            .pipe(
                tap((data: any) => this.newSity$.next({ [sityName]: data })),
                catchError(() => of(undefined)),
            );
    }
}
