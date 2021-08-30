import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpandCollapseComponent } from './expand-collapse/expand-collapse.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [
    ExpandCollapseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    ExpandCollapseComponent,
    ProgressSpinnerModule,
    CardModule,
    InputSwitchModule
  ]
})
export class SharedModule { }
