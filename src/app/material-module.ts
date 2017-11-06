import { NgModule } from '@angular/core';

import {
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MAT_DATE_LOCALE,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
} from '@angular/material';

import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatTableModule,
        CdkTableModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatTableModule,
        CdkTableModule
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'PT-BR' },
    ],
})
export class MaterialModule { }
