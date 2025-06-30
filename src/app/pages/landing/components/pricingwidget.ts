import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'pricing-widget',
    imports: [DividerModule, ButtonModule, RippleModule],
    template: `
        <div id="pricing" class="py-4 px-3 px-lg-5 my-2 md:my-6">
            <div class="text-center mb-4">
                <div class="text-dark fw-normal mb-2 fs-1">Matchless Pricing</div>
                <span class="text-muted fs-3">Amet consectetur adipiscing elit...</span>
            </div>

            <div class="row row-cols-12 g-3 justify-content-between mt-5 md:mt-0">
                <div class="col-12 col-lg-4 p-0 md:p-3">
                    <div class="p-3 d-flex flex-column border-secondary-200 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                        <div class="text-dark text-center my-8 fs-2">Free</div>
                        <img src="https://primefaces.org/cdn/templates/sakai/landing/free.svg" class="w-10/12 mx-auto" alt="free" />
                        <div class="my-8 d-flex flex-column align-items-center g-3">
                            <div class="d-flex align-items-center">
                                <span class="text-5xl fw-bold me-2 text-dark ">$0</span>
                                <span class="text-muted ">per month</span>
                            </div>
                            <button pButton pRipple label="Get Started" class="p-button-rounded border-0 ms-3 fw-light lh-sm bg-blue-500 text-white"></button>
                        </div>
                        <p-divider class="w-100 bg-surface-200"></p-divider>
                        <ul class="my-8 list-unstyled p-0 d-flex text-dark flex-column px-8">
                            <li class="py-2">
                                <i class="pi pi-fw pi-check fs-4 text-cyan-500 me-2"></i>
                                <span class="fs-4 lh-base">Responsive Layout</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check fs-4 text-cyan-500 me-2"></i>
                                <span class="fs-4 lh-base">Unlimited Push Messages</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check fs-4 text-cyan-500 me-2"></i>
                                <span class="fs-4 lh-base">50 Support Ticket</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check fs-4 text-cyan-500 me-2"></i>
                                <span class="fs-4 lh-base">Free Shipping</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 col-lg-4 p-0 md:p-3 mt-4 md:mt-0">
                    <div class="p-3 d-flex flex-column border-secondary-200 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                        <div class="text-dark text-center my-8 fs-2">Startup</div>
                        <img src="https://primefaces.org/cdn/templates/sakai/landing/startup.svg" class="w-10/12 mx-auto" alt="startup" />
                        <div class="my-8 d-flex flex-column align-items-center g-3">
                            <div class="d-flex align-items-center">
                                <span class="text-5xl fw-bold me-2 text-dark ">$1</span>
                                <span class="text-muted ">per month</span>
                            </div>
                            <button pButton pRipple label="Get Started" class="p-button-rounded border-0 ms-3 fw-light lh-sm bg-blue-500 text-white"></button>
                        </div>
                        <p-divider class="w-100 bg-surface-200"></p-divider>
                        <ul class="my-8 list-unstyled p-0 d-flex text-dark flex-column px-8">
                            <li class="py-2">
                                <i class="pi pi-fw pi-check fs-4 text-cyan-500 me-2"></i>
                                <span class="fs-4 lh-base">Responsive Layout</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check fs-4 text-cyan-500 me-2"></i>
                                <span class="fs-4 lh-base">Unlimited Push Messages</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check fs-4 text-cyan-500 me-2"></i>
                                <span class="fs-4 lh-base">50 Support Ticket</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check fs-4 text-cyan-500 me-2"></i>
                                <span class="fs-4 lh-base">Free Shipping</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 col-lg-4 p-0 md:p-3 mt-4 md:mt-0">
                    <div class="p-3 d-flex flex-column border-secondary-200 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                        <div class="text-dark text-center my-8 fs-2">Enterprise</div>
                        <img src="https://primefaces.org/cdn/templates/sakai/landing/enterprise.svg" class="w-10/12 mx-auto" alt="enterprise" />
                        <div class="my-8 d-flex flex-column align-items-center g-3">
                            <div class="d-flex align-items-center">
                                <span class="text-5xl fw-bold me-2 text-dark ">$5</span>
                                <span class="text-muted ">per month</span>
                            </div>
                            <button pButton pRipple label="Try Free" class="p-button-rounded border-0 ms-3 fw-light lh-sm bg-blue-500 text-white"></button>
                        </div>
                        <p-divider class="w-100 bg-surface-200"></p-divider>
                        <ul class="my-8 list-unstyled p-0 d-flex text-dark flex-column px-8">
                            <li class="py-2">
                                <i class="pi pi-fw pi-check fs-4 text-cyan-500 me-2"></i>
                                <span class="fs-4 lh-base">Responsive Layout</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check fs-4 text-cyan-500 me-2"></i>
                                <span class="fs-4 lh-base">Unlimited Push Messages</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check fs-4 text-cyan-500 me-2"></i>
                                <span class="fs-4 lh-base">50 Support Ticket</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check fs-4 text-cyan-500 me-2"></i>
                                <span class="fs-4 lh-base">Free Shipping</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class PricingWidget {}
