import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'hero-widget',
    imports: [ButtonModule, RippleModule],
    template: `
        <div
            id="hero"
            class="d-d-flex flex-column pt-4 px-3 px-lg-5 overflow-d-none"
            style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%); clip-path: ellipse(150% 87% at 93% 13%)"
        >
            <div class="mx-3 mx-md-5 mt-0 mt-md-4">
                <h1 class="display-3 fw-bold text-dark lh-sm"><span class="fw-light d-d-block">Eu sem integer</span>eget magna fermentum</h1>
                <p class="fw-normal fs-4 lh-base mt-md-3 text-dark">Sed blandit libero volutpat sed cras. Fames ac turpis egestas integer. Placerat in egestas erat...</p>
                <button pButton pRipple [rounded]="true" type="button" label="Get Started" class="fs-5 mt-3 px-3"></button>
            </div>
            <div class="d-d-flex justify-content-center justify-content-md-end">
                <img src="https://primefaces.org/cdn/templates/sakai/landing/screen-1.png" alt="Hero Image" class="w-75 w-md-auto" />
            </div>
        </div>
    `
})
export class HeroWidget {}
