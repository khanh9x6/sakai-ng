import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
    standalone: true,
    selector: 'app-notifications-widget',
    imports: [ButtonModule, MenuModule],
    template: `<div class="card">
        <div class="d-flex align-items-center justify-content-between mb-4">
            <div class="fw-semibold fs-4">Notifications</div>
            <div>
                <button pButton type="button" icon="pi pi-ellipsis-v" class="p-button-rounded p-button-text p-button-plain" (click)="menu.toggle($event)"></button>
                <p-menu #menu [popup]="true" [model]="items"></p-menu>
            </div>
        </div>

        <span class="d-block text-muted fw-medium mb-3">TODAY</span>
        <ul class="p-0 mx-0 mt-0 mb-4 list-unstyled">
            <li class="d-flex align-items-center py-2 border-b border-secondary">
                <div class="w-12 h-12 d-flex align-items-center justify-content-center bg-blue-100 /10 rounded-circle mr-4 shrink-0">
                    <i class="pi pi-dollar !fs-4 text-blue-500"></i>
                </div>
                <span class="text-dark lh-base"
                    >Richard Jones
                    <span class="text-surface-700 ">has purchased a blue t-shirt for <span class="text-primary fw-bold">$79.00</span></span>
                </span>
            </li>
            <li class="d-flex align-items-center py-2">
                <div class="w-12 h-12 d-flex align-items-center justify-content-center bg-orange-100 /10 rounded-circle mr-4 shrink-0">
                    <i class="pi pi-download !fs-4 text-orange-500"></i>
                </div>
                <span class="text-surface-700 lh-base">Your request for withdrawal of <span class="text-primary fw-bold">$2500.00</span> has been initiated.</span>
            </li>
        </ul>

        <span class="d-block text-muted fw-medium mb-3">YESTERDAY</span>
        <ul class="p-0 m-0 list-unstyled mb-4">
            <li class="d-flex align-items-center py-2 border-b border-secondary">
                <div class="w-12 h-12 d-flex align-items-center justify-content-center bg-blue-100 /10 rounded-circle mr-4 shrink-0">
                    <i class="pi pi-dollar !fs-4 text-blue-500"></i>
                </div>
                <span class="text-dark lh-base"
                    >Keyser Wick
                    <span class="text-surface-700 ">has purchased a black jacket for <span class="text-primary fw-bold">$59.00</span></span>
                </span>
            </li>
            <li class="d-flex align-items-center py-2 border-b border-secondary">
                <div class="w-12 h-12 d-flex align-items-center justify-content-center bg-pink-100 /10 rounded-circle mr-4 shrink-0">
                    <i class="pi pi-question !fs-4 text-pink-500"></i>
                </div>
                <span class="text-dark lh-base"
                    >Jane Davis
                    <span class="text-surface-700 ">has posted a new questions about your product.</span>
                </span>
            </li>
        </ul>
        <span class="d-block text-muted fw-medium mb-3">LAST WEEK</span>
        <ul class="p-0 m-0 list-unstyled">
            <li class="d-flex align-items-center py-2 border-b border-secondary">
                <div class="w-12 h-12 d-flex align-items-center justify-content-center bg-green-100 /10 rounded-circle mr-4 shrink-0">
                    <i class="pi pi-arrow-up !fs-4 text-green-500"></i>
                </div>
                <span class="text-dark lh-base">Your revenue has increased by <span class="text-primary fw-bold">%25</span>.</span>
            </li>
            <li class="d-flex align-items-center py-2 border-b border-secondary">
                <div class="w-12 h-12 d-flex align-items-center justify-content-center bg-purple-100 /10 rounded-circle mr-4 shrink-0">
                    <i class="pi pi-heart !fs-4 text-purple-500"></i>
                </div>
                <span class="text-dark lh-base"><span class="text-primary fw-bold">12</span> users have added your products to their wishlist.</span>
            </li>
        </ul>
    </div>`
})
export class NotificationsWidget {
    items = [
        { label: 'Add New', icon: 'pi pi-fw pi-plus' },
        { label: 'Remove', icon: 'pi pi-fw pi-trash' }
    ];
}
