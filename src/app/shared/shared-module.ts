import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FormdebugComponent } from './formdebug/formdebug.component';
import { FormFieldErrorComponent } from './form-field-error/form-field-error.component';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        FormdebugComponent,
        NotfoundComponent,
        FormFieldErrorComponent
    ],
    declarations: [
        FormdebugComponent,
        NotfoundComponent,
        FormFieldErrorComponent
    ],
    providers: []
})

export class SharedModule {}
