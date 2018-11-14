import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { FormControl, Validators } from '@angular/forms';
import { SityNameValidator } from '../../validators/sityName.validator';

export interface CapitalModal {
    title: string;
    question: string;
}

const validationMessages = {
    required: 'Required',
    minlength: 'The sity name must contain at least 3 characters',
    invalidName: 'We did not find this city',
    sityExist: 'The city is already on the list'
};

@Component({
    selector: 'app-add-capital-modal',
    templateUrl: './add-capital-modal.component.html',
})
export class AddCapitalComponent extends SimpleModalComponent<CapitalModal, string> implements CapitalModal {
    title: string;
    question: string;
    capital = new FormControl(
        '',
        [Validators.required, Validators.minLength(3)],
        this.sityNameValidator.validate.bind(this.sityNameValidator),
    );

    constructor(private sityNameValidator: SityNameValidator) {
        super();
    }

    apply() {
        this.capital.markAsTouched();
        this.capital.markAsDirty();

        if (this.capital.valid) {
            this.result = this.capital.value;
            this.close();
        }
    }

    isErrorMessageVisible(): boolean {
        return !this.capital.valid && this.capital.touched && this.capital.dirty;
    }
    getFieldErrors() {
        return this.capital.errors && validationMessages[Object.keys(this.capital.errors)[0]];
    }
}
