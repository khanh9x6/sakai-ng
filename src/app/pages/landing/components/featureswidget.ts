import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'features-widget',
    standalone: true,
    imports: [CommonModule],
    template: ` <div id="features" class="py-3 px-3 px-lg-5 mt-3 mx-0 mx-lg-5">
        <div class="row g-3 justify-content-center">
            <div class="col-12 text-center mt-5 mb-3">
                <div class="text-dark fw-normal mb-2 display-5">Marvelous Features</div>
                <span class="text-muted fs-4">Placerat in egestas erat...</span>
            </div>

            <div class="col-12 col-md-12 col-lg-4 p-0 pe-lg-3 pb-lg-3 mt-3 mt-lg-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))">
                    <div class="p-3 bg-light h-100 rounded-2">
                        <div class="d-d-flex align-align-items-center justify-content-center bg-warning bg-opacity-25 mb-3 rounded-2" style="width: 3.5rem; height: 3.5rem;">
                            <i class="pi pi-fw pi-users fs-4 text-warning"></i>
                        </div>
                        <h5 class="mb-2 text-dark">Easy to Use</h5>
                        <span class="text-muted">Posuere morbi leo urna molestie.</span>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-12 col-lg-4 p-0 pe-lg-3 pb-lg-3 mt-3 mt-lg-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))">
                    <div class="p-3 bg-light h-100 rounded-2">
                        <div class="d-d-flex align-align-items-center justify-content-center bg-info bg-opacity-25 mb-3 rounded-2" style="width: 3.5rem; height: 3.5rem;">
                            <i class="pi pi-fw pi-palette fs-4 text-info"></i>
                        </div>
                        <h5 class="mb-2 text-dark">Fresh Design</h5>
                        <span class="text-muted">Semper risus in hendrerit.</span>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-12 col-lg-4 p-0 pb-lg-3 mt-3 mt-lg-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))">
                    <div class="p-3 bg-light h-100 rounded-2">
                        <div class="d-d-flex align-align-items-center justify-content-center bg-primary bg-opacity-25 rounded-2" style="width: 3.5rem; height: 3.5rem;">
                            <i class="pi pi-fw pi-map fs-4 text-primary"></i>
                        </div>
                        <div class="mt-3 mb-1 text-dark fs-5 fw-semibold">Well Documented</div>
                        <span class="text-muted">Non arcu risus quis varius quam quisque.</span>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-12 col-lg-4 p-0 pe-lg-3 pb-lg-3 mt-3 mt-lg-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(145, 210, 204, 0.2))">
                    <div class="p-3 bg-light h-100 rounded-2">
                        <div class="d-d-flex align-align-items-center justify-content-center bg-secondary bg-opacity-25 mb-3 rounded-2" style="width: 3.5rem; height: 3.5rem;">
                            <i class="pi pi-fw pi-id-card fs-4 text-secondary"></i>
                        </div>
                        <div class="mt-3 mb-1 text-dark fs-5 fw-semibold">Responsive Layout</div>
                        <span class="text-muted">Nulla malesuada pellentesque elit.</span>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-12 col-lg-4 p-0 pe-lg-3 pb-lg-3 mt-3 mt-lg-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2), rgba(160, 210, 250, 0.2))">
                    <div class="p-3 bg-light h-100 rounded-2">
                        <div class="d-d-flex align-align-items-center justify-content-center bg-warning bg-opacity-25 mb-3 rounded-2" style="width: 3.5rem; height: 3.5rem;">
                            <i class="pi pi-fw pi-star fs-4 text-warning"></i>
                        </div>
                        <div class="mt-3 mb-1 text-dark fs-5 fw-semibold">Clean Code</div>
                        <span class="text-muted">Condimentum lacinia quis vel eros.</span>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-12 col-lg-4 p-0 pb-lg-3 mt-3 mt-lg-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))">
                    <div class="p-3 bg-light h-100 rounded-2">
                        <div class="d-d-flex align-align-items-center justify-content-center bg-danger bg-opacity-25 mb-3 rounded-2" style="width: 3.5rem; height: 3.5rem;">
                            <i class="pi pi-fw pi-moon fs-4 text-danger"></i>
                        </div>
                        <div class="mt-3 mb-1 text-dark fs-5 fw-semibold">Dark Mode</div>
                        <span class="text-muted">Convallis tellus id interdum velit laoreet.</span>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-12 col-lg-4 p-0 pe-lg-3 mt-4 mt-lg-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))">
                    <div class="p-3 bg-light h-100" style="border-radius: 8px">
                        <div class="d-flex align-items-center justify-content-center bg-success bg-opacity-25 mb-3" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-shopping-cart !fs-3 text-success"></i>
                        </div>
                        <div class="mt-4 mb-1 text-dark fs-4 fw-semibold">Ready to Use</div>
                        <span class="text-muted ">Mauris sit amet massa vitae.</span>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-12 col-lg-4 p-0 pe-lg-3 mt-4 mt-lg-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))">
                    <div class="p-3 bg-light h-100" style="border-radius: 8px">
                        <div class="d-flex align-items-center justify-content-center bg-info bg-opacity-25 mb-3" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-globe !fs-3 text-info"></i>
                        </div>
                        <div class="mt-4 mb-1 text-dark fs-4 fw-semibold">Modern Practices</div>
                        <span class="text-muted ">Elementum nibh tellus molestie nunc non.</span>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-12 col-lg-4 p-0 lg-4 mt-4 mt-lg-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))">
                    <div class="p-3 bg-light h-100" style="border-radius: 8px">
                        <div class="d-flex align-items-center justify-content-center bg-primary bg-opacity-50 mb-3" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-eye !fs-3 text-primary"></i>
                        </div>
                        <div class="mt-4 mb-1 text-dark fs-4 fw-semibold">Privacy</div>
                        <span class="text-muted ">Neque egestas congue quisque.</span>
                    </div>
                </div>
            </div>

            <div
                class="col-12 mt-5 mb-20 p-2 p-md-5"
                style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
            >
                <div class="d-flex flex-column justify-content-center align-items-center text-center px-3 py-3 md:py-0">
                    <div class="text-dark mb-2 fs-2 fw-semibold">Joséphine Miller</div>
                    <span class="text-muted fs-3">Peak Interactive</span>
                    <p class="text-dark sm:lh-base md:lh-base fs-3 mt-4" style="max-width: 800px">
                        “Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
                    </p>
                    <img src="https://primefaces.org/cdn/templates/sakai/landing/peak-logo.svg" class="mt-4" alt="Company logo" />
                </div>
            </div>
        </div>
    </div>`
})
export class FeaturesWidget {}
