import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatSelectModule, MatTooltipModule, MatInputModule } from '@angular/material';
import { MdModule } from 'app/md/md.module';

@NgModule({
    imports: [
        MatTooltipModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        RouterModule,
        MdModule,
        MatButtonModule,
        MatSelectModule,
    ],
    declarations: [NavbarComponent],
    exports: [NavbarComponent]
})

export class NavbarModule { }
