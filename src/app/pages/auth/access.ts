import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';

@Component({
    selector: 'app-access',
    standalone: true,
    imports: [ButtonModule, RouterModule, RippleModule, AppFloatingConfigurator, ButtonModule],
    template: ` <app-floating-configurator />
        <div class="bg-surface-50 d-flex align-items-center justify-content-center min-h-screen min-w-[100vw] overflow-d-none">
            <div class="d-flex flex-column align-items-center justify-content-center">
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, rgba(247, 149, 48, 0.4) 10%, rgba(247, 149, 48, 0) 30%)">
                    <div class="w-100 bg-light py-20 px-8 sm:px-20 d-flex flex-column align-items-center" style="border-radius: 53px">
                        <div class="g-3 d-flex flex-column align-items-center">
                            <div class="d-flex justify-content-center align-items-center border-2 border-orange-500 rounded-circle" style="width: 3.2rem; height: 3.2rem">
                                <i class="text-orange-500 pi pi-fw pi-lock !fs-3"></i>
                            </div>
                            <h1 class="text-dark fw-bold fs-1 lg:text-5xl mb-2">Access Denied</h1>
                            <span class="text-muted mb-5">You do not have the necessary permisions. Please contact admins.</span>
                            <img src="https://primefaces.org/cdn/templates/sakai/auth/asset-access.svg" alt="Access denied" class="mb-5" width="80%" />
                            <div class="col-12 mt-5 text-center">
                                <p-button label="Go to Dashboard" routerLink="/" severity="warn" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
})
export class Access {}
