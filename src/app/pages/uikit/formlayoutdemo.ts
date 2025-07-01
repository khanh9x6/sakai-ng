import { Component } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';

@Component({
    selector: 'app-formlayout-demo',
    standalone: true,
    imports: [InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule],
    template: `<p-fluid>
        <div class="d-flex flex-column d-md-flex-row gap-4">
            <div class="md:w-1/2">
                <div class="card d-flex flex-column g-3">
                    <div class="fw-semibold fs-4">Vertical</div>
                    <div class="d-flex flex-column gap-2">
                        <label for="name1">Name</label>
                        <input pInputText id="name1" type="text" />
                    </div>
                    <div class="d-flex flex-column gap-2">
                        <label for="email1">Email</label>
                        <input pInputText id="email1" type="text" />
                    </div>
                    <div class="d-flex flex-column gap-2">
                        <label for="age1">Age</label>
                        <input pInputText id="age1" type="text" />
                    </div>
                </div>

                <div class="card d-flex flex-column g-3">
                    <div class="fw-semibold fs-4">Vertical Grid</div>
                    <div class="d-flex flex-wrap gap-6">
                        <div class="d-flex flex-column flex-grow-1 basis-0 gap-2">
                            <label for="name2">Name</label>
                            <input pInputText id="name2" type="text" />
                        </div>
                        <div class="d-flex flex-column flex-grow-1 basis-0 gap-2">
                            <label for="email2">Email</label>
                            <input pInputText id="email2" type="text" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:w-1/2">
                <div class="card d-flex flex-column g-3">
                    <div class="fw-semibold fs-4">Horizontal</div>
                    <div class="row row-cols-12 g-3 row-cols-12 gap-2">
                        <label for="name3" class="d-flex align-items-center col-12 mb-2 md:col-span-2 md:mb-0">Name</label>
                        <div class="col-12 md:col-span-10">
                            <input pInputText id="name3" type="text" />
                        </div>
                    </div>
                    <div class="row row-cols-12 g-3 row-cols-12 gap-2">
                        <label for="email3" class="d-flex align-items-center col-12 mb-2 md:col-span-2 md:mb-0">Email</label>
                        <div class="col-12 md:col-span-10">
                            <input pInputText id="email3" type="text" />
                        </div>
                    </div>
                </div>

                <div class="card d-flex flex-column g-3">
                    <div class="fw-semibold fs-4">Inline</div>
                    <div class="d-flex flex-wrap align-items-start gap-6">
                        <div class="field">
                            <label for="firstname1" class="sr-only">Firstname</label>
                            <input pInputText id="firstname1" type="text" placeholder="Firstname" />
                        </div>
                        <div class="field">
                            <label for="lastname1" class="sr-only">Lastname</label>
                            <input pInputText id="lastname1" type="text" placeholder="Lastname" />
                        </div>
                        <p-button label="Submit" [fluid]="false"></p-button>
                    </div>
                </div>
                <div class="card d-flex flex-column g-3">
                    <div class="fw-semibold fs-4">Help Text</div>
                    <div class="d-flex flex-wrap gap-2">
                        <label for="username">Username</label>
                        <input pInputText id="username" type="text" />
                        <small>Enter your username to reset your password.</small>
                    </div>
                </div>
            </div>
        </div>

        <div class="d-flex mt-5">
            <div class="card d-flex flex-column gap-6 w-100">
                <div class="fw-semibold fs-4">Advanced</div>
                <div class="d-flex flex-column d-md-flex-row gap-6">
                    <div class="d-flex flex-wrap gap-2 w-100">
                        <label for="firstname2">Firstname</label>
                        <input pInputText id="firstname2" type="text" />
                    </div>
                    <div class="d-flex flex-wrap gap-2 w-100">
                        <label for="lastname2">Lastname</label>
                        <input pInputText id="lastname2" type="text" />
                    </div>
                </div>

                <div class="d-flex flex-wrap">
                    <label for="address">Address</label>
                    <textarea pTextarea id="address" rows="4"></textarea>
                </div>

                <div class="d-flex flex-column d-md-flex-row gap-6">
                    <div class="d-flex flex-wrap gap-2 w-100">
                        <label for="state">State</label>
                        <p-select id="state" [(ngModel)]="dropdownItem" [options]="dropdownItems" optionLabel="name" placeholder="Select One" class="w-100"></p-select>
                    </div>
                    <div class="d-flex flex-wrap gap-2 w-100">
                        <label for="zip">Zip</label>
                        <input pInputText id="zip" type="text" />
                    </div>
                </div>
            </div>
        </div>
    </p-fluid>`
})
export class FormLayoutDemo {
    dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];

    dropdownItem = null;
}
