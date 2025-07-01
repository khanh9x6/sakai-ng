import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
    standalone: true,
    selector: 'app-best-selling-widget',
    imports: [CommonModule, ButtonModule, MenuModule],
    template: ` <div class="card">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <div class="fw-semibold fs-4">Best Selling Products</div>
            <div>
                <button pButton type="button" icon="pi pi-ellipsis-v" class="p-button-rounded p-button-text p-button-plain" (click)="menu.toggle($event)"></button>
                <p-menu #menu [popup]="true" [model]="items"></p-menu>
            </div>
        </div>
        <ul class="list-unstyled p-0 m-0">
            <li class="d-flex flex-column d-md-flex-row md:align-items-center md:justify-content-between mb-4">
                <div>
                    <span class="text-dark fw-medium me-2 mb-1 md:mb-0">Space T-Shirt</span>
                    <div class="mt-1 text-muted">Clothing</div>
                </div>
                <div class="mt-2 md:mt-0 d-flex align-items-center">
                    <div class="bg-surface-300 rounded overflow-d-none w-40 lg:w-24" style="height: 8px">
                        <div class="bg-orange-500 h-100" style="width: 50%"></div>
                    </div>
                    <span class="text-orange-500 ms-3 fw-medium">%50</span>
                </div>
            </li>
            <li class="d-flex flex-column d-md-flex-row md:align-items-center md:justify-content-between mb-4">
                <div>
                    <span class="text-dark fw-medium me-2 mb-1 md:mb-0">Portal Sticker</span>
                    <div class="mt-1 text-muted">Accessories</div>
                </div>
                <div class="mt-2 md:mt-0 ml-0 md:ml-20 d-flex align-items-center">
                    <div class="bg-surface-300 rounded overflow-d-none w-40 lg:w-24" style="height: 8px">
                        <div class="bg-cyan-500 h-100" style="width: 16%"></div>
                    </div>
                    <span class="text-cyan-500 ms-3 fw-medium">%16</span>
                </div>
            </li>
            <li class="d-flex flex-column d-md-flex-row md:align-items-center md:justify-content-between mb-4">
                <div>
                    <span class="text-dark fw-medium me-2 mb-1 md:mb-0">Supernova Sticker</span>
                    <div class="mt-1 text-muted">Accessories</div>
                </div>
                <div class="mt-2 md:mt-0 ml-0 md:ml-20 d-flex align-items-center">
                    <div class="bg-surface-300 rounded overflow-d-none w-40 lg:w-24" style="height: 8px">
                        <div class="bg-pink-500 h-100" style="width: 67%"></div>
                    </div>
                    <span class="text-pink-500 ms-3 fw-medium">%67</span>
                </div>
            </li>
            <li class="d-flex flex-column d-md-flex-row md:align-items-center md:justify-content-between mb-4">
                <div>
                    <span class="text-dark fw-medium me-2 mb-1 md:mb-0">Wonders Notebook</span>
                    <div class="mt-1 text-muted">Office</div>
                </div>
                <div class="mt-2 md:mt-0 ml-0 md:ml-20 d-flex align-items-center">
                    <div class="bg-surface-300 rounded overflow-d-none w-40 lg:w-24" style="height: 8px">
                        <div class="bg-green-500 h-100" style="width: 35%"></div>
                    </div>
                    <span class="text-primary ms-3 fw-medium">%35</span>
                </div>
            </li>
            <li class="d-flex flex-column d-md-flex-row md:align-items-center md:justify-content-between mb-4">
                <div>
                    <span class="text-dark fw-medium me-2 mb-1 md:mb-0">Mat Black Case</span>
                    <div class="mt-1 text-muted">Accessories</div>
                </div>
                <div class="mt-2 md:mt-0 ml-0 md:ml-20 d-flex align-items-center">
                    <div class="bg-surface-300 rounded overflow-d-none w-40 lg:w-24" style="height: 8px">
                        <div class="bg-purple-500 h-100" style="width: 75%"></div>
                    </div>
                    <span class="text-purple-500 ms-3 fw-medium">%75</span>
                </div>
            </li>
            <li class="d-flex flex-column d-md-flex-row md:align-items-center md:justify-content-between mb-4">
                <div>
                    <span class="text-dark fw-medium me-2 mb-1 md:mb-0">Robots T-Shirt</span>
                    <div class="mt-1 text-muted">Clothing</div>
                </div>
                <div class="mt-2 md:mt-0 ml-0 md:ml-20 d-flex align-items-center">
                    <div class="bg-surface-300 rounded overflow-d-none w-40 lg:w-24" style="height: 8px">
                        <div class="bg-teal-500 h-100" style="width: 40%"></div>
                    </div>
                    <span class="text-teal-500 ms-3 fw-medium">%40</span>
                </div>
            </li>
        </ul>
    </div>`
})
export class BestSellingWidget {
    menu = null;

    items = [
        { label: 'Add New', icon: 'pi pi-fw pi-plus' },
        { label: 'Remove', icon: 'pi pi-fw pi-trash' }
    ];
}
