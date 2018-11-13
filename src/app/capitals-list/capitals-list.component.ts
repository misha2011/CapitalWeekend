import { Component, OnInit } from '@angular/core';
import { capitals } from '../constants/capitals';
import { WeatherService } from '../services/weather.service';

enum Status {
    VISITED,
    NEUTRAL,
    GOING_TO_VISIT,
}

export interface IWeather {
    [key: string]: {
        id: number;
        name: string;
        country: string;
        temp?: number;
        weather?: any;
        humidity?: number;
        pressure?: number;
        status?: Status;
        statusTemp?: 'max' | 'min',
    };
}

@Component({
    selector: 'app-capitals-list',
    templateUrl: './capitals-list.component.html',
    styleUrls: ['./capitals-list.component.scss'],
})
export class CapitalsListComponent implements OnInit {
    private capitals: IWeather = capitals;
    capitalsList: IWeather['key'][] = [];

    constructor(private weatherService: WeatherService) { }

    ngOnInit(): void {
        this.weatherService.getWeatherByIds(Object.values(this.capitals).map(el => el.id)).subscribe((data: any) => {
            // console.log(data);
            this.capitalsList = data.map(capital => {
                if (!this.capitals[capital.name]) {
                    console.log(capital);

                }
                this.capitals[capital.name].temp = Math.round(capital.main.temp);
                this.capitals[capital.name].weather = capital.weather[0];
                this.capitals[capital.name].humidity = capital.main.humidity;
                this.capitals[capital.name].pressure = Math.round(capital.main.pressure);

                return this.capitals[capital.name];
            }).sort((a, b) => a.temp > b.temp ? 1 : -1);

            this.capitalsList[0].statusTemp = 'min';
            this.capitalsList[this.capitalsList.length - 1].statusTemp = 'max';
        });
    }
}
