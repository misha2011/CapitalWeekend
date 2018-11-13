import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class WeatherService {
    private readonly apiId = 'e5210095bc3c56dcf588f782dc956cc8';
    private readonly weatherUrl = `${environment.weather}/group`;

    constructor(private http: HttpClient) { }

    getWeather(ids: number[]) {
        const params = new HttpParams()
            .set('id', ids.toString())
            .set('units', 'metric')
            .set('appid', this.apiId);

        //     const headers = new HttpHeaders()
        // .set('Access-Control-Allow-Headers', 'Content-Type')
        // .set('Access-Control-Allow-Methods', 'GET')
        // .set('Access-Control-Allow-Origin', '*');

        return this.http.get(this.weatherUrl, { params});
    }
}
