import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { OrderListModule } from 'primeng/orderlist';
import { PickListModule } from 'primeng/picklist';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { Product, ProductService } from '../service/product.service';

@Component({
    selector: 'app-list-demo',
    standalone: true,
    imports: [CommonModule, DataViewModule, FormsModule, SelectButtonModule, PickListModule, OrderListModule, TagModule, ButtonModule],
    template: ` <div class="d-flex flex-column">
        <div class="card">
            <div class="fw-semibold fs-4">DataView</div>
            <p-dataview [value]="products" [layout]="layout">
                <ng-template #header>
                    <div class="d-flex justify-content-end">
                        <p-select-button [(ngModel)]="layout" [options]="options" [allowEmpty]="false">
                            <ng-template #item let-option>
                                <i class="pi " [ngClass]="{ 'pi-bars': option === 'list', 'pi-table': option === 'grid' }"></i>
                            </ng-template>
                        </p-select-button>
                    </div>
                </ng-template>

                <ng-template #list let-items>
                    <div class="d-flex flex-column">
                        <div *ngFor="let item of items; let i = index">
                            <div class="d-flex flex-column d-sm-flex-row sm:align-items-center p-6 g-3" [ngClass]="{ 'border-top border-secondary': i !== 0 }">
                                <div class="md:w-40 position-relative">
                                    <img class="d-block xl:d-block mx-auto rounded w-100" src="https://primefaces.org/cdn/primevue/images/product/{{ item.image }}" [alt]="item.name" />
                                    <div class="position-absolute bg-black/70 rounded" [style]="{ left: '4px', top: '4px' }">
                                        <p-tag [value]="item.inventoryStatus" [severity]="getSeverity(item)"></p-tag>
                                    </div>
                                </div>
                                <div class="d-flex flex-column d-md-flex-row justify-content-between md:align-items-center d-flex-1 gap-6">
                                    <div class="d-flex flex-row d-md-flex-column justify-content-between align-items-start gap-2">
                                        <div>
                                            <span class="fw-medium text-surface-500 fs-6">{{ item.category }}</span>
                                            <div class="fs-5 fw-medium mt-2">{{ item.name }}</div>
                                        </div>
                                        <div class="bg-surface-100 p-1" style="border-radius: 30px">
                                            <div
                                                class="bg-light d-flex align-items-center gap-2 justify-content-center py-1 px-2"
                                                style="
                                                    border-radius: 30px;
                                                    box-shadow:
                                                        0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                                                        0px 1px 2px 0px rgba(0, 0, 0, 0.06);
                                                "
                                            >
                                                <span class="text-dark fw-medium fs-6">{{ item.rating }}</span>
                                                <i class="pi pi-star-fill text-yellow-500"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-column md:align-items-end gap-4">
                                        <span class="fs-4 fw-semibold">$ {{ item.price }}</span>
                                        <div class="d-flex flex-row-reverse d-md-flex-row gap-2">
                                            <p-button icon="pi pi-heart" styleClass="h-100" [outlined]="true"></p-button>
                                            <p-button icon="pi pi-shopping-cart" label="Buy Now" [disabled]="item.inventoryStatus === 'OUTOFSTOCK'" styleClass="d-flex-auto d-md-flex-initial whitespace-nowrap"></p-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ng-template>

                <ng-template #grid let-items>
                    <div class="row row-cols-12 g-3">
                        <div *ngFor="let item of items; let i = index" class="col-12 sm:col-span-6 col-lg-4 p-2">
                            <div class="p-6 border border-secondary-200 bg-light rounded d-flex flex-column">
                                <div class="bg-surface-50 d-flex justify-content-center rounded p-6">
                                    <div class="position-relative mx-auto">
                                        <img class="rounded w-100" src="https://primefaces.org/cdn/primevue/images/product/{{ item.image }}" [alt]="item.name" style="max-width: 300px" />
                                        <div class="position-absolute bg-black/70 rounded" [style]="{ left: '4px', top: '4px' }">
                                            <p-tag [value]="item.inventoryStatus" [severity]="getSeverity(item)"></p-tag>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-12">
                                    <div class="d-flex flex-row justify-content-between align-items-start gap-2">
                                        <div>
                                            <span class="fw-medium text-surface-500 fs-6">{{ item.category }}</span>
                                            <div class="fs-5 fw-medium mt-1">{{ item.name }}</div>
                                        </div>
                                        <div class="bg-surface-100 p-1" style="border-radius: 30px">
                                            <div
                                                class="bg-light d-flex align-items-center gap-2 justify-content-center py-1 px-2"
                                                style="
                                                    border-radius: 30px;
                                                    box-shadow:
                                                        0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                                                        0px 1px 2px 0px rgba(0, 0, 0, 0.06);
                                                "
                                            >
                                                <span class="text-dark fw-medium fs-6">{{ item.rating }}</span>
                                                <i class="pi pi-star-fill text-yellow-500"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-column gap-6 mt-4">
                                        <span class="fs-3 fw-semibold">$ {{ item.price }}</span>
                                        <div class="d-flex gap-2">
                                            <p-button icon="pi pi-shopping-cart" label="Buy Now" [disabled]="item.inventoryStatus === 'OUTOFSTOCK'" class="d-flex-auto whitespace-nowrap" styleClass="w-100"></p-button>
                                            <p-button icon="pi pi-heart" styleClass="h-100" [outlined]="true"></p-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ng-template>
            </p-dataview>
        </div>

        <div class="d-flex flex-column d-lg-flex-row gap-20">
            <div class="lg:w-2/3">
                <div class="card">
                    <div class="fw-semibold fs-4 mb-3">PickList</div>
                    <p-pick-list [source]="sourceCities" [target]="targetCities" breakpoint="1400px">
                        <ng-template #item let-item>
                            {{ item.name }}
                        </ng-template>
                    </p-pick-list>
                </div>
            </div>

            <div class="lg:w-1/3">
                <div class="card">
                    <div class="fw-semibold fs-4 mb-3">OrderList</div>
                    <p-orderlist [value]="orderCities" dataKey="id" breakpoint="575px">
                        <ng-template #option let-option>
                            {{ option.name }}
                        </ng-template>
                    </p-orderlist>
                </div>
            </div>
        </div>
    </div>`,
    styles: `
        ::ng-deep {
            .p-orderlist-list-container {
                width: 100%;
            }
        }
    `,
    providers: [ProductService]
})
export class ListDemo {
    layout: 'list' | 'grid' = 'list';

    options = ['list', 'grid'];

    products: Product[] = [];

    sourceCities: any[] = [];

    targetCities: any[] = [];

    orderCities: any[] = [];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((data) => (this.products = data.slice(0, 6)));

        this.sourceCities = [
            { name: 'San Francisco', code: 'SF' },
            { name: 'London', code: 'LDN' },
            { name: 'Paris', code: 'PRS' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Berlin', code: 'BRL' },
            { name: 'Barcelona', code: 'BRC' },
            { name: 'Rome', code: 'RM' }
        ];

        this.targetCities = [];

        this.orderCities = [
            { name: 'San Francisco', code: 'SF' },
            { name: 'London', code: 'LDN' },
            { name: 'Paris', code: 'PRS' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Berlin', code: 'BRL' },
            { name: 'Barcelona', code: 'BRC' },
            { name: 'Rome', code: 'RM' }
        ];
    }

    getSeverity(product: Product) {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warn';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return 'info';
        }
    }
}
