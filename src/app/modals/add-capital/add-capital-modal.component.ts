import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface CapitalModal {
    title: string;
    question: string;
}

@Component({
    selector: 'app-add-capital-modal',
    templateUrl: './add-capital-modal.component.html',
})
export class AddCapitalComponent extends SimpleModalComponent<CapitalModal, string> implements CapitalModal {
    title: string;
    question: string;
    message = '';

    constructor() {
        super();
    }

    apply() {
        this.result = this.message;
        this.close();
    }
}
