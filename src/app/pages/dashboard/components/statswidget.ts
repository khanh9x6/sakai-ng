import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [CommonModule],
    template: `<div class="col-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="d-flex justify-content-between mb-3">
                    <div>
                        <span class="d-block text-muted fw-medium mb-3">Orders</span>
                        <div class="text-dark fw-medium fs-4">152</div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center bg-blue-100 /10 rounded" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 !fs-4"></i>
                    </div>
                </div>
                <span class="text-primary fw-medium">24 new </span>
                <span class="text-muted">since last visit</span>
            </div>
        </div>
        <div class="col-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="d-flex justify-content-between mb-3">
                    <div>
                        <span class="d-block text-muted fw-medium mb-3">Revenue</span>
                        <div class="text-dark fw-medium fs-4">$2.100</div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center bg-orange-100 /10 rounded" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-dollar text-orange-500 !fs-4"></i>
                    </div>
                </div>
                <span class="text-primary fw-medium">%52+ </span>
                <span class="text-muted">since last week</span>
            </div>
        </div>
        <div class="col-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="d-flex justify-content-between mb-3">
                    <div>
                        <span class="d-block text-muted fw-medium mb-3">Customers</span>
                        <div class="text-dark fw-medium fs-4">28441</div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center bg-cyan-100 /10 rounded" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-users text-cyan-500 !fs-4"></i>
                    </div>
                </div>
                <span class="text-primary fw-medium">520 </span>
                <span class="text-muted">newly registered</span>
            </div>
        </div>
        <div class="col-12 lg:col-span-6 xl:col-span-3">
            <div class="card mb-0">
                <div class="d-flex justify-content-between mb-3">
                    <div>
                        <span class="d-block text-muted fw-medium mb-3">Comments</span>
                        <div class="text-dark fw-medium fs-4">152 Unread</div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center bg-purple-100 /10 rounded" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-comment text-purple-500 !fs-4"></i>
                    </div>
                </div>
                <span class="text-primary fw-medium">85 </span>
                <span class="text-muted">responded</span>
            </div>
        </div>`
})
export class StatsWidget {}
