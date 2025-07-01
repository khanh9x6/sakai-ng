import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService, ToastMessageOptions } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'app-messages-demo',
    standalone: true,
    imports: [CommonModule, ToastModule, ButtonModule, InputTextModule, MessageModule, FormsModule],
    template: `
        <div class="d-flex flex-column d-md-flex-row gap-4">
            <div class="md:w-1/2">
                <div class="card">
                    <div class="fw-semibold fs-4 mb-3">Toast</div>
                    <div class="d-flex flex-wrap gap-2">
                        <p-button (click)="showSuccessViaToast()" label="Success" severity="success" />
                        <p-button (click)="showInfoViaToast()" label="Info" severity="info" />
                        <p-button (click)="showWarnViaToast()" label="Warn" severity="warn" />
                        <p-button (click)="showErrorViaToast()" label="Error" severity="danger" />
                        <p-toast />
                    </div>

                    <div class="fw-semibold fs-4 mt-3 mb-3">Inline</div>
                    <div class="d-flex flex-column mb-3 gap-1">
                        <input pInputText [(ngModel)]="username" placeholder="Username" aria-label="username" class="ng-dirty ng-invalid" />
                        <p-message severity="error" variant="simple" size="small">Username is required</p-message>
                    </div>
                    <div class="d-flex flex-column flex-wrap gap-1">
                        <input pInputText [(ngModel)]="email" placeholder="Email" aria-label="email" class="ng-dirty ng-invalid" />
                        <p-message severity="error" variant="simple" size="small">Email is required</p-message>
                    </div>
                </div>
            </div>
            <div class="md:w-1/2">
                <div class="card">
                    <div class="fw-semibold fs-4 mb-3">Message</div>
                    <div class="d-flex flex-column g-3 mb-3">
                        <p-message severity="success">Success Message</p-message>
                        <p-message severity="info">Info Message</p-message>
                        <p-message severity="warn">Warn Message</p-message>
                        <p-message severity="error">Error Message</p-message>
                        <p-message severity="secondary">Secondary Message</p-message>
                        <p-message severity="contrast">Contrast Message</p-message>
                    </div>
                </div>
            </div>
        </div>
    `,
    providers: [MessageService]
})
export class MessagesDemo {
    msgs: ToastMessageOptions[] | null = [];

    username: string | undefined;

    email: string | undefined;

    constructor(private service: MessageService) {}

    showInfoViaToast() {
        this.service.add({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    }

    showWarnViaToast() {
        this.service.add({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    }

    showErrorViaToast() {
        this.service.add({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    }

    showSuccessViaToast() {
        this.service.add({ severity: 'success', summary: 'Success Message', detail: 'Message sent' });
    }
}
