import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormdebugComponent } from './formdebug/formdebug.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        FormdebugComponent,
        NotfoundComponent
    ],
    declarations: [
        FormdebugComponent,
        NotfoundComponent
    ],
    providers: []
})

export class SharedModule {}
