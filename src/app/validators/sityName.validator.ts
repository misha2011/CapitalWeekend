import { Injectable } from '@angular/core';
import { FormControl, AsyncValidator } from '@angular/forms';
import { WeatherService } from '../services/weather.service';
import { map, catchError, switchMap } from 'rxjs/operators';
import { capitals } from '../constants/capitals';
@Injectable()
export class SityNameValidator implements AsyncValidator {

    constructor(private weatherService: WeatherService) { }

    validate(control: FormControl) {
        return this.weatherService.validateSityName(control.value).pipe(
            map((res) => {
                return res ?
                    (
                        Object.keys(capitals)
                            .find(key => capitals[key].name.toLowerCase() === control.value.toLowerCase()) ?
                            { sityExist: true }
                            : null
                    )
                    : { invalidName: true };
            }),
            catchError(() => null),
        );
    }
}
