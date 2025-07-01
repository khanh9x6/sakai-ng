import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-documentation',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="card">
            <div class="fw-semibold fs-3 mb-3">Documentation</div>
            <div class="fw-semibold fs-4 mb-3">Get Started</div>
            <p class="fs-5 mb-3">Sakai is an application template for Angular and is distributed as a CLI project. Current versions is Angular v19 with PrimeNG v19. In case CLI is not installed already, use the command below to set it up.</p>
            <pre class="app-code">
<code>npm install -g &#64;angular/cli</code></pre>
            <p class="fs-5 mb-3">
                Once CLI is ready in your system, extract the contents of the zip file distribution, cd to the directory, install the libraries from npm and then execute "ng serve" to run the application in your local environment.
            </p>
            <pre class="app-code">
<code>git clone https://github.com/primefaces/sakai-ng
npm install
ng serve</code></pre>

            <p class="fs-5 mb-3">The application should run at <i class="bg-highlight px-2 py-1 rounded not-italic fs-6">http://localhost:4200/</i> to view the application in your local environment.</p>

            <div class="fw-semibold fs-4 mb-3">Structure</div>
            <p class="fs-5 mb-3">Templates consists of a couple folders, demos and layout have been separated so that you can easily identify what is necessary for your application.</p>
            <ul class="lh-base list-disc pl-8 fs-5 mb-3">
                <li><span class="text-primary fw-medium">src/app/layout</span>: Main layout files, needs to be present.</li>
                <li><span class="text-primary fw-medium">src/app/pages</span>: Demo content like Dashboard.</li>
                <li><span class="text-primary fw-medium">src/assets/demo</span>: Assets used in demos</li>
                <li><span class="text-primary fw-medium">src/assets/layout</span>: SCSS files of the main layout</li>
            </ul>

            <div class="fw-semibold fs-4 mb-3">Menu</div>
            <p class="fs-5 mb-3">
                Main menu is defined at <span class="bg-highlight px-2 py-1 rounded not-italic fs-6">src/app/layout/component/app.menu.ts</span> file. Update the
                <i class="bg-highlight px-2 py-1 rounded not-italic fs-6">model</i> property to define your own menu items.
            </p>

            <div class="fw-semibold fs-4 mb-3">Layout Service</div>
            <p class="fs-5 mb-3">
                <span class="bg-highlight px-2 py-1 rounded not-italic fs-6">src/app/layout/service/layout.service.ts</span> is a service that manages layout state changes, including dark mode, PrimeNG theme, menu modes, and states.
            </p>

            <div class="fw-semibold fs-4 mb-3">Bootstrap CSS</div>
            <p class="fs-5 mb-3">The demo pages are developed with Bootstrap CSS for responsive layouts and utility classes. The core application shell integrates Bootstrap with custom PrimeNG themes.</p>

            <div class="fw-semibold fs-4 mb-3">Variables</div>
            <p class="fs-5 mb-3">
                CSS variables used in the template are derived from the applied PrimeNG theme. Customize them through the CSS variables in <span class="bg-highlight px-2 py-1 rounded not-italic fs-6">src/assets/layout/variables</span>.
            </p>
        </div>
    `,
    styles: `
        @media screen and (max-width: 991px) {
            .video-container {
                position: position-relative;
                width: 100%;
                height: 0;
                padding-bottom: 56.25%;

                iframe {
                    position: position-absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    `
})
export class Documentation {}
