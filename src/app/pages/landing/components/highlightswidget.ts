import { Component } from '@angular/core';

@Component({
    selector: 'highlights-widget',
    template: `
        <div id="highlights" class="py-4 px-3 px-lg-5 mx-0 my-12 mx-lg-5">
            <div class="text-center">
                <div class="text-dark fw-normal mb-2 fs-1">Powerful Everywhere</div>
                <span class="text-muted fs-3">Amet consectetur adipiscing elit...</span>
            </div>

            <div class="row row-cols-12 g-3 mt-5 pb-2 md:pb-20">
                <div class="d-flex justify-content-center col-12 lg:col-span-6 bg-purple-100 p-0 order-1 lg:order-none" style="border-radius: 8px">
                    <img src="https://primefaces.org/cdn/templates/sakai/landing/mockup.png" class="w-11/12" alt="mockup mobile" />
                </div>

                <div class="col-12 lg:col-span-6 my-auto d-flex flex-column lg:align-items-end text-center lg:text-end g-3">
                    <div class="d-flex align-items-center justify-content-center bg-primary bg-opacity-50 self-center lg:self-end" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                        <i class="pi pi-fw pi-mobile !fs-1 text-primary"></i>
                    </div>
                    <div class="leading-none text-dark fs-2 fw-normal">Congue Quisque Egestas</div>
                    <span class="text-surface-700 fs-3 lh-base ml-0 md:ms-2" style="max-width: 650px"
                        >Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mattis vulputate enim nulla aliquet.</span
                    >
                </div>
            </div>

            <div class="row row-cols-12 g-3 my-20 pt-2 md:pt-20">
                <div class="col-12 lg:col-span-6 my-auto d-flex flex-column text-center lg:text-start lg:align-items-start g-3">
                    <div class="d-flex align-items-center justify-content-center bg-warning bg-opacity-25 self-center lg:self-start" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                        <i class="pi pi-fw pi-desktop !fs-2 text-warning"></i>
                    </div>
                    <div class="leading-none text-dark fs-2 fw-normal">Celerisque Eu Ultrices</div>
                    <span class="text-surface-700 fs-3 lh-base mr-0 md:me-2" style="max-width: 650px"
                        >Adipiscing commodo elit at imperdiet dui. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Suspendisse in est ante in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.</span
                    >
                </div>

                <div class="d-flex justify-content-end order-1 sm:order-2 col-12 lg:col-span-6 bg-yellow-100 p-0" style="border-radius: 8px">
                    <img src="https://primefaces.org/cdn/templates/sakai/landing/mockup-desktop.png" class="w-11/12" alt="mockup" />
                </div>
            </div>
        </div>
    `
})
export class HighlightsWidget {}
