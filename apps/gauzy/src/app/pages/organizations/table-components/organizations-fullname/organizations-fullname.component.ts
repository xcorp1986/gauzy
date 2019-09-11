import { Component, Input } from '@angular/core';

@Component({
    selector: 'ngx-organizations-fullname',
    template: `
        <div>{{ value }}</div>
    `
})
export class OrganizationsFullnameComponent{
    @Input()
    rowData: any;

    value: string | number;
}