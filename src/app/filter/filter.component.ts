import { Component, OnInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { AddCapitalComponent } from '../modals';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
    constructor(private simpleModalService: SimpleModalService) { }

    ngOnInit(): void { }

    showPrompt(event) {
        if (event.screenX === 0 && event.screenY === 0) {
            return;
        }
        this.simpleModalService.addModal(
            AddCapitalComponent,
            {
                title: 'Add capital',
            },
            {
                closeOnEscape: true,
                closeOnClickOutside: true,
            },
        ).subscribe((message) => {
            // console.log(message);
        });
    }
}
