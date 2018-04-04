import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [
        // components
    ],
    providers: [
        // services
    ]
})

export class SharedModule {}
