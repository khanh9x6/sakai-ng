import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';

@Component({
    selector: 'app-error',
    imports: [ButtonModule, RippleModule, RouterModule, AppFloatingConfigurator, ButtonModule],
    standalone: true,
    template: ` <app-floating-configurator />
        <div class="bg-surface-50 d-flex align-items-center justify-content-center min-h-screen min-w-[100vw] overflow-d-none">
            <div class="d-flex flex-column align-items-center justify-content-center">
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, rgba(233, 30, 99, 0.4) 10%, rgba(33, 150, 243, 0) 30%)">
                    <div class="w-100 bg-light py-20 px-8 sm:px-20 d-flex flex-column align-items-center" style="border-radius: 53px">
                        <div class="g-3 d-flex flex-column align-items-center">
                            <div class="d-flex justify-content-center align-items-center border-2 border-pink-500 rounded-circle" style="height: 3.2rem; width: 3.2rem">
                                <i class="pi pi-fw pi-exclamation-circle !fs-3 text-pink-500"></i>
                            </div>
                            <h1 class="text-dark fw-bold text-5xl mb-2">Error Occured</h1>
                            <span class="text-muted mb-5">Requested resource is not available.</span>
                            <img src="https://primefaces.org/cdn/templates/sakai/auth/asset-error.svg" alt="Error" class="mb-5" width="80%" />
                            <div class="col-12 mt-5 text-center">
                                <p-button label="Go to Dashboard" routerLink="/" severity="danger" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
})
export class Error {}
