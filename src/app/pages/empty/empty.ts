import { Component } from '@angular/core';

@Component({
    selector: 'app-empty',
    standalone: true,
    template: ` <div class="card">
        <div class="fw-semibold fs-4 mb-3">Empty Page</div>
        <p>Use this page to start from scratch and place your custom content.</p>
    </div>`
})
export class Empty {}
