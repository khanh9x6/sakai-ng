import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { ProgressBarModule } from 'primeng/progressbar';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'app-misc-demo',
    standalone: true,
    imports: [CommonModule, ProgressBarModule, BadgeModule, AvatarModule, ScrollPanelModule, TagModule, ChipModule, ButtonModule, SkeletonModule, AvatarGroupModule, ScrollTopModule, OverlayBadgeModule],
    template: `
        <div class="card">
            <div class="fw-semibold fs-4 mb-3">ProgressBar</div>
            <div class="d-flex flex-column d-md-flex-row g-3">
                <div class="md:w-1/2">
                    <p-progressbar [value]="value" [showValue]="true"></p-progressbar>
                </div>
                <div class="md:w-1/2">
                    <p-progressbar [value]="50" [showValue]="false"></p-progressbar>
                </div>
            </div>
        </div>

        <div class="d-flex flex-column d-md-flex-row gap-4">
            <div class="md:w-1/2">
                <div class="card">
                    <div class="fw-semibold fs-4 mb-3">Badge</div>
                    <div class="d-flex gap-2">
                        <p-badge value="2"></p-badge>
                        <p-badge value="8" severity="success"></p-badge>
                        <p-badge value="4" severity="info"></p-badge>
                        <p-badge value="12" severity="warn"></p-badge>
                        <p-badge value="3" severity="danger"></p-badge>
                    </div>

                    <div class="fw-semibold my-3">Overlay</div>
                    <div class="d-flex gap-6">
                        <p-overlaybadge value="2">
                            <i class="pi pi-bell" style="font-size: 2rem"></i>
                        </p-overlaybadge>
                        <p-overlaybadge value="4" severity="danger">
                            <i class="pi pi-calendar" style="font-size: 2rem"></i>
                        </p-overlaybadge>
                        <p-overlaybadge severity="danger">
                            <i class="pi pi-envelope" style="font-size: 2rem"></i>
                        </p-overlaybadge>
                    </div>

                    <div class="fw-semibold my-3">Button</div>
                    <div class="d-flex gap-2">
                        <p-button label="Emails" badge="8"></p-button>
                        <p-button label="Messages" icon="pi pi-users" severity="warn" badge="8" badgeSeverity="danger"></p-button>
                    </div>

                    <div class="fw-semibold my-3">Sizes</div>
                    <div class="d-flex align-items-start gap-2">
                        <p-badge [value]="2"></p-badge>
                        <p-badge [value]="4" badgeSize="large" severity="warn"></p-badge>
                        <p-badge [value]="6" badgeSize="xlarge" severity="success"></p-badge>
                    </div>
                </div>

                <div class="card">
                    <div class="fw-semibold fs-4 mb-3">Avatar</div>
                    <div class="fw-semibold mb-3">Group</div>
                    <p-avatargroup styleClass="mb-3">
                        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" size="large" shape="circle"></p-avatar>
                        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" size="large" shape="circle"></p-avatar>
                        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" size="large" shape="circle"></p-avatar>
                        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png" size="large" shape="circle"></p-avatar>
                        <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" size="large" shape="circle"></p-avatar>
                        <p-avatar label="+2" shape="circle" size="large" [style]="{ 'background-color': '#9c27b0', color: '#ffffff' }"></p-avatar>
                    </p-avatargroup>

                    <div class="fw-semibold my-3">Label - Circle</div>
                    <p-avatar class="me-2" label="P" size="xlarge" shape="circle"></p-avatar>
                    <p-avatar class="me-2" label="V" size="large" [style]="{ 'background-color': '#2196F3', color: '#ffffff' }" shape="circle"></p-avatar>
                    <p-avatar class="me-2" label="U" [style]="{ 'background-color': '#9c27b0', color: '#ffffff' }" shape="circle"></p-avatar>

                    <div class="fw-semibold my-3">Icon - Badge</div>
                    <p-overlaybadge value="4" severity="danger" class="d-inline-d-flex">
                        <p-avatar label="U" size="xlarge" />
                    </p-overlaybadge>
                </div>

                <div class="card">
                    <div class="fw-semibold fs-4 mb-3">Skeleton</div>
                    <div class="rounded border border-secondary p-6">
                        <div class="d-flex mb-3">
                            <p-skeleton shape="circle" size="4rem" styleClass="me-2"></p-skeleton>
                            <div>
                                <p-skeleton width="10rem" styleClass="mb-2"></p-skeleton>
                                <p-skeleton width="5rem" styleClass="mb-2"></p-skeleton>
                                <p-skeleton height=".5rem"></p-skeleton>
                            </div>
                        </div>
                        <p-skeleton width="100%" height="150px"></p-skeleton>
                        <div class="d-flex justify-content-between mt-3">
                            <p-skeleton width="4rem" height="2rem"></p-skeleton>
                            <p-skeleton width="4rem" height="2rem"></p-skeleton>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:w-1/2">
                <div class="card">
                    <div class="fw-semibold fs-4 mb-3">Tag</div>
                    <div class="fw-semibold mb-3">Default</div>
                    <div class="d-flex gap-2">
                        <p-tag value="Primary"></p-tag>
                        <p-tag severity="success" value="Success"></p-tag>
                        <p-tag severity="info" value="Info"></p-tag>
                        <p-tag severity="warn" value="Warning"></p-tag>
                        <p-tag severity="danger" value="Danger"></p-tag>
                    </div>

                    <div class="fw-semibold my-3">Pills</div>
                    <div class="d-flex gap-2">
                        <p-tag value="Primary" [rounded]="true"></p-tag>
                        <p-tag severity="success" value="Success" [rounded]="true"></p-tag>
                        <p-tag severity="info" value="Info" [rounded]="true"></p-tag>
                        <p-tag severity="warn" value="Warning" [rounded]="true"></p-tag>
                        <p-tag severity="danger" value="Danger" [rounded]="true"></p-tag>
                    </div>

                    <div class="fw-semibold my-3">Icons</div>
                    <div class="d-flex gap-2">
                        <p-tag icon="pi pi-user" value="Primary"></p-tag>
                        <p-tag icon="pi pi-check" severity="success" value="Success"></p-tag>
                        <p-tag icon="pi pi-info-circle" severity="info" value="Info"></p-tag>
                        <p-tag icon="pi pi-exclamation-triangle" severity="warn" value="Warning"></p-tag>
                        <p-tag icon="pi pi-times" severity="danger" value="Danger"></p-tag>
                    </div>
                </div>

                <div class="card">
                    <div class="fw-semibold fs-4 mb-3">Chip</div>
                    <div class="fw-semibold mb-3">Basic</div>
                    <div class="d-flex align-items-center flex-column d-sm-flex-row">
                        <p-chip label="Action" styleClass="m-1"></p-chip>
                        <p-chip label="Comedy" styleClass="m-1"></p-chip>
                        <p-chip label="Mystery" styleClass="m-1"></p-chip>
                        <p-chip label="Thriller" styleClass="m-1" [removable]="true"></p-chip>
                    </div>

                    <div class="fw-semibold my-3">Icon</div>
                    <div class="d-flex align-items-center flex-column d-sm-flex-row">
                        <p-chip label="Apple" icon="pi pi-apple" styleClass="m-1"></p-chip>
                        <p-chip label="Facebook" icon="pi pi-facebook" styleClass="m-1"></p-chip>
                        <p-chip label="Google" icon="pi pi-google" styleClass="m-1"></p-chip>
                        <p-chip label="Microsoft" icon="pi pi-microsoft" styleClass="m-1" [removable]="true"></p-chip>
                    </div>

                    <div class="fw-semibold my-3">Image</div>
                    <div class="d-flex align-items-center flex-column d-sm-flex-row">
                        <p-chip label="Amy Elsner" image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" styleClass="m-1"></p-chip>
                        <p-chip label="Asiya Javayant" image="https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png" styleClass="m-1"></p-chip>
                        <p-chip label="Onyama Limba" image="https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png" styleClass="m-1"></p-chip>
                        <p-chip label="Xuxue Feng" image="https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png" styleClass="m-1" [removable]="true"></p-chip>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class MiscDemo {
    value = 0;

    interval: any;

    ngOnInit() {
        this.interval = setInterval(() => {
            this.value = this.value + Math.floor(Math.random() * 10) + 1;
            if (this.value >= 100) {
                this.value = 100;
                clearInterval(this.interval);
            }
        }, 2000);
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }
}
