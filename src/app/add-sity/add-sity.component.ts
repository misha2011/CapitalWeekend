import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { AddCapitalComponent } from '../modals';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-add-sity',
    templateUrl: './add-sity.component.html',
    styleUrls: ['./add-sity.component.scss']
})
export class AddSityComponent implements OnDestroy {

    @Output()
    newSity = new EventEmitter();
    modalSub: Subscription;

    constructor(private simpleModalService: SimpleModalService) { }

    ngOnDestroy(): void {
        if (this.modalSub) {
            this.modalSub.unsubscribe();
        }
    }

    showPrompt(event) {
        if (event.screenX === 0 && event.screenY === 0) {
            return;
        }
        this.modalSub = this.simpleModalService.addModal(
            AddCapitalComponent,
            {
                title: 'Add sity',
            },
            {
                closeOnEscape: true,
                closeOnClickOutside: true,
            },
        ).subscribe((name) => {
            if (name) {
                this.newSity.emit(name);
            }
        });
    }
}
