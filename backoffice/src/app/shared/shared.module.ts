import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandCollapseComponent } from './expand-collapse/expand-collapse.component';

@NgModule({
  declarations: [
    ExpandCollapseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExpandCollapseComponent
  ]
})
export class SharedModule { }
