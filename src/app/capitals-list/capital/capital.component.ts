import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IWeather } from '../capitals-list.component';

@Component({
    selector: 'app-capital',
    templateUrl: './capital.component.html',
    styleUrls: ['./capital.component.scss']
})
export class CapitalComponent implements OnInit {
    @Input()
    capital: IWeather['key'];
    iconUrl = environment.weatherIcon;

    constructor() { }

    ngOnInit(): void { }
}
